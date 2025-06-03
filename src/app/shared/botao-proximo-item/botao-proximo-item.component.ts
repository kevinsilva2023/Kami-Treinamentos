import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-botao-proximo-item',
  templateUrl: './botao-proximo-item.component.html',
  styleUrls: ['./botao-proximo-item.component.scss']
})
export class BotaoProximoItemComponent implements OnChanges, OnDestroy {
  @Input() visivel = false;
  @Input() autoAvancar = false;
  @Output() avancar = new EventEmitter<void>();

  progress = 0;
  private intervalId?: any;
  private readonly tempoTotal = 5000;
  private readonly intervalo = 50;

  private autoAvancarExecutadoLocal = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['visivel']) {
      if (this.visivel) {
        this.autoAvancarExecutadoLocal = false;
      } else {
        this.limparContagem();
        this.progress = 0;
      }
    }

    if (this.visivel && this.autoAvancar && !this.autoAvancarExecutadoLocal) {
      this.iniciarContagem();
    } else if (!this.visivel || !this.autoAvancar) {
      this.limparContagem();
      this.progress = 0;
    }
  }

  ngOnDestroy() {
    this.limparContagem();
  }

  iniciarContagem() {
    this.progress = 0;
    const passos = this.tempoTotal / this.intervalo;
    let contador = 0;

    this.limparContagem();

    this.intervalId = setInterval(() => {
      contador++;
      this.progress = (contador / passos) * 100;

      if (contador >= passos) {
        this.limparContagem();
        this.autoAvancarExecutadoLocal = true;
        this.avancar.emit();
      }
    }, this.intervalo);
  }

  limparContagem() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  onClick() {
    this.limparContagem();
    this.autoAvancarExecutadoLocal = true;
    this.avancar.emit();
  }
}
