import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-voltar',
  templateUrl: './botao-voltar.component.html',
  styleUrls: ['./botao-voltar.component.scss']
})
export class BotaoVoltarComponent {
  @Input() rota = '';
}
