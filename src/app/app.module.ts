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

import { HomeComponent } from './pages/home/home.component';
import { MenuCursosComponent } from './pages/menu-cursos/menu-cursos.component';
import { LoginComponent } from './pages/login/login.component';

import { AtendimentoAoClienteComponent } from './pages/conteudos/atendimento-ao-cliente/atendimento-ao-cliente.component';
import { ModeloComponent } from './pages/conteudos/modelo/modelo.component';
import { MenuFiltroComponent } from './shared/menu-filtro/menu-filtro.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardCursoComponent,
    AtendimentoAoClienteComponent,
    HomeComponent,
    MenuCursosComponent,
    LoginComponent,
    QuestionarioComponent,
    VideoComponent,
    BotaoVoltarComponent,
    BotaoVerMaisComponent,
    ModeloComponent,
    MenuFiltroComponent,
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
