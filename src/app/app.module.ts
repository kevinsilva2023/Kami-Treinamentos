import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { CardCursoComponent } from './shared/menu-cursos/card-curso/card-curso.component';
import { AtendimentoAoClienteComponent } from './pages/conteudos/atendimento-ao-cliente/atendimento-ao-cliente.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuCursosComponent } from './shared/menu-cursos/menu-cursos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/login/login.component';
import { QuestionarioComponent } from './shared/questionario/questionario.component';
import { VideoComponent } from './shared/video/video.component';
import { BotaoVoltarComponent } from './shared/botao-voltar/botao-voltar.component';
import { BotaoVerMaisComponent } from './shared/botao-ver-mais/botao-ver-mais.component';
import { ModeloComponent } from './pages/conteudos/modelo/modelo.component';

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
    ModeloComponent
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
