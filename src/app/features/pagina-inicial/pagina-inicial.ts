import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BibliaService } from '../../services/biblia-service';

@Component({
  selector: 'app-pagina-inicial',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './pagina-inicial.html',
  styleUrl: './pagina-inicial.css',
})
export class PaginaInicial {
  bibliaService = inject(BibliaService);
}
