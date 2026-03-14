import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FontService {
  private tamanhoBase = 16; // px

  carregarTamanhoFonte() {
    const tamanhoSalvo = localStorage.getItem('tamanhoFonte');
    if (tamanhoSalvo) {
      this.tamanhoBase = Number(tamanhoSalvo);
      this.atualizarFonte();
    }
  }

  aumentarFonte() {
    this.tamanhoBase = Math.min(this.tamanhoBase + 2, 32); // max 32px
    this.atualizarFonte();
  }

  diminuirFonte() {
    this.tamanhoBase = Math.max(this.tamanhoBase - 2, 12); // min 12px
    this.atualizarFonte();
  }

  private atualizarFonte() {
    document.documentElement.style.setProperty('--font-size-base', `${this.tamanhoBase}px`);
    localStorage.setItem('tamanhoFonte', this.tamanhoBase.toString());
  }
}