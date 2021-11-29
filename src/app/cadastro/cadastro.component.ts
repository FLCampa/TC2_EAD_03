import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { WebService } from '../web.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  formCadastro: FormGroup;

  constructor(private service: WebService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.formCadastro = new FormGroup({
      nome: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      login: new FormControl(null, [Validators.required, Validators.email]),
      senha: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSubmit(): void {
    console.log(this.formCadastro);
    if (this.formCadastro.valid) {
      this.service.registerUser(this.formCadastro.value).subscribe((res) => {
        if (res.body.token) {
          sessionStorage.setItem('token', res.body.token);
          this.toastr.success('Cadastro realizado com sucesso');
        } else {
          this.toastr.error('Cadastro inválido');
        }
      });
    }
  }
}
