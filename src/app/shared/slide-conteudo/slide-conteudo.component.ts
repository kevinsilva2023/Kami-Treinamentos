import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slide-conteudo',
  templateUrl: './slide-conteudo.component.html',
  styleUrls: ['./slide-conteudo.component.scss']
})
export class SlideConteudoComponent {
  @Input() items: CarouselItem[] = [];
  @Input() id: string = '';
  @Output() chegouNoUltimoSlide = new EventEmitter<void>();
  @ViewChild('carousel', { static: false }) carousel!: NgbCarousel;

  @Output() menuToggle = new EventEmitter<boolean>();

  menuOculto = false;
  fullscreenAtivo = false;

  onSlideChange(event: any) {
    const activeSlideId = parseInt(event.current.replace('ngb-slide-', ''), 10);

    if (activeSlideId === this.items.length - 1) {
      console.log('ultimo slide')
      localStorage.setItem(`${this.id}`, 'true');
      this.chegouNoUltimoSlide.emit();
    }
  }
  fecharMenu() {
    this.menuOculto = !this.menuOculto;
    this.menuToggle.emit(this.menuOculto);
  }

  toggleFullscreen() {
    this.fullscreenAtivo = !this.fullscreenAtivo;


    const elem = document.documentElement;

    if (this.fullscreenAtivo) {
      // Entra no modo tela cheia do navegador
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if ((elem as any).webkitRequestFullscreen) {
        (elem as any).webkitRequestFullscreen(); // Safari
      } else if ((elem as any).msRequestFullscreen) {
        (elem as any).msRequestFullscreen(); // IE11
      }
    } else {
      // Sai do modo tela cheia
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen(); // Safari
      } else if ((document as any).msExitFullscreen) {
        (document as any).msExitFullscreen(); // IE11
      }
    }

  }
}

export interface CarouselItem {
  type: 'image' | 'video';
  src: string;

}
