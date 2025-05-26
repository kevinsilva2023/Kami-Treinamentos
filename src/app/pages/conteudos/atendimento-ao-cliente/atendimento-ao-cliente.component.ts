import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atendimento-ao-cliente',
  templateUrl: './atendimento-ao-cliente.component.html',
  styleUrls: ['./atendimento-ao-cliente.component.scss']
})
export class AtendimentoAoClienteComponent implements OnInit  {
  passosConcluidos: number[] = [];
  activeId: string = '1';
  private readonly STORAGE_KEY = 'passosConcluidos-atendimento-ao-cliente';

  ngOnInit() {
    const armazenado = localStorage.getItem(this.STORAGE_KEY);
      if (armazenado) {
        this.passosConcluidos = JSON.parse(armazenado)
      }
  } 

  marcarComoConcluido(passo: number) {
    if (!this.passosConcluidos.includes(passo)) {
      this.passosConcluidos.push(passo);
      localStorage.setItem('passosConcluidos', JSON.stringify(this.passosConcluidos))
    }
  }
}