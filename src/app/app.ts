import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { filter } from 'rxjs';
import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { SideMenu } from './components/side-menu/side-menu';
import { BibliaService } from './services/biblia-service';
import { FontService } from './services/font-service';
import { MenuService } from './services/menu-service';
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, SideMenu, MatSidenavModule, MatSnackBarModule, Main, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit, AfterViewInit {
  swUpdate = inject(SwUpdate);
  snackBar = inject(MatSnackBar);
  menuService = inject(MenuService);
  fontService = inject(FontService);
  bibliaService = inject(BibliaService);

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  ngOnInit(): void {
    this.checkForUpdates();
    this.bibliaService.carregarEstado();
    this.fontService.carregarTamanhoFonte();
  }

  ngAfterViewInit(): void {
    this.menuService.setSidenav(this.sidenav);
  }

  checkForUpdates() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates
        .pipe(filter((evt) => evt.type === 'VERSION_READY'))
        .subscribe(() => {
          this.snackBar
            .open('Nova versão disponível', 'Atualizar')
            .onAction()
            .subscribe(() => {
              this.swUpdate.activateUpdate().then(() => document.location.reload());
            });
        });
    }
  }
}
