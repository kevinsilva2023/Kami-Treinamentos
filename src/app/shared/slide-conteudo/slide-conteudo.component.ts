import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  OnInit,
  OnDestroy
} from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slide-conteudo',
  templateUrl: './slide-conteudo.component.html',
  styleUrls: ['./slide-conteudo.component.scss']
})
export class SlideConteudoComponent implements OnInit, OnDestroy {
  @Input() items: CarouselItem[] = [];
  @Input() id: string = '';
  @Output() chegouNoUltimoSlide = new EventEmitter<void>();
  @Output() menuToggle = new EventEmitter<boolean>();
  @ViewChild('carousel', { static: false }) carousel!: NgbCarousel;

  menuOculto = false;
  fullscreenAtivo = false;

  ngOnInit(): void {
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('fullscreenchange', this.handleFullscreenChange);
  }

  ngOnDestroy(): void {
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('fullscreenchange', this.handleFullscreenChange);
  }

  handleKeyDown = (event: KeyboardEvent): void => {
    if (this.fullscreenAtivo && (event.key === 'Escape' || event.key === 'F11')) {
      this.toggleFullscreen(); 
    }
  };

  handleFullscreenChange = (): void => {
    if (!document.fullscreenElement && this.fullscreenAtivo) {
      this.fullscreenAtivo = false;
    }
  };

  onSlideChange(event: any) {
    const activeSlideId = parseInt(event.current.replace('ngb-slide-', ''), 10);
    if (activeSlideId === this.items.length - 1) {
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
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      }
    } else {
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
}

export interface CarouselItem {
  type: 'image' | 'video';
  src: string;
}
