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
  bloqueioTemporarioEspaco = false;

  ngOnInit(): void {
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('fullscreenchange', this.handleFullscreenChange);
  }

  ngOnDestroy(): void {
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('fullscreenchange', this.handleFullscreenChange);
  }

  handleKeyDown = (event: KeyboardEvent): void => {
    const isTyping =
      event.target instanceof HTMLInputElement ||
      event.target instanceof HTMLTextAreaElement ||
      (event.target instanceof HTMLElement &&
        event.target.getAttribute('contenteditable') === 'true');

    if (isTyping) return;

    event.preventDefault();
    event.stopPropagation();

    if (this.fullscreenAtivo && (event.key === 'Escape' || event.key === 'F11')) {
      this.toggleFullscreen();
      return;
    }

    switch (event.key) {
      case 'ArrowRight':
        this.carousel.next();
        break;

      case 'ArrowLeft':
        this.carousel.prev();
        break;

      case ' ':
      case 'Spacebar':
        if (!this.bloqueioTemporarioEspaco) {
          this.toggleVideoPlayPause();
        }
        break;
    }
  };

  toggleVideoPlayPause(): void {
    const video = this.getActiveSlideVideo();
    if (!video || !this.isElementInViewport(video)) return;

    // Cancela qualquer tentativa automática de reprodução
    video.autoplay = false;

    // Remove temporariamente eventos que possam causar replay
    const clone = video.cloneNode(true) as HTMLVideoElement;
    if (video.paused) {
      video.play().catch(() => { });
    } else {
      const currentTime = video.currentTime;
      const parent = video.parentElement;
      video.pause();

      // Força interrupção de qualquer auto-play pendente
      video.src = '';
      video.load();

      if (parent) {
        parent.replaceChild(clone, video);
        clone.currentTime = currentTime;
      }
    }
  }

  getActiveSlideVideo(): HTMLVideoElement | null {
    const activeSlide = document.querySelector('.carousel-item.active');
    if (!activeSlide) return null;
    return activeSlide.querySelector('video');
  }

  isElementInViewport(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
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
      localStorage.setItem(this.id, 'true');
      this.chegouNoUltimoSlide.emit();
    }
  }

  pausarVideos(): void {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      if (!video.paused) {
        video.pause();
      }
    });
  }

  fecharMenu(): void {
    this.menuOculto = !this.menuOculto;
    this.menuToggle.emit(this.menuOculto);
  }

  toggleFullscreen(): void {
    const elem = document.querySelector('.slide-card');
    if (!elem) return;

    this.bloqueioTemporarioEspaco = true;
    setTimeout(() => (this.bloqueioTemporarioEspaco = false), 600); // maior tempo de bloqueio

    if (!this.fullscreenAtivo) {
      this.fullscreenAtivo = true;
      elem.requestFullscreen?.();
    } else {
      this.fullscreenAtivo = false;
      document.exitFullscreen?.();
    }
  }

  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export interface CarouselItem {
  type: 'image' | 'video';
  src: string;
}
