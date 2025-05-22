import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  nomeUsuario: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.nomeUsuario = localStorage.getItem('usuarioNome') || '';
  }

  logout() {
    localStorage.removeItem('usuarioNome');
    this.router.navigate(['/login'])
  }
}
