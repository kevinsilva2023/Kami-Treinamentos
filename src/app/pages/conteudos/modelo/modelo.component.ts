import { Component } from '@angular/core';

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styleUrls: ['./modelo.component.scss']
})
export class ModeloComponent {
  passosConcluidos: number[] = [];

  marcarComoConcluido(passo: number) {
    if (!this.passosConcluidos.includes(passo)) {
      this.passosConcluidos.push(passo);
    }
  }

  ngOnInit() {
    this.marcarComoConcluido(1);
  }
}
