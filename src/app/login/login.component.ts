import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { WebService } from '../web.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private service: WebService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.formLogin = new FormGroup({
      login: new FormControl(null, [Validators.required, Validators.email]),
      senha: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSubmit(): void {
    console.log(this.formLogin);
    if (this.formLogin.valid) {
      this.service.login(this.formLogin.value).subscribe((res) => {
        if (res.body.token) {
          sessionStorage.setItem('token', res.body.token);
          this.toastr.success('Login realizado com sucesso');
        } else {
          this.toastr.error('Login ou senha inválidos');
        }
      });
    }
  }
}
