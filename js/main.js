alert("Bienvenido a Trabajos en Mendoza");
alert("Creemos tu usuario");

let Usuario = prompt("Ingresar Nombre de Usuario");
let Contraseña = prompt("Ingresar Contraseña");
let Mail = prompt("Ingresar Mail");

alert("Perfecto tu usuario ha sido creado. Tu nombre de Usuario es: " + Usuario + "\n Tu contraseña es: " + Contraseña + "\n Tu Mail es: " + Mail);

alert("Ahora inicia sesion con tu mail y contraseña");



let IngresarMail = prompt("Ingresar Mail Registrado");
let IngresarContraseña = prompt("Ingresar Contraseña registrada");
if ((Mail === IngresarMail) && (Contraseña === IngresarContraseña)) {
    alert("Inicio correcto. Bienvenido " + Usuario);
} else {
    alert("Error inicio incorrecto. Seguirá pero como invitado en la página. Le enviaremos un mail para restablecer su usuario");
}


alert("Ofrecemos los siguientes servicios: \n 1 - Diseños de CV \n 2 - Diseños de Ofertas Laborales \n 3 - Diseños de Publicidad de Servicios");
let servicioElegido;
do {
    servicioElegido = prompt("¿Qué servicio quieres adquirir? Ingresa 1, 2 o 3");
} while (![1, 2, 3].includes(parseInt(servicioElegido)));


let servicioDetalle;
switch (parseInt(servicioElegido)) {
    case 1:
        do {
            alert("Nuestros Packs de Diseños de CV son: \n A: Diseño de CV de Alto Impacto \n B: Diseño de CV + Constancia de CUIL \n C: Diseño CV + CUIL + Carta de Presentación ")
            servicioDetalle = prompt("¿Cuál servicio prefieres: A, B o C?");
        } while (!['A', 'B', 'C'].includes(servicioDetalle.toUpperCase()));
        break;
    case 2:
        do {
            alert("Nuestros Packs de Diseños de Oferta de Trabajo son: \n D: Compartimos tu Post en nuestras historias de Instagram \n E: Diseño de Oferta + Compartir y destacar en Instagram \n F: Diseño de Oferta + Destacadas + Publicar en nuestro Feed de Instagram ")
            servicioDetalle = prompt("¿Cual servicio prefieres: D, E o F?");
        } while (!['D', 'E', 'F'].includes(servicioDetalle.toUpperCase()));
        break;
    case 3:
        do {
            alert("Nuestros Packs de Diseños de Publicidad de Servicio son: \n G: Compartimos tu Post en nuestras historias de Instagram \n H: Diseño de Oferta + Compartir y destacar en Instagram \n I: Diseño de Oferta + Destacadas + Publicar en nuestro Feed de Instagram ")
            servicioDetalle = prompt("¿Cuál servicio prefieres: G, H o I?");
        } while (!['G', 'H', 'I'].includes(servicioDetalle.toUpperCase()));
        break;
}

let servicioA = 750;
let servicioB = 850;
let servicioC = 1200;
let servicioD = 50;
let servicioE = 350;
let servicioF = 550;
let servicioG = 50;
let servicioH = 350;
let servicioI = 550;


switch (servicioDetalle) {
    case "A":
        alert("El valor del servicio es de: " + servicioA + " pesos argentinos");
        break;
    case "B":
        alert("El valor del servicio es de: " + servicioB + " pesos argentinos");
        break;
    case "C":
        alert("El valor del servicio es de: " + servicioC + " pesos argentinos");
        break;
    case "D":
        alert("El valor del servicio es de: " + servicioD + " pesos argentinos");
        break;
    case "E":
        alert("El valor del servicio es de: " + servicioE + " pesos argentinos");
        break;
    case "F":
        alert("El valor del servicio es de: " + servicioF + " pesos argentinos");
        break;
    case "G":
        alert("El valor del servicio es de: " + servicioG + " pesos argentinos");
        break;
    case "H":
        alert("El valor del servicio es de: " + servicioH + " pesos argentinos");
        break;
    case "I":
        alert("El valor del servicio es de: " + servicioI + " pesos argentinos");
        break;
}

alert("¿Tienes un descuento? Calculemos cuanto seria el precio final")

let PrecioConDescuento;
//500
let PrecioOriginal = parseFloat(prompt("Ingresar precio de tu pack de diseño"));
//10
let Porcentaje = parseFloat(prompt("Ingresar numero de descuento sin procentaje. Ejemplo: 20"));
//0.1
let Descuento = (Porcentaje / 100);


//CALCULA DESCUENTO
function CalcularDescuento(precios, descuentos) {
    ValorDescuento = (precios * descuentos)
}

function CalcularPrecioFinal(precioO, descuento) {
    PrecioConDescuento = (precioO - descuento);
}

function MostrarPrecioFinal(Mensaje) {
    alert("El valor de tu pack de diseño es de " + Mensaje);
}

CalcularDescuento(PrecioOriginal, Descuento);
CalcularPrecioFinal(PrecioOriginal, ValorDescuento);
MostrarPrecioFinal(PrecioConDescuento);

alert("Comunicate a traves de nuestro Whatsapp que esta en el link de abajo asi te enviamos la info para abonar tu servicio");