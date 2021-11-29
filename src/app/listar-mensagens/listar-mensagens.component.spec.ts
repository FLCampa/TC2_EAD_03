import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMensagensComponent } from './listar-mensagens.component';

describe('ListarMensagensComponent', () => {
  let component: ListarMensagensComponent;
  let fixture: ComponentFixture<ListarMensagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarMensagensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMensagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
