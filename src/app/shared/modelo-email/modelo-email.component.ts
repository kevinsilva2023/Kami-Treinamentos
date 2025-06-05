import { Component } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modelo-email',
  templateUrl: './modelo-email.component.html',
  styleUrls: ['./modelo-email.component.scss']
})
export class ModeloEmailComponent {
  textoEmail1 = `
Assunto: Solicitação de Documentos – Período de [MÊS/ANO]

Prezada(o) [NOME DO CLIENTE],
Esperamos que esteja tudo bem!

Para dar andamento aos processos contábeis referentes ao período de [MÊS/ANO], solicitamos, por gentileza, o envio dos documentos necessários para esse fechamento.

Caso já tenha enviado, por favor, desconsidere esta mensagem.

Se possível, pedimos que o envio seja feito até [DATA LIMITE], para mantermos o cronograma em dia e garantir a qualidade dos nossos serviços.

Ficamos à disposição para esclarecer qualquer dúvida ou ajudar no que for necessário.

Agradecemos, desde já, sua atenção e parceria!
Atenciosamente,`;
  
  textoEmail2 = `
Assunto: Lembrete – Documentos Pendentes | [MÊS/ANO]

Prezada(o) [NOME DO CLIENTE],
Tudo bem?

Estamos acompanhando os envios referentes ao período de [MÊS/ANO], e até o momento não identificamos o recebimento dos documentos necessários para darmos continuidade ao processo contábil.

Sabemos que imprevistos acontecem e, por isso, estamos enviando este lembrete, apenas para garantir que o envio não tenha passado despercebido.

Ressaltamos que, sem a documentação solicitada, não conseguiremos concluir as atividades contábeis desse período. Caso haja necessidade de disponibilização do balanço ou outros demonstrativos a terceiros (como bancos, investidores ou órgãos públicos), infelizmente não poderemos atender dentro do prazo esperado.

Se possível, pedimos que o envio seja feito até [NOVA DATA], para mantermos o cronograma em dia e garantir a qualidade dos nossos serviços.
Ficamos à disposição para qualquer dúvida ou orientação no processo de envio.

Agradecemos, desde já, sua atenção e parceria!
Atenciosamente,`;

  rolarParaBaixo() {
    const container = document.querySelector('.container-scroll');
    if (container) {
      container.scrollBy({ top: 1000, behavior: 'smooth' });
    }
  }
  rolarParaCima() {
    const container = document.querySelector('.container-scroll');
    if (container) {
      container.scrollBy({ top: -1000, behavior: 'smooth' });
    }
  }

  copiarTexto(texto: string, tooltip: NgbTooltip) {
    navigator.clipboard.writeText(texto).then(() => {
      tooltip.open();
      setTimeout(() => tooltip.close(), 500);
    });
  }
}
