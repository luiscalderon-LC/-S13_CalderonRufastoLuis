
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { habitaciones, huespedes, reservas } from '../../data';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],

  template: `
    <div class="inicio">

      <!-- ENCABEZADO -->
      <div class="titulo">
        <div>
          <h1>Inicio - Costa 21 🏚️</h1>
          <p>Panel principal del sistema hotelero</p>
        </div>
        <span class="etiqueta">Hotel Costa 21</span>
      </div>

      <!-- BIENVENIDA -->
      <section class="bienvenida">
        <div class="bienvenida-texto">
          <span class="bienvenida-etiqueta">
            SISTEMA DE GESTIÓN HOTELERA
          </span>

          <h2>¡Bienvenido al Hotel Costa 21!</h2>

          <p>
            Administra las habitaciones, huéspedes y reservas
            de nuestro hotel de forma sencilla y organizada.
          </p>

          <a routerLink="/habitaciones" class="boton">
            Ver habitaciones →
          </a>
        </div>
      </section>

      <!-- RESUMEN GENERAL -->
      <div class="seccion-titulo">
        <div>
          <h2>Resumen general</h2>
          <p>Información principal del hotel</p>
        </div>
      </div>

      <div class="tarjetas">

        <div class="tarjeta tarjeta-azul">
          <div class="icono">▤</div>
          <h3>{{ habitaciones.length }}</h3>
          <p>Habitaciones totales</p>
        </div>

        <div class="tarjeta tarjeta-verde">
          <div class="icono">✓</div>
          <h3>{{ disponibles }}</h3>
          <p>Habitaciones disponibles</p>
        </div>

        <div class="tarjeta tarjeta-naranja">
          <div class="icono">♙</div>
          <h3>{{ huespedes.length }}</h3>
          <p>Huéspedes registrados</p>
        </div>

        <div class="tarjeta tarjeta-morado">
          <div class="icono">▣</div>
          <h3>{{ reservas.length }}</h3>
          <p>Reservas totales</p>
        </div>

      </div>

      <!-- INFORMACIÓN INFERIOR -->
      <div class="contenido-inferior">

        <!-- ÚLTIMAS RESERVAS -->
        <section class="panel-reservas">

          <div class="panel-titulo">
            <h2>Últimas reservas</h2>
            <a routerLink="/reservas">Ver todas →</a>
          </div>

          <div class="tabla-contenedor">
            <table>
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Huésped</th>
                  <th>Habitación</th>
                  <th>Estado</th>
                </tr>
              </thead>

              <tbody>
                @for (
                  reserva of reservas.slice(0, 4);
                  track reserva.codigo
                ) {
                  <tr>
                    <td class="codigo">
                      {{ reserva.codigo }}
                    </td>

                    <td>{{ reserva.huesped }}</td>
                    <td>{{ reserva.habitacion }}</td>

                    <td>
                      <span
                        class="estado"
                        [class.confirmada]="reserva.estado === 'Confirmada'"
                        [class.pendiente]="reserva.estado === 'Pendiente'"
                        [class.finalizada]="reserva.estado === 'Finalizada'"
                      >
                        {{ reserva.estado }}
                      </span>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </section>

        <!-- OCUPACIÓN -->
        <section class="panel-ocupacion">

          <div class="panel-titulo">
            <h2>Ocupación del hotel</h2>
          </div>

          <div class="ocupacion">

            <div
              class="circulo"
              [style.--porcentaje]="porcentaje + '%'"
            >
              <div class="circulo-centro">
                <strong>{{ porcentaje }}%</strong>
                <small>Ocupación</small>
              </div>
            </div>

            <div class="detalle">
              <p>
                <span class="punto punto-azul"></span>
                Ocupadas: <strong>{{ ocupadas }}</strong>
              </p>

              <p>
                <span class="punto punto-verde"></span>
                Disponibles: <strong>{{ disponibles }}</strong>
              </p>

              <p>
                <span class="punto punto-gris"></span>
                Mantenimiento: <strong>{{ mantenimiento }}</strong>
              </p>
            </div>

          </div>
        </section>

      </div>
    </div>
  `,

  styles: [`

    /* CONTENEDOR */
    .inicio {
      color: #20324e;
      width: 100%;
    }

    /* ENCABEZADO */
    .titulo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 15px;
      margin-bottom: 25px;
    }

    .titulo h1 {
      font-size: 29px;
      margin: 0 0 7px;
      color: #193a6c;
    }

    .titulo p {
      color: #71839b;
      margin: 0;
      font-size: 14px;
    }

    .etiqueta {
      background: #e7f0ff;
      color: #2457a0;
      padding: 9px 15px;
      border-radius: 7px;
      font-size: 12px;
      font-weight: 600;
    }

    /* BANNER DE BIENVENIDA */
    .bienvenida {
      min-height: 260px;
      border-radius: 14px;
      background:
        linear-gradient(
          90deg,
          rgba(17, 47, 91, 0.95) 0%,
          rgba(17, 47, 91, 0.75) 40%,
          rgba(17, 47, 91, 0.10) 100%
        ),
        url('/images/lima.jpg') center / cover;

      display: flex;
      align-items: center;
      padding: 40px;
      color: white;
      box-shadow: 0 5px 15px rgba(20, 50, 90, 0.10);
      overflow: hidden;
    }

    .bienvenida-texto {
      max-width: 490px;
    }

    .bienvenida-etiqueta {
      display: inline-block;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1px;
      color: #d3e5ff;
      margin-bottom: 12px;
    }

    .bienvenida h2 {
      font-size: 30px;
      line-height: 1.3;
      margin: 0 0 14px;
      color: white;
    }

    .bienvenida p {
      font-size: 14px;
      line-height: 1.7;
      margin: 0 0 23px;
      color: #f0f5ff;
    }

    .boton {
      display: inline-block;
      background: white;
      color: #2452a2;
      padding: 13px 22px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 13px;
      text-decoration: none;
      transition: background 0.2s, transform 0.2s;
    }

    .boton:hover {
      background: #e6f0ff;
      transform: translateY(-2px);
    }

    /* RESUMEN GENERAL */
    .seccion-titulo {
      margin: 30px 0 17px;
    }

    .seccion-titulo h2 {
      font-size: 21px;
      margin: 0 0 5px;
      color: #193a6c;
    }

    .seccion-titulo p {
      font-size: 13px;
      color: #8391a5;
      margin: 0;
    }

    /* TARJETAS */
    .tarjetas {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 17px;
    }

    .tarjeta {
      padding: 23px;
      border-radius: 12px;
      border: 1px solid #dce6f2;
      border-left: 5px solid #2878d0;
      background: white;
      box-shadow: 0 4px 12px rgba(20, 50, 90, 0.06);
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .tarjeta:hover {
      transform: translateY(-4px);
      box-shadow: 0 7px 18px rgba(20, 50, 90, 0.10);
    }

    .tarjeta-azul {
      border-left-color: #2878d0;
      background: #f4f8ff;
    }

    .tarjeta-verde {
      border-left-color: #22a06b;
      background: #f1faf5;
    }

    .tarjeta-naranja {
      border-left-color: #e9a23b;
      background: #fff9ee;
    }

    .tarjeta-morado {
      border-left-color: #9263d5;
      background: #f8f4ff;
    }

    .icono {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 43px;
      height: 43px;
      border-radius: 10px;
      background: #e1edff;
      color: #2878d0;
      font-size: 25px;
    }

    .tarjeta-verde .icono {
      background: #d9f4e6;
      color: #22955c;
    }

    .tarjeta-naranja .icono {
      background: #ffedce;
      color: #d88b13;
    }

    .tarjeta-morado .icono {
      background: #ece2ff;
      color: #8052c8;
    }

    .tarjeta h3 {
      font-size: 31px;
      margin: 15px 0 5px;
      color: #193a6c;
    }

    .tarjeta p {
      color: #65778f;
      margin: 0;
      font-size: 13px;
    }

    /* PANELES INFERIORES */
    .contenido-inferior {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 20px;
      margin-top: 23px;
    }

    .panel-reservas,
    .panel-ocupacion {
      background: white;
      border: 1px solid #dce6f2;
      border-radius: 12px;
      padding: 24px;
      min-width: 0;
      box-shadow: 0 4px 12px rgba(20, 50, 90, 0.06);
    }

    .panel-titulo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      margin-bottom: 20px;
    }

    .panel-titulo h2 {
      font-size: 19px;
      margin: 0;
      color: #193a6c;
    }

    .panel-titulo a {
      color: #2878d0;
      text-decoration: none;
      font-size: 13px;
      font-weight: 600;
    }

    .panel-titulo a:hover {
      text-decoration: underline;
    }

    /* TABLA */
    .tabla-contenedor {
      overflow-x: auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    th, td {
      padding: 14px 12px;
      text-align: left;
      font-size: 12px;
    }

    th {
      background: #eef4fc;
      color: #29476c;
      font-weight: 700;
    }

    td {
      border-bottom: 1px solid #edf0f5;
    }

    tbody tr:hover {
      background: #f8fbff;
    }

    .codigo {
      font-weight: 700;
      color: #3564b8;
    }

    /* ESTADOS DE RESERVAS */
    .estado {
      display: inline-block;
      padding: 6px 11px;
      border-radius: 6px;
      background: #edf0f5;
      font-size: 11px;
      font-weight: 600;
      white-space: nowrap;
    }

    .confirmada {
      background: #ddf4e7;
      color: #24794a;
    }

    .pendiente {
      background: #fff0d2;
      color: #986a19;
    }

    .finalizada {
      background: #e8edf4;
      color: #596b80;
    }

    /* OCUPACIÓN DEL HOTEL */
    .ocupacion {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 25px;
      flex-wrap: wrap;
      padding: 10px 0;
    }

    .circulo {
      width: 155px;
      height: 155px;
      border-radius: 50%;
      background: conic-gradient(
        #3564b8 var(--porcentaje),
        #dfe7f2 0
      );
      display: grid;
      place-items: center;
    }

    .circulo-centro {
      background: white;
      width: 115px;
      height: 115px;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .circulo strong {
      font-size: 29px;
      color: #193a6c;
    }

    .circulo small {
      font-size: 12px;
      color: #718096;
    }

    .detalle p {
      font-size: 13px;
      color: #53657b;
      margin: 13px 0;
      display: flex;
      align-items: center;
      gap: 7px;
    }

    .detalle strong {
      color: #20324e;
    }

    .punto {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      display: inline-block;
      flex-shrink: 0;
    }

    .punto-azul { background: #3564b8; }
    .punto-verde { background: #35a875; }
    .punto-gris { background: #aeb9c8; }

    /* DISEÑO ADAPTABLE */
    @media (max-width: 1100px) {
      .tarjetas {
        grid-template-columns: repeat(2, 1fr);
      }

      .contenido-inferior {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 600px) {
      .titulo {
        align-items: flex-start;
        flex-direction: column;
      }

      .tarjetas {
        grid-template-columns: 1fr;
      }

      .bienvenida {
        padding: 25px;
        min-height: 260px;
      }

      .bienvenida h2 {
        font-size: 24px;
      }

      .panel-reservas,
      .panel-ocupacion {
        padding: 17px;
      }
    }

  `]
})
export class InicioComponent {

  habitaciones = habitaciones;
  huespedes = huespedes;
  reservas = reservas;

  disponibles = habitaciones.filter(
    h => h.estado === 'Disponible'
  ).length;

  ocupadas = habitaciones.filter(
    h => h.estado === 'Ocupada'
  ).length;

  mantenimiento = habitaciones.filter(
    h => h.estado === 'Mantenimiento'
  ).length;

  porcentaje = this.habitaciones.length > 0
    ? Math.round(
        this.ocupadas / this.habitaciones.length * 100
      )
    : 0;
}
