import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-filtro',
  templateUrl: './menu-filtro.component.html',
  styleUrls: ['./menu-filtro.component.scss']
})
export class MenuFiltroComponent {
  @Output() filtroMudou = new EventEmitter<string>();
  @Input() categoriaSelecionada = '';

  categorias = [
    { valor: '', label: 'Remover Filtro' },
    { valor: 'Contábil', label: 'Contábil' },
    { valor: 'Fiscal', label: 'Fiscal' },
    { valor: 'Legalização', label: 'Legal' }
  ];

  aplicarFiltro(valor: string) {
    this.filtroMudou.emit(valor);
  }
}
