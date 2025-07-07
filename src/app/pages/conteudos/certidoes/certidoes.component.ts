import { Component } from '@angular/core';
import { CarouselItem } from 'src/app/shared/slide-conteudo/slide-conteudo.component';

@Component({
  selector: 'app-certidoes',
  templateUrl: './certidoes.component.html',
  styleUrls: ['../modelo/modelo.component.scss']
})
export class CertidoesComponent {

    private readonly STORAGE_KEY = 'certidoes';
    passosConcluidos: number[] = [];
    activeId: string = '1';
    mostrarBotaoProximo = false;
    autoAvancarHabilitado = true;
    autoAvancarExecutado = false;
    menuOculto = false;
  
    carouselItems: CarouselItem[] = [
      { type: 'video', src: '/assets/videos/certidoes/1.mp4' },
      { type: 'video', src: '/assets/videos/certidoes/2.mp4' },
      { type: 'video', src: '/assets/videos/certidoes/3.mp4' },
      { type: 'video', src: '/assets/videos/certidoes/4.mp4' },
      { type: 'video', src: '/assets/videos/certidoes/5.mp4' },
      { type: 'video', src: '/assets/videos/certidoes/6.mp4' },
      { type: 'video', src: '/assets/videos/certidoes/7.mp4' },
      { type: 'video', src: '/assets/videos/certidoes/8.mp4' },
      { type: 'video', src: '/assets/videos/certidoes/9.mp4' },
      { type: 'video', src: '/assets/videos/certidoes/10.mp4' },
      { type: 'video', src: '/assets/videos/certidoes/11.mp4' },
      { type: 'video', src: '/assets/videos/certidoes/12.mp4' },
      { type: 'video', src: '/assets/videos/certidoes/13.mp4' },
      { type: 'video', src: '/assets/videos/certidoes/14.mp4' },
      { type: 'video', src: '/assets/videos/certidoes/15.mp4' },
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