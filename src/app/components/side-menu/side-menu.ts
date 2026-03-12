import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BibliaService } from '../../services/biblia-service';

@Component({
  selector: 'app-side-menu',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatListModule],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css',
})
export class SideMenu {
  bibliaService = inject(BibliaService);

  niveisNagevacao: Record<number, string> = {
    0: 'Versão',
    1: 'Livro',
    2: 'Capítulo',
  };

  nivelNavegacao = 0;

  @Output() closeMenu = new EventEmitter();

  carregarVersao(versao: string) {
    console.log(`Carregar versão: ${versao}`);
    this.bibliaService.carregarVersao(versao);
    this.nivelNavegacao = 1; // Avança para o próximo nível (livros)
  }

  selecionarLivro(livro: string) {
    console.log(`Selecionar livro: ${livro}`);
    this.bibliaService.selecionarLivro(livro);
    this.nivelNavegacao = 2; // Avança para o próximo nível (capítulos)
  }

  selecionarCapitulo(capitulo: number) {
    console.log(`Selecionar capítulo: ${capitulo}`);
    this.bibliaService.selecionarCapitulo(capitulo);
    this.nivelNavegacao = 0;
    this.close();
  }

  close() {
    this.closeMenu.emit();
  }
}
