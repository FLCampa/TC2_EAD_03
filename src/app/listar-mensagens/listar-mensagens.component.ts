import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../message.model';
import { WebService } from '../web.service';

@Component({
  selector: 'app-listar-mensagens',
  templateUrl: './listar-mensagens.component.html',
  styleUrls: ['./listar-mensagens.component.css'],
})
export class ListarMensagensComponent implements OnInit {
  listaMensagens: Message[];

  constructor(private service: WebService, private router: Router) {}

  ngOnInit(): void {
    this.getMensagens();
  }

  getMensagens(): void {
    this.service.getMessages().subscribe((res) => {
      this.listaMensagens = res;
      this.ngOnInit();
    });
  }
}
