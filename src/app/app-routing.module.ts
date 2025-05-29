import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RecepcaoDeDocumentosComponent } from './pages/conteudos/recepcao-de-documentos/recepcao-de-documentos.component';
import { ModeloComponent } from './pages/conteudos/modelo/modelo.component';
import { IntegracaoComponent } from './pages/conteudos/integracao/integracao.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cursos/modelo', component: ModeloComponent },
  { path: 'cursos/recepcao-de-documentos', component: RecepcaoDeDocumentosComponent },
  { path: 'cursos/integracao', component: IntegracaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
