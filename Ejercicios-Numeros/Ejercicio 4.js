// Ejercicio 4: hacer una función que dado un número calcule su valor absoluto.
const valorAbsoluto = (x) => {
    if (x >= 0) {
        return x
    }

    return -x
}

for (let i = -10; i <= 10; i++) {
    console.log(valorAbsoluto(i))
}