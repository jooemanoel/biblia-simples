import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BibliaService } from '../../services/biblia-service';
import { FontService } from '../../services/font-service';
import { MenuService } from '../../services/menu-service';
import { TemaService } from '../../services/tema-service';

@Component({
  selector: 'app-footer',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  temaService = inject(TemaService);
  menuService = inject(MenuService);
  bibliaService = inject(BibliaService);
  fontService = inject(FontService);
}
