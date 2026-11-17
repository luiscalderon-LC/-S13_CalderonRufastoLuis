import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HabitacionesComponent } from './pages/habitaciones/habitaciones.component';
import { HuespedesComponent } from './pages/huespedes/huespedes.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
export const routes: Routes = [
 {path:'',redirectTo:'inicio',pathMatch:'full'},
 {path:'inicio',component:InicioComponent,title:'Inicio | Hotel Costa Azul'},
 {path:'habitaciones',component:HabitacionesComponent,title:'Habitaciones | Hotel Costa Azul'},
 {path:'huespedes',component:HuespedesComponent,title:'Huéspedes | Hotel Costa Azul'},
 {path:'reservas',component:ReservasComponent,title:'Reservas | Hotel Costa Azul'},
 {path:'**',redirectTo:'inicio'}
];
