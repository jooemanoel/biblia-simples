import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BibliaService } from '../../services/biblia-service';
import { MenuService } from '../../services/menu-service';

@Component({
  selector: 'app-side-menu',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatListModule],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css',
})
export class SideMenu {
  menuService = inject(MenuService);
  bibliaService = inject(BibliaService);
}
