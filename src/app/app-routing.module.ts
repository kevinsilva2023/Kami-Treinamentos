import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SolicitacaoDeDocumentosComponent } from './pages/conteudos/solicitacao-de-documentos/solicitacao-de-documentos.component';
import { ModeloComponent } from './pages/conteudos/modelo/modelo.component';
import { IntegracaoComponent } from './pages/conteudos/integracao/integracao.component';
import { AuthGuard } from './auth.guard';
import { KamitogetherComponent } from './pages/conteudos/kamitogether/kamitogether.component';
import { TributosDiferidosComponent } from './pages/conteudos/tributos-diferidos/tributos-diferidos.component';
import { CertidoesComponent } from './pages/conteudos/certidoes/certidoes.component';
import { ReformaTributariaComponent } from './pages/conteudos/reforma-tributaria/reforma-tributaria.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'cursos/modelo', component: ModeloComponent, canActivate: [AuthGuard] },
  { path: 'cursos/solicitacao-de-documentos', component: SolicitacaoDeDocumentosComponent, canActivate: [AuthGuard] },
  { path: 'cursos/integracao', component: IntegracaoComponent, canActivate: [AuthGuard] },
  { path: 'cursos/kamitogether', component: KamitogetherComponent, canActivate: [AuthGuard] },
  { path: 'cursos/tributos-diferidos', component: TributosDiferidosComponent, canActivate: [AuthGuard] },
  { path: 'cursos/certidoes', component: CertidoesComponent, canActivate: [AuthGuard] },
  { path: 'cursos/reforma-tributaria', component: ReformaTributariaComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
