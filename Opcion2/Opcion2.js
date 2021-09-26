let precioSencilla = 20;
let precioDoble = 25;
let precioTriple = 28;

let cantidadSencilla = 0;
let cantidadDoble = 0;
let cantidadTriple = 0;

let finalizar = false;

do {
    let eleccion = +prompt("Ingrese 1. para una Sensilla, 2. para una doble, 3. para una triple y 4. para finalizar el pedido");

    switch (eleccion){
        case 1:
            console.log("Una sencilla");
            cantidadSencilla++;
            break;
        case 2:
            console.log("Una doble");
            cantidadDoble++;
            break;
        case 3:
            console.log("Una triple");
            cantidadTriple++;
            break;
        case 4:
            finalizar = true;
            break;
        default:
            console.log("Opción incorrecta");
    }
}while (finalizar == false);

let total = precioSencilla*cantidadSencilla + precioDoble*cantidadDoble + precioTriple*cantidadTriple;
let recargo = total + 0.05*total;
let finalizar2 = false;
do {
    let medioPago = +prompt("Ingrese 1. para cancelar al contado y 2. para cancelar con tarjeta de crédito");

    switch (medioPago){
        case 1:
            console.log(`El total a pagar será de1: ${total} soles`);
            finalizar2 = true;
            break;
        case 2:
            console.log(`Usted tiene un recargo del 5% por pago con tarjeta, por lo que el monto total equivale a ${recargo} soles`);
            finalizar2 = true;
            break;
        default:
            console.log("Opción incorrecta");
    }
}while (finalizar2 == false);

console.log()