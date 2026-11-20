
import { Component, inject } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  template: `
    @if (esLogin()) {

      <!-- Pantalla de inicio de sesión -->
      <router-outlet />

    } @else {

      <!-- Dashboard del hotel -->
      <div class="shell">

        <aside class="sidebar" [class.open]="menuAbierto">

          <div class="brand">
            <strong>Hotel Costa 21</strong>
            <small>Sistema de Gestión Hotelera</small>
          </div>

          <nav>
            <a
              routerLink="/inicio"
              routerLinkActive="active"
              (click)="menuAbierto = false">
              <span>⌂</span> Inicio
            </a>

            <a
              routerLink="/habitaciones"
              routerLinkActive="active"
              (click)="menuAbierto = false">
              <span>▤</span> Habitaciones
            </a>

            <a
              routerLink="/huespedes"
              routerLinkActive="active"
              (click)="menuAbierto = false">
              <span>♙</span> Huéspedes
            </a>

            <a
              routerLink="/reservas"
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

            <button
              class="mobile-menu"
              (click)="menuAbierto = !menuAbierto">
              ☰
            </button>

            <strong>Panel de administración</strong>

            <div class="usuario-acciones">
              <span>Administrador</span>

              <button
                class="btn-cerrar-sesion"
                (click)="cerrarSesion()">
                Cerrar sesión
              </button>
            </div>

          </header>

          <main>
            <router-outlet />
          </main>

        </div>

      </div>

    }
  `,
  styles: [`
    .usuario-acciones {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .btn-cerrar-sesion {
      padding: 9px 14px;
      background: #142b40;
      color: white;
      border: none;
      border-radius: 7px;
      cursor: pointer;
      font-size: 13px;
    }

    .btn-cerrar-sesion:hover {
      background: #234b68;
    }
  `]
})
export class AppComponent {

  menuAbierto = false;

  private router = inject(Router);
  private authService = inject(AuthService);

  esLogin(): boolean {
    return this.router.url.startsWith('/login');
  }

  cerrarSesion(): void {
    this.authService.logout();
    this.menuAbierto = false;
    this.router.navigate(['/login']);
  }
}
