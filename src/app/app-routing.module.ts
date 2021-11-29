import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MensagensComponent } from './mensagens/mensagens.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'messages', component: MensagensComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
