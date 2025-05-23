import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  nomeUsuario = '';
  podeLimpar = false;
  usuariosAutorizados = ['kevin', 'kevin silva'];

  constructor(private router: Router) {}

  ngOnInit() {
    const nome = localStorage.getItem('usuarioNome') || '';
    this.nomeUsuario = nome;

    this.podeLimpar = this.usuariosAutorizados.includes(nome.toLowerCase());
  }

  logout() {
    localStorage.removeItem('usuarioNome');
    this.router.navigate(['/login'])
  }

  limparDados() {
    const nome = localStorage.getItem('usuarioNome');
    localStorage.clear();
    if (nome) {
      localStorage.setItem('usuarioNome', nome);
  }
}
}
