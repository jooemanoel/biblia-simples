import { inject, Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subject } from 'rxjs';
import { BibliaService } from './biblia-service';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  bibliaService = inject(BibliaService);

  sidenav!: MatSidenav;

  niveisNagevacao: Record<number, string> = {
    0: 'Geral',
    1: 'Versão',
    2: 'Livro',
    3: 'Capítulo',
  };

  nivelNavegacao = 0;

  setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  selecionarVersao(versao: string) {
    this.bibliaService.selecionarVersao(versao);
    this.close();
  }

  selecionarLivro(livro: number) {
    this.bibliaService.selecionarLivro(livro);
    this.nivelNavegacao = 3;
  }

  selecionarCapitulo(capitulo: number) {
    this.bibliaService.selecionarCapitulo(capitulo);
    this.close();
  }
  
  toggle() {
    this.sidenav?.toggle();
  }

  close() {
    this.sidenav?.close();
  }

  onClose() {
    this.nivelNavegacao = 0;
  }
}
