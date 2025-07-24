

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
import { TributosDiferidosComponent } from './pages/conteudos/tributos-diferidos/tributos-diferidos.component';
import { CertidoesComponent } from './pages/conteudos/certidoes/certidoes.component';
import { ReformaTributariaComponent } from './pages/conteudos/reforma-tributaria/reforma-tributaria.component';
import { SidebarReformaComponent } from './components/reforma-tributaria/sidebar-reforma/sidebar-reforma.component';
import { ConteudoReformaComponent } from './components/reforma-tributaria/conteudo-reforma/conteudo-reforma.component';
import { IntroducaoComponent } from './components/reforma-tributaria/conteudo-reforma/introducao/introducao.component';
import { CronogramaComponent } from './components/reforma-tributaria/conteudo-reforma/cronograma/cronograma.component';
import { CalculoComponent } from './components/reforma-tributaria/conteudo-reforma/calculo/calculo.component';
import { CreditoComponent } from './components/reforma-tributaria/conteudo-reforma/credito/credito.component';
import { RecolhimentoComponent } from './components/reforma-tributaria/conteudo-reforma/recolhimento/recolhimento.component';
import { RestituicaoCashbackComponent } from './components/reforma-tributaria/conteudo-reforma/restituicao-cashback/restituicao-cashback.component';
import { SplitPaymentComponent } from './components/reforma-tributaria/conteudo-reforma/split-payment/split-payment.component';
import { IpiComponent } from './components/reforma-tributaria/conteudo-reforma/ipi/ipi.component';
import { SimplesNacionalComponent } from './components/reforma-tributaria/conteudo-reforma/simples-nacional/simples-nacional.component';
import { ImpostoSeletivoComponent } from './components/reforma-tributaria/conteudo-reforma/imposto-seletivo/imposto-seletivo.component';
import { NotaFiscalComponent } from './components/reforma-tributaria/conteudo-reforma/nota-fiscal/nota-fiscal.component';
import { DuvidasComponent } from './components/reforma-tributaria/conteudo-reforma/duvidas/duvidas.component';
import { BaseLegalComponent } from './components/reforma-tributaria/conteudo-reforma/base-legal/base-legal.component';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';


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
    TributosDiferidosComponent,
    CertidoesComponent,
    ReformaTributariaComponent,
    SidebarReformaComponent,
    ConteudoReformaComponent,
    IntroducaoComponent,
    CronogramaComponent,
    CalculoComponent,
    CreditoComponent,
    RecolhimentoComponent,
    RestituicaoCashbackComponent,
    SplitPaymentComponent,
    IpiComponent,
    SimplesNacionalComponent,
    ImpostoSeletivoComponent,
    NotaFiscalComponent,
    DuvidasComponent,
    BaseLegalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgbAccordionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
