import { computed, Injectable, signal } from '@angular/core';
import ARA from '../../assets/ARA.json';
import NVI from '../../assets/NVI.json';
import NVT from '../../assets/NVT.json';
import { Biblia } from '../domain/biblia';

@Injectable({
  providedIn: 'root',
})
export class BibliaService {
  versoesBiblia: Record<string, Biblia> = {
    ARA: new Biblia('ARA', ARA as any),
    NVI: new Biblia('NVI', NVI as any),
    NVT: new Biblia('NVT', NVT as any),
  };
  versoes = Object.keys(this.versoesBiblia);

  versao = signal<string>('NVT');
  livroId = signal<number>(0);
  capituloId = signal<number>(0);

  biblia = computed(() => this.versoesBiblia[this.versao()]);
  livro = computed(() => this.biblia().livros[this.livroId()]);
  capitulo = computed(() => this.livro().chapters[this.capituloId()]);
  titulo = computed(() => `${this.biblia().livros[this.livroId()].name} ${this.capituloId() + 1}`);
  isPrimeiroCapitulo = computed(() => this.capituloId() === 0);
  isUltimoCapitulo = computed(() => this.capituloId() === this.livro().chapters.length - 1);

  selecionarVersao(version: string) {
    this.versao.set(version);
    this.salvarEstado();
  }

  selecionarLivro(index: number) {
    this.livroId.set(index);
    this.analisarCapitulo();
    this.salvarEstado();
  }

  selecionarCapitulo(capitulo: number) {
    this.capituloId.set(capitulo);
    this.analisarCapitulo();
    this.salvarEstado();
  }

  analisarCapitulo() {
    if (this.capituloId() > this.biblia().livros[this.livroId()].chapters.length - 1)
      this.capituloId.set(0);
  }

  salvarEstado() {
    localStorage.setItem('versao', this.versao());
    localStorage.setItem('livroId', this.livroId().toString());
    localStorage.setItem('capituloId', this.capituloId().toString());
  }

  carregarEstado() {
    const versaoSalva = localStorage.getItem('versao');
    const livroIdSalvo = localStorage.getItem('livroId');
    const capituloIdSalvo = localStorage.getItem('capituloId');
    if (versaoSalva) this.versao.set(versaoSalva);
    if (livroIdSalvo) this.livroId.set(parseInt(livroIdSalvo));
    if (capituloIdSalvo) this.capituloId.set(parseInt(capituloIdSalvo));
  }
}
