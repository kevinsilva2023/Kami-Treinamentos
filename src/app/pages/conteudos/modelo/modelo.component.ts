import { Component } from '@angular/core';
import { CarouselItem } from 'src/app/shared/slide-conteudo/slide-conteudo.component';

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styleUrls: ['./modelo.component.scss']
})
export class ModeloComponent {
    private readonly STORAGE_KEY = 'recepcao-de-documentos';
    passosConcluidos: number[] = [];
    activeId: string = '5';
    mostrarBotaoProximo = false;
    autoAvancarHabilitado = true;
    autoAvancarExecutado = false;
    menuOculto = false;
  
      carouselItems: CarouselItem[] = [
        { type: 'video', src: '...' },
        { type: 'image', src: '...' },
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
