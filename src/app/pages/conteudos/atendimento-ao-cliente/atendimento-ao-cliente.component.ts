import { Component } from '@angular/core';

@Component({
  selector: 'app-atendimento-ao-cliente',
  templateUrl: './atendimento-ao-cliente.component.html',
  styleUrls: ['./atendimento-ao-cliente.component.scss']
})
export class AtendimentoAoClienteComponent {

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
