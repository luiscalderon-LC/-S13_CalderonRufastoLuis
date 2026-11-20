
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  error = '';
  enviado = false;
  mostrarContrasena = false;

  formulario;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.formulario = this.fb.nonNullable.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required]
    });
  }

  ingresar(): void {
    this.enviado = true;
    this.error = '';

    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    const { correo, contrasena } = this.formulario.getRawValue();

    if (this.authService.login(correo, contrasena)) {
      this.router.navigate(['/inicio']);
    } else {
      this.error = 'Correo o contraseña incorrectos.';
    }
  }

  cambiarVisibilidad(): void {
    this.mostrarContrasena = !this.mostrarContrasena;
  }
}
