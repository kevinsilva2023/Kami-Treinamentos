import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-filtro',
  templateUrl: './menu-filtro.component.html',
  styleUrls: ['./menu-filtro.component.scss']
})
export class MenuFiltroComponent {
  @Output() filtroMudou = new EventEmitter<string>();
  @Input() categoriaSelecionada: string | null = null;

  categorias = [
    { valor: 'GERAL', label: 'Geral' },
    { valor: 'INTEGRAÇÃO', label: 'Integração' },
    { valor: 'CONTÁBIL', label: 'Contábil' },
    { valor: 'FISCAL', label: 'Fiscal' },
    { valor: 'LEGALIZAÇÃO', label: 'Legal' },
    { valor: 'PESSOAL', label: 'Pessoal' },
    { valor: 'remover', label: 'Remover Filtro' },
  ];

  aplicarFiltro(valor: string) {
    this.filtroMudou.emit(valor);
  }
}
