import { Component } from '@angular/core';
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
    { type: 'image', src: '../../../assets/imagens/recepcao-de-documentos/1.png' },
    { type: 'image', src: '../../../assets/imagens/recepcao-de-documentos/2.png' },
    { type: 'image', src: '../../../assets/imagens/recepcao-de-documentos/3.png' },
    { type: 'image', src: '../../../assets/imagens/recepcao-de-documentos/4.png' },
    { type: 'image', src: '../../../assets/imagens/recepcao-de-documentos/5.png' },
    { type: 'image', src: '../../../assets/imagens/recepcao-de-documentos/6.png' },
    { type: 'image', src: '../../../assets/imagens/recepcao-de-documentos/7.png' },
    { type: 'image', src: '../../../assets/imagens/recepcao-de-documentos/8.png' },
    { type: 'image', src: '../../../assets/imagens/recepcao-de-documentos/9.png' },
    { type: 'image', src: '../../../assets/imagens/recepcao-de-documentos/10.png' },
    { type: 'image', src: '../../../assets/imagens/recepcao-de-documentos/11.png' },
    { type: 'image', src: '../../../assets/imagens/recepcao-de-documentos/12.png' },
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
