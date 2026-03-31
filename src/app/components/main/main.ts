import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BibliaService } from '../../services/biblia-service';

@Component({
  selector: 'app-main',
  imports: [MatIconModule],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  bibliaService = inject(BibliaService);
}
