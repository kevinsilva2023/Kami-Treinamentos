import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.scss']
})
export class QuestionarioComponent {
  @Input() pergunta!: string;
  @Input() acao!: string;
  @Input() alternativas: string[] = [];
  @Input() correta!: string;
  @Input() justificativas: { [alternativa: string]: string } = {};
  @Input() id: string = '';

  @Output() respostaCorreta = new EventEmitter<void>();

  resposta: boolean | null = null;
  justificativa: string = '';
  alternativaSelecionada: string | null = null;
  bloqueado = false


  ngOnInit(): void {
    const salva = localStorage.getItem(`questionario-${this.id}`);
    if (salva === this.correta) {
      this.resposta = true;
      this.justificativa = this.justificativas[salva] || '';
      this.alternativaSelecionada = salva;
      this.bloqueado = true;
      this.respostaCorreta.emit();
    }
  }

  verificarResposta(alternativa: string): void {
    if (this.bloqueado) return;

    this.resposta = alternativa === this.correta;
    this.justificativa = this.justificativas[alternativa] || '';
    this.alternativaSelecionada = alternativa;

    if (this.resposta) {
      this.bloqueado = true;
      localStorage.setItem(`questionario-${this.id}`, alternativa);
      this.respostaCorreta.emit();
    }
  }
}
