import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {
  @Input() rotaVideo = '';
  @Input() mostrarBotao = false
  @Input() id: string = '';

  @Output() videoFinalizado = new EventEmitter<void>();
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>

  ngOnInit(): void {
    const assistido = localStorage.getItem(`video-${this.id}`);
    if (assistido === 'true') {
      this.videoFinalizado.emit();
    }
  }

  onVideoEnded() {
    console.log('Vídeo finalizado');
    localStorage.setItem(`video-${this.id}`, 'true');
    this.videoFinalizado.emit(); 
  }
  
}
