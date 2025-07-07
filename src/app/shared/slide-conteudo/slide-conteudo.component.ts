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
      return;
    }

    // Controle pelas setas do teclado
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.carousel.next();
      return;
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.carousel.prev();
      return;
    }

    if (event.code === 'Space') {
      event.preventDefault();

      const activeSlideId = this.getActiveSlideIndex();
      if (activeSlideId === null) return;

      const videos = document.querySelectorAll<HTMLVideoElement>('.media-wrapper video');
      const videoAtivo = videos[activeSlideId];
      if (!videoAtivo) return;

      if (videoAtivo.paused) {
        videoAtivo.play();
      } else {
        videoAtivo.pause();
      }
    }
  };

  getActiveSlideIndex(): number | null {
    if (!this.carousel) return null;

    const activeId = this.carousel.activeId;
    if (!activeId) return null;

    const match = activeId.match(/ngb-slide-(\d+)/);
    if (!match) return null;

    return parseInt(match[1], 10);
  }

  handleFullscreenChange = (): void => {
    if (!document.fullscreenElement && this.fullscreenAtivo) {
      this.fullscreenAtivo = false;
    }
  };

  async onSlideChange(event: any) {
    this.pausarVideos();

    await this.delay(50);

    const carouselElem = document.querySelector('.custom-carousel') as HTMLElement;
    if (carouselElem) {
      carouselElem.focus();
    }

    const activeSlideId = parseInt(event.current.replace('ngb-slide-', ''), 10);
    if (activeSlideId === this.items.length - 1) {
      localStorage.setItem(`${this.id}`, 'true');
      this.chegouNoUltimoSlide.emit();
    }
  }

  pausarVideos() {
    const videos = document.querySelectorAll<HTMLVideoElement>('.media-wrapper video');
    videos.forEach(video => {
      if (!video.paused) {
        video.pause();
      }
    });
  }

  fecharMenu() {
    this.menuOculto = !this.menuOculto;
    this.menuToggle.emit(this.menuOculto);
  }

  toggleFullscreen() {
    const elem = document.querySelector('.slide-card');

    if (!elem) return;

    if (!this.fullscreenAtivo) {
      this.fullscreenAtivo = true;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      }
    } else {
      this.fullscreenAtivo = false;
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export interface CarouselItem {
  type: 'image' | 'video';
  src: string;
}
