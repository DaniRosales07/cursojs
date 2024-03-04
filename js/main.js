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


alert("Veamos en qué podemos ayudarte");

// PRECIOS
const precios = {
    'a': 850,
    'b': 1000,
    'c': 1500,
    'd': 3600,
    'e': 150,
    'f': 350,
    'g': 550,
    'h': 150,
    'i': 350,
    'j': 550,
};

// SERVICIOS
function solicitarServicios() {
    let totalPagar = 0;
    let serviciosElegidos = [];
    let continuar = true;

    while (continuar) {
        let seleccionServicio;
        do {
            seleccionServicio = prompt("Seleccione un servicio:\nA- Diseño de Curriculum\nB- Diseño de Oferta Laboral\nC- Diseño de Publicidad para Emprendedores\nD- Finalizar").toUpperCase();
        } while (seleccionServicio !== 'A' && seleccionServicio !== 'B' && seleccionServicio !== 'C' && seleccionServicio !== 'D');

        if (seleccionServicio === 'D') {
            continuar = false;
        } else {
            let seleccionOpcion;
            switch (seleccionServicio) {
                case 'A':
                    do {
                        seleccionOpcion = prompt("Seleccione una opción para Diseño de Curriculum:\nA) Diseño de CV Basic\nB) Diseño de CV Premium\nC) Diseño de CV Gold\nD) Diseño de CV Gold Plus").toLowerCase();
                    } while (!precios[seleccionOpcion]);
                    break;
                case 'B':
                    do {
                        seleccionOpcion = prompt("Seleccione una opción para Diseño de Oferta Laboral:\nE) Diseño de Oferta Basic\nF) Diseño de Oferta Premium\nG) Diseño de Oferta Gold").toLowerCase();
                    } while (!precios[seleccionOpcion]);
                    break;
                case 'C':
                    do {
                        seleccionOpcion = prompt("Seleccione una opción para Diseño de Publicidad para Emprendedores:\nH) Diseño de Publicidad Basic\nI) Diseño de Publicidad Premium\nJ) Diseño de Publicidad Gold").toLowerCase();
                    } while (!precios[seleccionOpcion]);
                    break;
            }

            // DESCUENTOS
            let descuentoAplicado = 0;

            let tipoDescuento = prompt("Seleccione el tipo de descuento:\n1- Sin descuento\n2- 10%\n3- 30%\n4- 50%");
            switch (tipoDescuento) {
                case '2':
                    descuentoAplicado = 0.1;
                    break;
                case '3':
                    descuentoAplicado = 0.3;
                    break;
                case '4':
                    descuentoAplicado = 0.5;
                    break;
                default:
                    break;
            }

            // PRECIO FINAL
            const precioOriginal = precios[seleccionOpcion];
            const precioConDescuento = precioOriginal - (precioOriginal * descuentoAplicado);

            // TOTAL A PAGAR
            totalPagar += precioConDescuento;

            // ACUMULADOR DE SERVICIOS Y PRECIOS
            serviciosElegidos.push(`${seleccionServicio}: ${seleccionOpcion} (${descuentoAplicado > 0 ? `descuento del ${descuentoAplicado * 100}%` : 'sin descuento'})`);
            
            alert(`El costo del servicio seleccionado ${descuentoAplicado > 0 ? `con un descuento del ${descuentoAplicado * 100}% ` : ''}es de ${precioConDescuento} pesos argentinos.\nTotal acumulado hasta ahora: ${totalPagar}`);
        }
    }

    //SERVICIOS Y PRECIO FINAL
    alert(`Servicios elegidos:\n${serviciosElegidos.join('\n')}\n\nEl precio total a pagar por los servicios seleccionados es de ${totalPagar} pesos argentinos.`);
}

solicitarServicios();