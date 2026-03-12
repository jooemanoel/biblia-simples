import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { BibliaService } from '../../services/biblia-service';

@Component({
  selector: 'app-pagina-inicial',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './pagina-inicial.html',
  styleUrl: './pagina-inicial.css',
})
export class PaginaInicial {
  bibliaService = inject(BibliaService);
}
