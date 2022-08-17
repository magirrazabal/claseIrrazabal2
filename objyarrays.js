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
    cuerpo.innerHTML=""
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
    cambiarTitulo()
}

function mostrarTodas() {
    cuerpo.innerHTML=""
    clases.forEach(clase => {
                cuerpo.innerHTML += `<tr>
                                <td>${clase.nombre}</td>
                                <td>${clase.hora}</td>
                                <td>${clase.capacidad}</td>
                                <td>${clase.disponibilidad}</td>
                            </tr>`
    })
    tituloOriginal()
}
function existeClase() {
    let busqueda = prompt("¿Qué clase buscas?").toLowerCase()
    const resultado = clases.some(elemento => elemento.nombre === busqueda)
    console.log("Tenemos la clase que buscás?", resultado)

}
function elegirClase() {
    let clase = prompt("¿Qué clase quiere reservar?").toLowerCase()
    switch (clase) {
        case "functional":
            alert("Esta clase está completa");
            elegirClase();
            break;
        case "yoga":
            alert("Esta clase está completa");
            elegirClase();
            break;
        case "spinning":
            alert("¡Listo! Gracias por reservar.")
            break;
        case "boxeo":
            alert("¡Listo! Gracias por reservar.")
            break;
        case "pilates":
            alert("¡Listo! Gracias por reservar.")
            break;
        default:
            alert("Ingrese una clase válida")
            elegirClase();
            break
    }
}

function reserva(){
let userName = prompt("Ingrese el nombre de usuario");
let password = prompt ("Ingrese su contraseña");
if ((userName != "") && (userName == "Emiliano" && password == "1234")) {
    alert ("Bienvenido, " + userName);
   elegirClase();
} 
else {
    alert("No se reconoce el usuario y/o contraseña");
}
}

function cambiarTitulo() {
    tituloDinamico.innerText = "Clases disponibles"
}
function tituloOriginal(){
tituloDinamico.innerText = "Todas las clases"
}
function esconderCartas() {
    todas.remove()
}

//función para recorrer el array recorrerClases()

//método slice para ver solo clases disponibles verDisponibles()

//función some para ver qué clases tenemos existeClase()

//función filter para encontrar clases por día filtrarClases()

const titulo = document.querySelector("#titulo")
const parrafo = document.querySelector("#parrafo")
const cartas = document.querySelector(".card")
const pie = document.querySelector(".pie")
const tituloDinamico = document.querySelector("#tituloDinamico")
const todas = document.querySelector("#todas")
const botonTodas = document.querySelector(".botonTodas")
const botonFiltro = document.querySelector(".botonFiltro")
const botonReserva = document.querySelector(".botonReserva")
//existeClase() //función para ver clases
//filtrarClases() //función para filtrar clases y crear tabla
//cambiarTitulo() //todas las clases a clases disponibles
//esconderCartas() //cartas de clases se esconden
botonTodas.addEventListener("click", mostrarTodas)
botonFiltro.addEventListener("click", filtrarClases)
botonReserva.addEventListener("click", reserva)
botonReserva.addEventListener("mousemove", ()=> {
    botonReserva.title = "Emiliano | 1234"
})





