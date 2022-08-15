//clase
class gymClase {
    constructor(nombre, hora, capacidad, disponibilidad) {
        this.nombre = nombre
        this.hora = hora
        this.capacidad = capacidad
        this.disponibilidad = disponibilidad //Espacio disponible en base a reservas
        this.calcularDisponibilidad = function (reservas) {
            if (reservas >= this.capacidad) {
                this.disponibilidad = false
            }
            else {
                this.disponibilidad = true
            }
        }
    }
}
//objetos
const clase1 = new gymClase("Functional", "lunes - miercoles - viernes 16:00", 15, false)
const clase2 = new gymClase("Spinning", "lunes a viernes 15:00", 20, true)
const clase3 = new gymClase("Pilates", "martes - jueves - sabado 17:30", 15, true)
const clase4 = new gymClase("Yoga", "martes - jueves - sabado 20:30", 10, true)
const clase5 = new gymClase("Boxeo", "lunes a viernes 19:00", 20, false)


// //array
const clases = [clase1, clase2, clase3, clase4, clase5];

function recorrerClases() {
    for (let clase of clases) {
        console.table(clase)
    }
}
const disponible = clases.slice(1, 5);
function verDisponibles() {
    for (let claseDisp of disponible) {
        console.log("La clase", claseDisp.nombre, "está disponible")
    }
}
function filtrarClases() {
    let claseFound = prompt("Qué día querés entrenar?").toLowerCase()
    const resultado = clases.filter(elemento => elemento.hora.includes(claseFound))

    console.table(resultado)

    resultado.forEach(clase => {
        cuerpo.innerHTML += `<tr>
                                <td>${clase.nombre}</td>
                                <td>${clase.hora}</td>
                                <td>${clase.capacidad}</td>
                                <td>${clase.disponibilidad}</td>
                            </tr>`
    })
}

function existeClase() {
    let busqueda = prompt("¿Qué clase buscas?").toLowerCase()
    const resultado = clases.some(elemento => elemento.nombre === busqueda)
    console.log("Tenemos la clase que buscás?", resultado)

}

function cambiarTitulo(){
    tituloDinamico.innerText = "Clases disponibles"
}
function esconderCartas() {
todas.remove()
}

//función para recorrer el array recorrerClases()

//método slice para ver solo clases disponibles verDisponibles()

//función some para ver qué clases tenemos existeClase()

//función filter para encontrar clases por día filtrarClases()

const titulo = document.getElementById("titulo")
const parrafo = document.getElementById("parrafo")
const cartas = document.getElementsByClassName("card")
const pie = document.getElementsByClassName("pie")
const boton = document.getElementById("boton")
const tituloDinamico = document.getElementById("tituloDinamico")
const todas = document.getElementById("todas")

existeClase() //función para ver clases
filtrarClases() //función para filtrar clases y crear tabla
cambiarTitulo() //todas las clases a clases disponibles
esconderCartas() //cartas de clases se esconden




