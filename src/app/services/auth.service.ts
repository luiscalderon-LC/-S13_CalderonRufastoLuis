
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly SESSION_KEY = 'hotel_costa21_sesion';

  // Credenciales de prueba para la actividad
  private readonly correo = 'admin@hotelcosta21.com';
  private readonly contrasena = 'Hotel2026';

  login(correo: string, contrasena: string): boolean {
    const correoIngresado = correo.trim().toLowerCase();

    if (
      correoIngresado === this.correo &&
      contrasena === this.contrasena
    ) {
      localStorage.setItem(this.SESSION_KEY, 'activa');
      return true;
    }

    return false;
  }

  estaAutenticado(): boolean {
    return localStorage.getItem(this.SESSION_KEY) === 'activa';
  }

  logout(): void {
    localStorage.removeItem(this.SESSION_KEY);
  }
}
