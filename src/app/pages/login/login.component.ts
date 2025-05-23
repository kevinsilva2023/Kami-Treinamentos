import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  nome = '';
  senha = ''; 
  tentouEntrar = false;
  capsLockAtivo = false;
  mostrarSenha = false;

  constructor(private router: Router) {}

  entrar() {
    this.tentouEntrar = true;
    
    if (this.nome.trim() && this.senha === 'adm') {
      localStorage.setItem('usuarioNome', this.nome);
      this.router.navigate(['/home']);
    }
  }
  
  ngOnInit() {
    const nomeSalvo = localStorage.getItem('usuarioNome');
    if (nomeSalvo) {
      this.router.navigate(['/home']);
    }
  }

  verificarCapsLock(event: KeyboardEvent): void {
    this.capsLockAtivo = event.getModifierState && event.getModifierState('CapsLock');
  }
}
