import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { BibliaService } from '../../services/biblia-service';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  bibliaService = inject(BibliaService);

  @Output() alternarMenu = new EventEmitter();

  tema: 'light' | 'dark' = 'dark';

  alternarTema() {
    this.tema = this.tema === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', this.tema);
  }

  alternar() {
    this.alternarMenu.emit();
  }
}
