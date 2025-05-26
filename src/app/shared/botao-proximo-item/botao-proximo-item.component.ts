import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao-proximo-item',
  templateUrl: './botao-proximo-item.component.html',
  styleUrls: ['./botao-proximo-item.component.scss']
})
export class BotaoProximoItemComponent {
    @Input() visivel = false;
    @Output() avancar = new EventEmitter<void>();
    @Input() autoAvancar = false;
}
