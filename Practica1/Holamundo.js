/* js del lado del servidor*/



/* calculo */

let edad1=12
let edad2=34


console.log("Edad promedio")
console.log((edad1+edad2)/2)

/* medir el tiempo del proceso */

console.time("miProceso")
for(let i = 0; i< 1000000; i++) {}
console.timeEnd("miProceso")

/* Objetos Tipo tabla */

let usuarios=[
    {nombre: "Jonathan", edad: 22},
    {nombre: "Genaro", edad: 23},
    {nombre: "Santiago", edad: 22}

];

console.table(usuarios);
