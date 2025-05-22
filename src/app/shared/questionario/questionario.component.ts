import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.scss']
})
export class QuestionarioComponent {
  @Input() pergunta!: string;
  @Input() acao!: string;
  @Input() alternativas!: string[];
  @Input() correta!: string;
  @Input() justificativas: { [alternativa: string]: string } = {};


  resposta: boolean | null = null;
  justificativa: string = '';

verificarResposta(alternativa: string): void {
  this.resposta = alternativa === this.correta;
  this.justificativa = this.justificativas[alternativa] || '';
}
}
