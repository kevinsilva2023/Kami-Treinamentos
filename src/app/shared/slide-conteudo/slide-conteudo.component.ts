import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slide-conteudo',
  templateUrl: './slide-conteudo.component.html',
  styleUrls: ['./slide-conteudo.component.scss']
})
export class SlideConteudoComponent {
  @Input() items: CarouselItem[] = [];
  @Output() chegouNoUltimoSlide = new EventEmitter<void>();
  @ViewChild('carousel', { static: false }) carousel!: NgbCarousel;

  onSlideChange(event: any) {
    const activeSlideId = parseInt(event.current.replace('ngb-slide-', ''), 10);

    if (activeSlideId === this.items.length - 1) {
      this.chegouNoUltimoSlide.emit();
    }
  }
}

export interface CarouselItem {
  type: 'image' | 'video';
  src: string;
  
}
