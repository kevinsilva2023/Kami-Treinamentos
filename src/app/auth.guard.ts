import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private router: Router) { }

  canActivate(): boolean | UrlTree {
    const usuarioLogado = localStorage.getItem('usuarioNome');
    if (usuarioLogado) {
      return true;
    } else {
      return this.router.createUrlTree(['/login']);
    }
  }
}