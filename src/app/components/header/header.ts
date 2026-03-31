import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { BibliaService } from '../../services/biblia-service';
import { FontService } from '../../services/font-service';
import { MenuService } from '../../services/menu-service';
import { TemaService } from '../../services/tema-service';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  temaService = inject(TemaService);
  menuService = inject(MenuService);
  bibliaService = inject(BibliaService);
  fontService = inject(FontService);
}
