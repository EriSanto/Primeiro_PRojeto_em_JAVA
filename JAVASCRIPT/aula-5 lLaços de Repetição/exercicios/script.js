//Exercício 1
console.log('Exercício 1')
let contador = 1
while (contador < 51) {
    console.log(`Valor = ${contador}`)
    contador++;
}

//Exercício 2
console.log('Exercício 2')
let cont = 10,
    text = ""
do {
    text += `Valor = ${cont}\n`
    cont--;
} while (cont > 0)
console.log(text)

//Exercício 3
console.log('Exercício 3')
for (let a = 1; 1 + 1 < 100; a++)
    console.log(`Pares São:  ${a}`)