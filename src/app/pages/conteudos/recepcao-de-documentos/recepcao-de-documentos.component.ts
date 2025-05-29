import { AfterViewInit, Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { CarouselItem } from 'src/app/shared/slide-conteudo/slide-conteudo.component';

@Component({
  selector: 'app-recepcao-de-documentos',
  templateUrl: './recepcao-de-documentos.component.html',
  styleUrls: ['../modelo/modelo.component.scss']
})
export class RecepcaoDeDocumentosComponent {

  private readonly STORAGE_KEY = 'recepcao-de-documentos';
  passosConcluidos: number[] = [];
  activeId: string = '1';
  mostrarBotaoProximo = false;
  autoAvancarHabilitado = true;
  autoAvancarExecutado = false;
  menuOculto = false;

  carouselItems: CarouselItem[] = [
    { type: 'video', src: '../../../assets/videos/atendimento-ao-cliente/criando-relacionamento.mp4' },
    { type: 'image', src: '../../../assets/imagens/atendimento-ao-cliente.jpg' },
  ];

  ngOnInit() {
    const armazenado = localStorage.getItem(this.STORAGE_KEY);
    if (armazenado) {
      this.passosConcluidos = JSON.parse(armazenado);
    }
  }

  marcarComoConcluido(passo: number) {
    if (!this.passosConcluidos.includes(passo)) {
      this.passosConcluidos.push(passo);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.passosConcluidos));
    }
    this.mostrarBotaoProximo = true;
  }

  irParaProximoPasso() {
    const proximo = (parseInt(this.activeId, 10) + 1).toString();
    this.activeId = proximo;
    this.mostrarBotaoProximo = false;


    this.autoAvancarExecutado = false;
  }

  onBotaoAvancar() {
    this.irParaProximoPasso();
    if (this.autoAvancarHabilitado && !this.autoAvancarExecutado) {
      this.autoAvancarExecutado = true;
    }
  }

  onMenuToggle(novoValor: boolean) {
    this.menuOculto = novoValor;
  }
}
