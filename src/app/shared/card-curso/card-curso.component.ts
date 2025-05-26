import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-curso',
  templateUrl: './card-curso.component.html',
  styleUrls: ['./card-curso.component.scss']
})
export class CardCursoComponent {
  @Input() titulo = '' ;
  @Input() categoria = '';
  @Input() subtitulo = '';
  @Input() direcionamentoCurso = '';
  @Input() imagemCurso = '';
  @Input() desabilitado = false;
}
