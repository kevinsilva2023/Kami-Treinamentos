import { Component } from '@angular/core';
import { CarouselItem } from 'src/app/shared/slide-conteudo/slide-conteudo.component';

@Component({
  selector: 'app-tributos-deferidos',
  templateUrl: './tributos-diferidos.component.html',
  styleUrls: ['../modelo/modelo.component.scss']
})
export class TributosDiferidosComponent {

    private readonly STORAGE_KEY = 'tributos-diferidos';
    passosConcluidos: number[] = [];
    activeId: string = '1';
    mostrarBotaoProximo = false;
    autoAvancarHabilitado = true;
    autoAvancarExecutado = false;
    menuOculto = false;
  
    carouselItems: CarouselItem[] = [
      { type: 'video', src: '/assets/videos/tributos-diferidos/1.mp4' },
      { type: 'video', src: '/assets/videos/tributos-diferidos/2.mp4' },
      { type: 'video', src: '/assets/videos/tributos-diferidos/3.mp4' },
      { type: 'video', src: '/assets/videos/tributos-diferidos/4.mp4' },
      { type: 'video', src: '/assets/videos/tributos-diferidos/5.mp4' },
      { type: 'video', src: '/assets/videos/tributos-diferidos/6.mp4' },
      { type: 'video', src: '/assets/videos/tributos-diferidos/7.mp4' },
      { type: 'video', src: '/assets/videos/tributos-diferidos/8.mp4' },
      { type: 'video', src: '/assets/videos/tributos-diferidos/9.mp4' },
      { type: 'video', src: '/assets/videos/tributos-diferidos/10.mp4'},
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
  
    private jaMarcado = false;
  
    ngDoCheck() {
      if (!this.jaMarcado && this.activeId === '7') {
        this.marcarComoConcluido(7);
        this.jaMarcado = true;
      }
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
