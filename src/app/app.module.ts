import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { CardCursoComponent } from './shared/card-curso/card-curso.component';
import { QuestionarioComponent } from './shared/questionario/questionario.component';
import { BotaoVoltarComponent } from './shared/botao-voltar/botao-voltar.component';
import { BotaoVerMaisComponent } from './shared/botao-ver-mais/botao-ver-mais.component';
import { VideoComponent } from './shared/video/video.component';
import { TextoConteudoComponent } from './shared/texto-conteudo/texto-conteudo.component';
import { MenuFiltroComponent } from './shared/menu-filtro/menu-filtro.component';
import { BotaoProximoItemComponent } from './shared/botao-proximo-item/botao-proximo-item.component';
import { SlideConteudoComponent } from './shared/slide-conteudo/slide-conteudo.component';
import { ModeloEmailComponent } from './shared/modelo-email/modelo-email.component';

import { HomeComponent } from './pages/home/home.component';
import { MenuCursosComponent } from './pages/menu-cursos/menu-cursos.component';
import { LoginComponent } from './pages/login/login.component';
import { ModeloComponent } from './pages/conteudos/modelo/modelo.component';
import { IntegracaoComponent } from './pages/conteudos/integracao/integracao.component';
import { SolicitacaoDeDocumentosComponent } from './pages/conteudos/solicitacao-de-documentos/solicitacao-de-documentos.component';
import { KamitogetherComponent } from './pages/conteudos/kamitogether/kamitogether.component';
import { TesteComponent } from './pages/conteudos/teste/teste.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardCursoComponent,
    HomeComponent,
    MenuCursosComponent,
    LoginComponent,
    QuestionarioComponent,
    VideoComponent,
    BotaoVoltarComponent,
    BotaoVerMaisComponent,
    MenuFiltroComponent,
    BotaoProximoItemComponent,
    SlideConteudoComponent,
    ModeloComponent,
    SolicitacaoDeDocumentosComponent,
    IntegracaoComponent,
    TextoConteudoComponent,
    ModeloEmailComponent,
    KamitogetherComponent,
    TesteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
