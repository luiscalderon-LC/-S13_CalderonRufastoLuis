export interface Habitacion {numero:string;tipo:string;precio:number;estado:'Disponible'|'Ocupada'|'Mantenimiento';capacidad:number;imagen:string}
export interface Huesped {nombre:string;documento:string;correo:string;telefono:string;iniciales:string;color:string}
export interface Reserva {codigo:string;huesped:string;habitacion:string;entrada:string;salida:string;estado:'Confirmada'|'Pendiente'|'Finalizada'}
export const habitaciones:Habitacion[]=[
{numero:'101',tipo:'Suite Vista al Mar',precio:420,estado:'Disponible',capacidad:2,imagen:'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900&q=85'},
{numero:'102',tipo:'Habitación Deluxe',precio:280,estado:'Ocupada',capacidad:2,imagen:'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=900&q=85'},
{numero:'201',tipo:'Suite Familiar',precio:520,estado:'Disponible',capacidad:4,imagen:'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=900&q=85'},
{numero:'202',tipo:'Habitación Estándar',precio:190,estado:'Ocupada',capacidad:2,imagen:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=85'},
{numero:'301',tipo:'Suite Premium',precio:650,estado:'Mantenimiento',capacidad:2,imagen:'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=900&q=85'},
{numero:'302',tipo:'Habitación Deluxe',precio:280,estado:'Disponible',capacidad:2,imagen:'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=900&q=85'}
];
export const huespedes:Huesped[]=[
{nombre:'Valeria Mendoza',documento:'74829163',correo:'valeria.mendoza@example.com',telefono:'987 654 321',iniciales:'VM',color:'#dceaf5'},
{nombre:'Carlos Ramírez',documento:'71284596',correo:'carlos.ramirez@example.com',telefono:'956 432 187',iniciales:'CR',color:'#f8e5d3'},
{nombre:'Andrea Torres',documento:'76543821',correo:'andrea.torres@example.com',telefono:'945 123 876',iniciales:'AT',color:'#e7e0fa'},
{nombre:'Diego Flores',documento:'73456912',correo:'diego.flores@example.com',telefono:'978 321 654',iniciales:'DF',color:'#d9f1e9'},
{nombre:'Lucía Herrera',documento:'70123456',correo:'lucia.herrera@example.com',telefono:'912 345 678',iniciales:'LH',color:'#fae0e7'}
];
export const reservas:Reserva[]=[
{codigo:'RES-001',huesped:'Valeria Mendoza',habitacion:'102',entrada:'2026-11-16',salida:'2026-11-19',estado:'Confirmada'},
{codigo:'RES-002',huesped:'Carlos Ramírez',habitacion:'202',entrada:'2026-11-17',salida:'2026-11-20',estado:'Confirmada'},
{codigo:'RES-003',huesped:'Andrea Torres',habitacion:'101',entrada:'2026-11-20',salida:'2026-11-23',estado:'Pendiente'},
{codigo:'RES-004',huesped:'Diego Flores',habitacion:'201',entrada:'2026-11-12',salida:'2026-11-15',estado:'Finalizada'},
{codigo:'RES-005',huesped:'Lucía Herrera',habitacion:'302',entrada:'2026-11-21',salida:'2026-11-25',estado:'Pendiente'}
];
