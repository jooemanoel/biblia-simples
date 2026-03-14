import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TemaService {
  tema: 'light' | 'dark' = 'dark';

  alternarTema() {
    this.tema = this.tema === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', this.tema);
  }
}
