// Ejercicio 3: hacer un programa que muestre por consola los números del 1 al 100.
// Si el número es múltiplo de 3, mostrar la palabra "FIZZ" en lugar del número.
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log("FIZZ")
    } else {
        console.log(i)
    }
}