import { computed, inject, Injectable, signal } from '@angular/core';
import { Biblia } from '../domain/biblia';
import { Livro } from '../domain/livro';
import { CarregarBibliaService } from './carregar-biblia-service';

@Injectable({
  providedIn: 'root',
})
export class BibliaService {
  carregarBibliaService = inject(CarregarBibliaService);

  versoes = ['ARA', 'NVI', 'NVT'];

  biblia = signal<Biblia>(new Biblia(''));
  livro = signal<Livro>({ name: '', abbrev: '', chapters: [] });
  capitulo = signal<number>(0);

  textoCapitulo = computed<string[]>(() => {
    if (!this.livro().name || !this.capitulo()) {
      return [];
    }
    return this.livro().chapters[this.capitulo() - 1] || [];
  });

  titulo = computed(() =>
    this.livro().name && this.capitulo() ? `${this.livro().name} ${this.capitulo()}` : 'Bíblia',
  );

  

  carregarVersao(version: string) {
    this.carregarBibliaService.loadVersion(version).subscribe({
      next: (data) => {
        this.biblia.set(new Biblia(version, data));
        console.log(`Versão ${version} carregada com sucesso!`);
      },
      error: (error) => {
        console.error(`Erro ao carregar a versão ${version}:`, error);
      },
    });
  }

  selecionarLivro(name: string) {
    if (!this.biblia()) {
      console.error('A Bíblia ainda não foi carregada. Carregue uma versão primeiro.');
      return;
    }

    const livro = this.biblia().livros.find((l) => l.name === name);
    if (livro) {
      this.livro.set(livro);
      console.log(`Livro selecionado: ${livro.name}`);
    } else {
      console.error(`Livro com nome "${name}" não encontrado.`);
    }
  }

  selecionarCapitulo(capitulo: number) {
    if (!this.livro()) {
      console.error('Nenhum livro selecionado. Selecione um livro primeiro.');
      return;
    }

    if (capitulo < 1 || capitulo > this.livro().chapters.length) {
      console.error(
        `Capítulo inválido. O livro "${this.livro().name}" tem ${this.livro().chapters.length} capítulos.`,
      );
      return;
    }

    this.capitulo.set(capitulo);
    console.log(`Capítulo selecionado: ${capitulo}`);
  }
}
