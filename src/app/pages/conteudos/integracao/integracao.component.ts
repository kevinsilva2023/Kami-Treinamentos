import { Component } from '@angular/core';
import { CarouselItem } from 'src/app/shared/slide-conteudo/slide-conteudo.component';

@Component({
  selector: 'app-integracao',
  templateUrl: './integracao.component.html',
  styleUrls: ['../modelo/modelo.component.scss']
})
export class IntegracaoComponent {
    private readonly STORAGE_KEY = 'integracao';
    passosConcluidos: number[] = [];
    activeId: string = '1';
    mostrarBotaoProximo = false;
    autoAvancarHabilitado = true;
    autoAvancarExecutado = false;
    menuOculto = false;
  
      carouselItems: CarouselItem[] = [
        { type: 'image', src: '/assets/imagens/integracao/Slide1.jpg' },
        { type: 'image', src: '/assets/imagens/integracao/Slide2.jpg' },
        { type: 'image', src: '/assets/imagens/integracao/Slide3.jpg' },
        { type: 'image', src: '/assets/imagens/integracao/Slide4.jpg' },
        { type: 'image', src: '/assets/imagens/integracao/Slide8.jpg' },
        { type: 'image', src: '/assets/imagens/integracao/Slide9.jpg' },
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
