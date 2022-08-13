//debugger

let userName = prompt("Ingrese el nombre de usuario");
let password = prompt ("Ingrese su contraseña");

if ((userName != "") && (userName == "Emiliano" && password == "1234")) {
    alert ("Bienvenido, " + userName);
   elegirClase();
} 
else {
    alert("No se reconoce el usuario y/o contraseña");
}
function elegirClase () { 
    let clase = prompt ("¿Qué clase quiere reservar?").toLowerCase()    
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
                 elegirClase ();
                 break
         }
     }
