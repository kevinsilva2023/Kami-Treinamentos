import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SolicitacaoDeDocumentosComponent } from './pages/conteudos/solicitacao-de-documentos/solicitacao-de-documentos';
import { ModeloComponent } from './pages/conteudos/modelo/modelo.component';
import { IntegracaoComponent } from './pages/conteudos/integracao/integracao.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cursos/modelo', component: ModeloComponent },
  { path: 'cursos/solicitacao-de-documentos', component: SolicitacaoDeDocumentosComponent },
  { path: 'cursos/integracao', component: IntegracaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
