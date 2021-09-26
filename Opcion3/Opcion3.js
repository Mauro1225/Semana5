
let numeroCita = +prompt("Ingresa el número cita");
let pagoCita = 0;
let pagoTotal = 0;

if (numeroCita <= 3){
    pagoCita = 200;
    pagoTotal = numeroCita*pagoCita;
} else if(numeroCita <= 5){
    pagoCita = 150;
    pagoTotal = ((numeroCita-3)*pagoCita)+600;
}else if (numeroCita <= 8){
    pagoCita = 100;
    pagoTotal = ((numeroCita-5)*pagoCita)+900;
}else{
    pago = 50;
    pagoTotal = ((numeroCita-8)*pagoCita)+1200;
}
console.log(`El pago de la cita es ${pagoCita} soles`);
console.log(`El pago total del tratamiento fue ${pagoTotal}`);
