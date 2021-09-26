//Cantidad de litros que produce (entero)
let L = +prompt("Ingrese la cantidad de litros de leche que desea comprar");
//Precio del galón (real)
let PG = +prompt("Ingrese el precio del galon en soles"); 
//Cantidad de galones que produce (real)
let TG = L/3.785;
//Ganancia por la entrega de leche (real)
let GA = PG * TG;

console.log(`Usted ha ganado un total de ${GA} soles`);