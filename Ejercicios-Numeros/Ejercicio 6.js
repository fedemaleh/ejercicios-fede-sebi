// Ejercicio 6: hacer un programa que muestre por consola los números primos del 1 al 100.

const esPrimo = (n) => {
    for (let i = 2; i <= n / 2; i++) { // recorro todos los posibles divisores (desde 2 hasta la mitad del valor)
        if (n % i === 0) { // si encuentro al menos un divisor
            return false; // ya se que no es primo
        }
    }

    return true; // si recorrí todos los posibles divisores y ninguno era, entonces es primo
}

for (let i = 1; i <= 100; i++) {
    if (esPrimo(i)) {
        console.log(i)
    }
}