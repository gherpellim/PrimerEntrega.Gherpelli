let duracionSesion;
let tipoEjercicio = "respiración, estiramientos, meditación";
let musicaFondo = "clásica, relajante, instrumental";

const posturas = [
    { postura: "guerrero", duracion: 10, nivel: "intermedio" },
    { postura: "perro boca abajo", duracion: 10, nivel: "fácil" },
    { postura: "guerrero invertido", duracion: 10, nivel: "intermedio" },
    { postura: "pájaro", duracion: 10, nivel: "intermedio" }
];

const accesorios = [];
let comentarios = JSON.parse(localStorage.getItem('comentarios')) || [
    "Las palabras tienen algo mágico, a veces ni ellas mismas pueden expresar lo que sienten...",
    "¡Che! Gracias por la sesión del otro día, realmente marcó un antes y un después para mí.",
    "Hola, soy Alexia. La experiencia con innerdance fue una verdadera transformación para mí."
];

function seleccionarEjercicio() {
    let ejercicio = parseInt(prompt("Seleccione el número del tipo de ejercicio que desea: \n 1. Respiración \n 2. Estiramientos \n 3. Meditación \n 4. Salir"));
    switch (ejercicio) {
        case 1:
            tipoEjercicio = "respiración";
            break;
        case 2:
            tipoEjercicio = "estiramientos";
            break;
        case 3:
            tipoEjercicio = "meditación";
            break;
        case 4:
            break;
        default:
            alert("Opción inválida. Por favor seleccione una opción válida.");
            seleccionarEjercicio();
            break;
    }
}

function seleccionarMusica() {
    let musica = parseInt(prompt("Seleccione el número de la música de fondo que desea: \n 1. Música clásica \n 2. Música relajante \n 3. Sonidos de la naturaleza \n 4. Salir"));
    switch (musica) {
        case 1:
            musicaFondo = "clásica";
            break;
        case 2:
            musicaFondo = "relajante";
            break;
        case 3:
            musicaFondo = "naturaleza";
            break;
        case 4:
            break;
        default:
            alert("Opción inválida. Por favor seleccione una opción válida.");
            seleccionarMusica();
            break;
    }
}

function calcularDuracionEjercicios() {
    const minutosTotales = duracionSesion;
    const cantidadEjercicios = posturas.length;
    const minutosPorEjercicio = minutosTotales / cantidadEjercicios;

    let mensaje = "Duración de cada ejercicio: " + minutosPorEjercicio + " minutos\n";
    mensaje += "Ejercicios a realizar:\n";

    for (let i = 0; i < cantidadEjercicios; i++) {
        mensaje += (i + 1) + ". " + posturas[i].postura + " (" + minutosPorEjercicio + " minutos)\n";
    }

    return mensaje;
}

function mostrarResultados() {
    const divResultadoSesion = document.getElementById('resultadoSesion');
    divResultadoSesion.classList.remove('hidden');
    document.getElementById('duracionSesion').textContent = "Duración de la sesión: " + duracionSesion + " minutos";
    document.getElementById('tipoEjercicio').textContent = "Tipo de ejercicio: " + tipoEjercicio;
    document.getElementById('musicaFondo').textContent = "Música de fondo: " + musicaFondo;
    document.getElementById('duracionEjercicios').textContent = calcularDuracionEjercicios();
    mostrarComentarios();
}

class Accesorio {
    constructor(tipo, material, esNecesario) {
        this.tipo = tipo;
        this.material = material;
        this.esNecesario = esNecesario;
    }

    mostrarInfo() {
        return `
            <p>Accesorio: ${this.tipo}</p>
            <p>Material: ${this.material}</p>
            <p>¿Es necesario? ${this.esNecesario ? "Sí" : "No"}</p>
        `;
    }
}

function cargarAccesorio() {
    let tipo = prompt("Ingrese el tipo de accesorio (ej: Esterilla, Bloque, Cinturón)");
    let material = prompt("Ingrese el material del accesorio (ej: Goma, Corcho, Algodón)");
    let esNecesario = prompt("¿Es necesario para la sesión? (sí/no)").toLowerCase() === "sí";

    const accesorio = new Accesorio(tipo, material, esNecesario);
    accesorios.push(accesorio);
    mostrarAccesorios();
}

function verAccesorios() {
    mostrarAccesorios();
}

function mostrarAccesorios() {
    const divAccesorios = document.getElementById('accesorios');
    if (accesorios.length === 0) {
        divAccesorios.innerHTML = "<p>No hay accesorios añadidos</p>";
    } else {
        divAccesorios.innerHTML = '<h2>Accesorios:</h2>';
        for (const accesorio of accesorios) {
            divAccesorios.innerHTML += accesorio.mostrarInfo();
        }
    }
}

function mostrarComentarios() {
    const divComentarios = document.getElementById('comentarios');
    divComentarios.innerHTML = '<h2>Comentarios:</h2>';
    comentarios.forEach((comentario, index) => {
        divComentarios.innerHTML += `<p>${index + 1}. ${comentario}</p>`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('agregarComentario').addEventListener('click', () => {
        document.getElementById('formularioComentario').classList.remove('hidden');
    });

    document.getElementById('guardarComentario').addEventListener('click', () => {
        const nuevoComentario = document.getElementById('nuevoComentario').value;
        if (nuevoComentario) {
            comentarios.push(nuevoComentario);
            localStorage.setItem('comentarios', JSON.stringify(comentarios));
            document.getElementById('formularioComentario').classList.add('hidden');
            document.getElementById('nuevoComentario').value = '';
            mostrarComentarios();
        }
    });

    document.getElementById('cancelarComentario').addEventListener('click', () => {
        document.getElementById('formularioComentario').classList.add('hidden');
    });

    mostrarComentarios();
});