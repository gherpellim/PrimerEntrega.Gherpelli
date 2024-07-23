let duracionSesion = 0
let tipoEjercicio = "respiración, estiramientos, meditación"
let musicaFondo = "clásica, relajante, instrumental"

function seleccionarDuracion() {
    duracionSesion = parseInt(prompt("¿Cuántos minutos deseas que dure la sesión?"))
    if (duracionSesion < 10 || duracionSesion > 60) {
        while (duracionSesion < 10 || duracionSesion > 60) {
            alert("La duración debe ser entre 10 y 60 minutos.")
            duracionSesion = parseInt(prompt("¿Cuántos minutos deseas que dure la sesión?"))
        }
    } else {
        alert("La duración seleccionada es válida.")
    }
}

function seleccionarEjercicio() {
  let ejercicio = parseInt(prompt("Seleccione el número del tipo de ejercicio que desea: \n 1. Respiración \n 2. Estiramientos \n 3. Meditación \n 4. Salir"))
  switch (ejercicio) {
    case 1:
      alert("Ha seleccionado respiración.")
      tipoEjercicio = "respiración"
      break;
    case 2:
      alert("Ha seleccionado estiramientos.")
      tipoEjercicio = "estiramientos"
      break;
    case 3:
      alert("Ha seleccionado meditación.")
      tipoEjercicio = "meditación"
      break;
    case 4:
      alert("Gracias por utilizar nuestro simulador de Kundalini Yoga.")
      break;
    default:
      alert("Opción inválida. Por favor seleccione una opción válida.")
      seleccionarEjercicio()
      break;
  }
}

const postura1 = {
  postura: "guerrero",
  duracion: 10, 
  nivel: "intermedio",
}
const postura2 = {
  postura: "perro boca abajo",
  duracion: 10, 
  nivel: "facil",
}
const postura3 = {
  postura: "guerrero invertido",
  duracion: 10, 
  nivel: "intermedio",
}
const postura4 = {
  postura: "pájaro",
  duracion: 10, 
  nivel: "intermedio",
}
const posturas = [postura1, postura2, postura3, postura4]
console.log(posturas)

function seleccionarMusica() {
    let musica = parseInt(prompt("Seleccione el número de la música de fondo que desea: \n 1. Música clásica \n 2. Música relajante \n 3. Sonidos de la naturaleza \n 4. Salir"))
    switch (musica) {
      case 1:
        alert("Ha seleccionado música clásica.")
        musicaFondo = "clásica"
        break;
      case 2:
        alert("Ha seleccionado música relajante.")
        musicaFondo = "relajante"
        break;
      case 3:
        alert("Ha seleccionado sonidos de la naturaleza.")
        musicaFondo = "naturaleza"
        break;
      case 4:
        alert("Gracias por utilizar nuestro simulador de Kundalini Yoga.")
        break;
      default:
        alert("Opción inválida. Por favor seleccione una opción válida.")
        seleccionarMusica()
        break;
    }
  }
  function calcularDuracionEjercicios() {
    const minutosTotales = duracionSesion
    const cantidadEjercicios = posturas.length
    const minutosPorEjercicio = minutosTotales / cantidadEjercicios
  
    let mensaje = "Duración de cada ejercicio: " + minutosPorEjercicio + " minutos\n"
    mensaje += "Ejercicios a realizar:\n"
  
    for (let i = 0; i < cantidadEjercicios; i++) {
      mensaje += (i + 1) + ". " + posturas[i].postura + " (" + minutosPorEjercicio + " minutos)\n"
    }
    alert(mensaje)
  }
  
function mostrarResultados() {
    let mensaje = "¡Tu sesión de Kundalini Yoga ha comenzado!\n"
    mensaje += "Duración: " + duracionSesion + " minutos\n"
    mensaje += "Tipo de ejercicio: " + tipoEjercicio + "\n"
    mensaje += "Música de fondo: " + musicaFondo + "\n"
    alert(mensaje);
}
seleccionarDuracion()
seleccionarEjercicio()
seleccionarMusica()
mostrarResultados()
calcularDuracionEjercicios()

let respuesta = confirm("¿Estás seguro de que deseas salir?")
if (respuesta) {
  console.log("El usuario hizo clic en 'Aceptar'.")
} else {
  console.log("El usuario hizo clic en 'Cancelar'.")
}