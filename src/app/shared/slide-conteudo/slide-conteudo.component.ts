import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide-conteudo',
  templateUrl: './slide-conteudo.component.html',
  styleUrls: ['./slide-conteudo.component.scss']
})
export class SlideConteudoComponent {
    listaImagens = [
      '../../../../assets/imagens/atendimento-ao-cliente.jpg',
      '../../../assets/imagens/atendimento-ao-cliente.png'
    ]
}
