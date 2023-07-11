// Ejercicio 2: hacer un programa que muestre por consola los números pares del 1 al 100.

console.log("Opción 1: itero salteando los impares")
for (let i = 2; i <= 100; i += 2) {
    console.log("i: ", i)
}

console.log("Opción 2: uso el operador % para calcular el resto")
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log("i: ", i)
    }
}
