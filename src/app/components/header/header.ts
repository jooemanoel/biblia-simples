import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { BibliaService } from '../../services/biblia-service';
import { TemaService } from '../../services/tema-service';
import { MenuService } from '../../services/menu-service';
import { FontService } from '../../services/font-service';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  temaService = inject(TemaService);
  menuService = inject(MenuService);
  bibliaService = inject(BibliaService);
  fontService = inject(FontService);
}
