// Ejercicio 8: hacer una función que genere la secuencia de fibonacci.

// Fibonacci es una serie numérica en el que cada valor es la suma de los dos anteriores:
// 1, 1, 2, 3, 5, 8, 13, 21 ...
const fibonacci = (x) => {
    if (x === 0 || x === 1) { // Caso base, los dos primeros valore son 1
        return 1;
    }

    return fibonacci(x - 1) + fibonacci(x - 2) // es la suma de los dos valores anteriores
}

for (let i = 0; i < 10; i++) {
    console.log(i, "=", fibonacci(i))
}