import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements AfterViewInit {
  @Input() rotaVideo = '';
  @Input() mostrarBotao = false;
  @Input() id: string = '';

  @Output() videoFinalizado = new EventEmitter<void>();
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    // Tentar recuperar o progresso salvo
    const progresso = localStorage.getItem(`video-${this.id}-progress`);
    if (progresso) {
      this.videoPlayer.nativeElement.currentTime = +progresso;
    }

    // Se o vídeo já foi assistido, emitir evento
    const assistido = localStorage.getItem(`video-${this.id}`);
    if (assistido === 'true') {
      this.videoFinalizado.emit();
    }

    // Salvar progresso a cada mudança no tempo do vídeo
    this.videoPlayer.nativeElement.addEventListener('timeupdate', () => {
      localStorage.setItem(`video-${this.id}-progress`, this.videoPlayer.nativeElement.currentTime.toString());
    });
  }

  onVideoEnded() {
    console.log('Vídeo finalizado');
    localStorage.setItem(`video-${this.id}`, 'true');
    localStorage.removeItem(`video-${this.id}-progress`); // Limpa o progresso pois o vídeo terminou
    this.videoFinalizado.emit();
  }
}
