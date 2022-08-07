//clase
class gymClase {
    constructor(nombre, hora, capacidad, disponibilidad) {
        this.nombre = nombre
        this.hora = hora
        this.capacidad = capacidad
        this.disponibilidad = disponibilidad
        this.calcularDisponibilidad = function(reservas){
            if(reservas > this.capacidad){            
            this.disponibilidad = false            
            }
            else {
                this.disponibilidad = true
            }
        this.calcularCapacidad = function (reservas) {
            this.capacidad = this.capacidad - reservas
        }  
    }
}
}
//objetos
const clase1 = new gymClase ("functional", "Lu - Mie - Vie 16:00", 15, false)
const clase2 = new gymClase ("spinning", "Lu - Vie 15:00", 20, true)
const clase3 = new gymClase ("pilates", "Mar - Jue - Sab 17:30", 15, true)
const clase4 = new gymClase ("yoga", "Mar - Jue - Sab 20:30", 10, true)
const clase5 = new gymClase ("boxeo", "Lu - Vie 19:00", 20, false)


// //array
const clases = [clase1, clase2, clase3, clase4, clase5];



//función para recorrer el array
function recorrerClases() {

for (let clase of clases) {
    console.table(clase)
}
}
//método slice para ver solo clases disponibles
const disponible = clases.slice(1, 5);
 function verDisponibles (){
    for (let claseDisp of disponible) {
    console.log(claseDisp.nombre)
 }
}
