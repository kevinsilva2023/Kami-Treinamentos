import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-menu-cursos',
  templateUrl: './menu-cursos.component.html',
  styleUrls: ['./menu-cursos.component.scss']
})


export class MenuCursosComponent implements OnInit, OnDestroy {
  
  contabil = 'CONTÁBIL';
  fiscal = 'FISCAL';
  legalizacao = 'LEGALIZAÇÃO';
  geral = 'GERAL'
  integracao = 'INTEGRAÇÃO'

  pesquisa = '';
  categoriaSelecionada: string | null = null; 
  usuarioLogado = '';

  cursos: Curso[] = [
    {
      titulo: 'INTEGRAÇÃO',
      categoria: this.integracao,
      subtitulo: 'Mais que um começo, este é o ponto de partida para transformar talento em resultados extraordinários!',
      imagemCurso: '/assets/imagens/integracao/card-img2.png',
      direcionamentoCurso: '/cursos/integracao',
      desabilitado: false,
    },
    {
      titulo: 'SOLICITAÇÃO DE DOCUMENTOS',
      categoria: this.contabil,
      subtitulo: 'Capacite-se para atuar no recebimento, conferência e organização de documentos em ambientes administrativos. Desenvolva habilidades para garantir agilidade, precisão e atendimento de qualidade.',
      imagemCurso: '/assets/imagens/atendimento-ao-cliente.png',
      direcionamentoCurso: '/cursos/solicitacao-de-documentos',
      desabilitado: false,
    },
    {
      titulo: 'TRIBUTOS DiIFERIDOS',
      categoria: this.contabil,
      subtitulo: 'Aprenda o básico sobre tributos diferidos, como identificar e registrar esses impostos que afetam o resultado financeiro das empresas ao longo do tempo.',
      imagemCurso: '/assets/imagens/tributos-diferidos/card-curso.png',
      direcionamentoCurso: '/cursos/tributos-diferidos',
      desabilitado: false,
    },
    {
      titulo: 'CERTIDÕES',
      categoria: this.geral,
      subtitulo: 'Aprenda a consultar, interpretar e emitir certidões que comprovam a regularidade fiscal de empresas nas esferas federal, estadual e municipal.',
      imagemCurso: '/assets/imagens/certidoes/card-curso.png',
      direcionamentoCurso: '/cursos/certidoes',
      desabilitado: false,
    },
    {
      titulo: 'MODELO',
      categoria: this.geral,
      subtitulo: 'MODELO',
      imagemCurso: '/assets/background-web.jpg',
      direcionamentoCurso: '/cursos/modelo',
      desabilitado: false,
      usuariosPermitidos: ['kevin']
    },
    {
      titulo: 'KAMITOGETHER',
      categoria: this.geral,
      subtitulo: 'Aprenda todas funcionalidades e processos da nossa melhor plataforma de automações.',
      imagemCurso: '/assets/background-web.jpg',
      direcionamentoCurso: '/cursos/kamitogether',
      desabilitado: false,
      usuariosPermitidos: ['kevin']
    },
  ];

  cursosFiltrados = [...this.cursos];

  private pesquisaSubject = new Subject<string>();
  private pesquisaSubscription!: Subscription;

  ngOnInit() {
    const usuario = localStorage.getItem('usuarioNome');

    if (usuario) {
      this.usuarioLogado = usuario.toLowerCase();
    }

    this.pesquisaSubscription = this.pesquisaSubject.pipe(
      debounceTime(500)
    ).subscribe(() => {
      this.aplicarFiltros();
    });

    this.aplicarFiltros();
  }

  ngOnDestroy() {
    this.pesquisaSubscription.unsubscribe();
  }

  onFiltroMudou(filtro: string) {
    if (filtro === 'remover') {
      this.categoriaSelecionada = null;
    } else {
      this.categoriaSelecionada = filtro;
    }
    this.aplicarFiltros();
  }

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
      
      const permitidoParaUsuario = !curso.usuariosPermitidos ||
        curso.usuariosPermitidos.map(u => u.toLowerCase()).includes(this.usuarioLogado);

      return correspondeCategoria && correspondePesquisa && permitidoParaUsuario;
    });
  }
}

interface Curso {
  titulo: string;
  categoria: string;
  subtitulo: string;
  imagemCurso: string;
  direcionamentoCurso: string;
  desabilitado: boolean;
  usuariosPermitidos?: string[]; 
}
