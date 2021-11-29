import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { WebService } from '../web.service';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.css'],
})
export class MensagensComponent implements OnInit {
  formCadastroMensagem: FormGroup;
  usuario = '';

  constructor(
    private service: WebService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.usuario = sessionStorage.getItem('usuario');
  }

  private initForm() {
    this.formCadastroMensagem = new FormGroup({
      text: new FormControl(null, [
        Validators.required,
        Validators.maxLength(500),
      ]),
    });
  }

  onSubmit(): void {
    console.log(this.formCadastroMensagem);
    if (this.formCadastroMensagem.valid) {
      this.service
        .registerMessage(this.formCadastroMensagem.value)
        .subscribe((res) => {
          this.toastr.success('Mensagem cadastrada com sucesso');
        });
    }
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['/']);
    this.toastr.success('Você foi deslogado com sucesso!');
  }
}
