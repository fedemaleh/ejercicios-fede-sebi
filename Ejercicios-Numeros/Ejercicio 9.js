// Ejercicio 9: hacer una funcion que dados dos numeros calcular x a la y

const pow = (x, y) => {
    let acumulado = 1; // la potencia es una serie de multiplicaciones, el valor inicial es 1

    for (let i = 0; i < y; i++) { // ejecuto `y` veces. Para el caso especial de y = 0, lo que pasa es que no entra al for y devuelve el 1.
        acumulado = acumulado * x // en cada paso multiplico por `x`
    }

    return acumulado
}

for (let i = 0; i < 10; i++) {
    console.log(`2ˆ${i} =`, pow(2, i))
}