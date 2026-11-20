
import { Routes } from '@angular/router';

// Componentes del Dashboard
import { InicioComponent } from './pages/inicio/inicio.component';
import { HabitacionesComponent } from './pages/habitaciones/habitaciones.component';
import { HuespedesComponent } from './pages/huespedes/huespedes.component';
import { ReservasComponent } from './pages/reservas/reservas.component';

// Componente de inicio de sesión
// Componente de inicio de sesión
import { LoginComponent } from './pages/login/login.component';
// Guard para proteger las rutas
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [

  // Ruta principal
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },

  // Login: acceso público
  {
    path: 'login',
    component: LoginComponent,
    title: 'Iniciar sesión | Hotel Costa 21'
  },

  // Inicio del Dashboard
  {
    path: 'inicio',
    component: InicioComponent,
    canActivate: [authGuard],
    title: 'Inicio | Hotel Costa 21'
  },

  // Gestión de habitaciones
  {
    path: 'habitaciones',
    component: HabitacionesComponent,
    canActivate: [authGuard],
    title: 'Habitaciones | Hotel Costa 21'
  },

  // Gestión de huéspedes
  {
    path: 'huespedes',
    component: HuespedesComponent,
    canActivate: [authGuard],
    title: 'Huéspedes | Hotel Costa 21'
  },

  // Gestión de reservas
  {
    path: 'reservas',
    component: ReservasComponent,
    canActivate: [authGuard],
    title: 'Reservas | Hotel Costa 21'
  },

  // Rutas inexistentes
  {
    path: '**',
    redirectTo: 'inicio'
  }

];
