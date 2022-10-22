
const numeros = [17, 43, 8, 4, 97, 56, 29, 30]
numeros.forEach(numerosPar)

function numerosPar(valor) {
    if (valor % 2 == 0 && !isNaN(valor)) console.log(`Par: ${valor}`);


}
