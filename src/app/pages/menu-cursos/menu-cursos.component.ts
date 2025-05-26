import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-menu-cursos',
  templateUrl: './menu-cursos.component.html',
  styleUrls: ['./menu-cursos.component.scss']
})
export class MenuCursosComponent implements OnInit, OnDestroy {

  CONTABIL = 'Contábil';
  FISCAL = 'Fiscal';
  LEGALIZACAO = 'Legalização';

  pesquisa = '';
  categoriaSelecionada = '';

  cursos = [
    {
      titulo: 'CURSO DO CONTÁBIL',
      categoria: this.CONTABIL,
      subtitulo: 'A DEFINIR',
      imagemCurso: '/assets/imagens/atendimento-ao-cliente.jpg',
      direcionamentoCurso: '/cursos/atendimento-ao-cliente',
      desabilitado: false
    },
    {
      titulo: 'CURSO DO FISCAL',
      categoria: this.FISCAL,
      subtitulo: 'A DEFINIR',
      imagemCurso: '/assets/imagens/atendimento-ao-cliente.jpg',
      direcionamentoCurso: '/cursos/modelo',
      desabilitado: false
    }
  ];

  cursosFiltrados = [...this.cursos];

  private pesquisaSubject = new Subject<string>();
  private pesquisaSubscription!: Subscription;

  ngOnInit() {
    this.pesquisaSubscription = this.pesquisaSubject.pipe(
      debounceTime(500) // aguarda 500ms após o último input
    ).subscribe(() => {
      this.aplicarFiltros();
    });
  }

  ngOnDestroy() {
    this.pesquisaSubscription.unsubscribe();
  }

  filtrarCursosPorCategoria(categoria: string) {
    this.categoriaSelecionada = categoria;
    this.aplicarFiltros();
  }

  // Essa função vai ser chamada pelo input via ngModelChange
  pesquisaMudou() {
    this.pesquisaSubject.next(this.pesquisa);
  }

  limparPesquisa() {
    this.pesquisa = '';
    this.aplicarFiltros();
  }

  aplicarFiltros() {
    const normalize = (str: string) =>
      str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

    const pesquisaNormalizada = normalize(this.pesquisa);

    this.cursosFiltrados = this.cursos.filter(curso => {
      const correspondeCategoria = this.categoriaSelecionada
        ? curso.categoria === this.categoriaSelecionada
        : true;

      const tituloNormalizado = normalize(curso.titulo);

      const correspondePesquisa = pesquisaNormalizada
        ? tituloNormalizado.includes(pesquisaNormalizada)
        : true;

    return correspondeCategoria && correspondePesquisa;
  });
}

}
