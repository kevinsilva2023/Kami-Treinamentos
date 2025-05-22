import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtendimentoAoClienteComponent } from './pages/conteudos/atendimento-ao-cliente/atendimento-ao-cliente.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ModeloComponent } from './pages/conteudos/modelo/modelo.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cursos/atendimento-ao-cliente', component: AtendimentoAoClienteComponent },
  { path: 'cursos/modelo', component: ModeloComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
