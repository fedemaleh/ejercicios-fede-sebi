// Ejercicio 7: hacer una función que genere la función factorial.
const factorial = (x) => {
    if (x === 0 || x === 1) { // caso base, corta la recursión
        return 1; // por definición si x es 0 o 1 entonces el factorial es 1
    }

    return x * factorial(x - 1) // para cualquier otro valor multiplico y llamo a la función disminuyendo el parámetro
}

const factorialConFor = (x) => {
    let acumulado = 1; // El factorial es una multiplicación, el valor inicial es 1

    for (let i = x; i > 1; i--) { // hago el for desde x y retrocediendo hasta llegar al 1
        acumulado = acumulado * i // en cada paso multiplico por el número actual
    }

    return acumulado
}

for (let i = 0; i < 10; i++) {
    console.log(`Factorial Recursivo ${i}! = ${factorial(i)}`)

    console.log(`Factorial con for: ${i}! = ${factorialConFor(i)}`)
}