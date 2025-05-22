import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-ver-mais',
  templateUrl: './botao-ver-mais.component.html',
  styleUrls: ['./botao-ver-mais.component.scss']
})
export class BotaoVerMaisComponent {

  @Input() visivel: boolean = false; // padrão: escondido

  rolarParaBaixo() {
    const container = document.querySelector('.container-scroll');
    if (container) {
      container.scrollBy({ top: 1000, behavior: 'smooth' });
    }
    }

}
