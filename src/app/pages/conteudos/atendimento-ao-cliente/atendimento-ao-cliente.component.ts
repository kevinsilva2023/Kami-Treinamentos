import { Component, OnInit } from '@angular/core';
import { CarouselItem } from 'src/app/shared/slide-conteudo/slide-conteudo.component';

@Component({
  selector: 'app-atendimento-ao-cliente',
  templateUrl: './atendimento-ao-cliente.component.html',
  styleUrls: ['./atendimento-ao-cliente.component.scss']
})
export class AtendimentoAoClienteComponent implements OnInit  {
  passosConcluidos: number[] = [];
  activeId: string = '1';
  private readonly STORAGE_KEY = 'passosConcluidos-atendimento-ao-cliente';
  mostrarBotaoProximo = false;
  autoAvancarHabilitado = true;  // Define se quer permitir auto avançar
  autoAvancarExecutado = false;  // Marca se já executou auto avanço

    carouselItems: CarouselItem[] = [
      { type: 'video', src: '../../../assets/videos/atendimento-ao-cliente/criando-relacionamento.mp4' },
      { type: 'video', src: '../../../assets/videos/atendimento-ao-cliente/criando-relacionamento.mp4' },
      { type: 'video', src: '../../../assets/videos/atendimento-ao-cliente/criando-relacionamento.mp4' },
      { type: 'image', src: '../../../assets/imagens/atendimento-ao-cliente.jpg' },
      { type: 'image', src: '../../../assets/imagens/atendimento-ao-cliente.png' },
    ];


  ngOnInit() {
    const armazenado = localStorage.getItem(this.STORAGE_KEY);
    if (armazenado) {
      this.passosConcluidos = JSON.parse(armazenado);
    }
  } 

  marcarComoConcluido(passo: number) {
    if (!this.passosConcluidos.includes(passo)) {
      this.passosConcluidos.push(passo);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.passosConcluidos));
    }
    this.mostrarBotaoProximo = true;
  }

  irParaProximoPasso() {
    const proximo = (parseInt(this.activeId, 10) + 1).toString();
    this.activeId = proximo;
    this.mostrarBotaoProximo = false;

   
    this.autoAvancarExecutado = false;
  }

  onBotaoAvancar() {
    this.irParaProximoPasso();
    if (this.autoAvancarHabilitado && !this.autoAvancarExecutado) {
      this.autoAvancarExecutado = true;  // Marca que já avançou automaticamente
    }
  }
}
