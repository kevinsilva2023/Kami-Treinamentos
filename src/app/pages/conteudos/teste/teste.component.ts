import { Component } from '@angular/core';
import { CarouselItem } from 'src/app/shared/slide-conteudo/slide-conteudo.component';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['../modelo/modelo.component.scss']
})
export class TesteComponent {

    private readonly STORAGE_KEY = 'teste';
    passosConcluidos: number[] = [];
    activeId: string = '1';
    mostrarBotaoProximo = false;
    autoAvancarHabilitado = true;
    autoAvancarExecutado = false;
    menuOculto = false;
  
    carouselItems: CarouselItem[] = [
      { type: 'video', src: '../../../assets/videos/teste/1.mp4' },
      { type: 'video', src: '../../../assets/videos/teste/2.mp4' },
      { type: 'video', src: '../../../assets/videos/teste/3.mp4' },
      { type: 'video', src: '../../../assets/videos/teste/4.mp4' },
      { type: 'video', src: '../../../assets/videos/teste/5.mp4' },
      { type: 'video', src: '../../../assets/videos/teste/6.mp4' },
      { type: 'video', src: '../../../assets/videos/teste/7.mp4' },
      { type: 'video', src: '../../../assets/videos/teste/8.mp4' },
      { type: 'video', src: '../../../assets/videos/teste/9.mp4' },
      { type: 'video', src: '../../../assets/videos/teste/10.mp4' },
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
