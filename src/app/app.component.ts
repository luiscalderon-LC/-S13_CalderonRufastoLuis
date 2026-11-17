
import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="shell">

      <aside class="sidebar" [class.open]="menuAbierto">
        <div class="brand">
          <strong>Hotel Costa 21</strong>
          <small>Sistema de Gestión Hotelera</small>
        </div>

        <nav>
          <a routerLink="/inicio"
             routerLinkActive="active"
             (click)="menuAbierto = false">
            <span>⌂</span> Inicio
          </a>

          <a routerLink="/habitaciones"
             routerLinkActive="active"
             (click)="menuAbierto = false">
            <span>▤</span> Habitaciones
          </a>

          <a routerLink="/huespedes"
             routerLinkActive="active"
             (click)="menuAbierto = false">
            <span>♙</span> Huéspedes
          </a>

          <a routerLink="/reservas"
             routerLinkActive="active"
             (click)="menuAbierto = false">
            <span>▣</span> Reservas
          </a>
        </nav>

        <div class="side-footer">
          Luis Calderón Rufasto
        </div>
      </aside>

      <div class="content">
        <header class="topbar">
          <button class="mobile-menu"
                  (click)="menuAbierto = !menuAbierto">
            ☰
          </button>

          <strong>Panel de administración</strong>
          <span>Administrador</span>
        </header>

        <main>
          <router-outlet />
        </main>
      </div>

    </div>
  `
})
export class AppComponent {
  menuAbierto = false;
}
