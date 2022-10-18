/*Array de objeto carro */
var carro = ["Uno", 1998, "0km", false, 2];
var x = carro.toString();
console.log(typeof x)
console.log(typeof carro);

// join()
console.clear()
var y = carro.join(" * ")
console.log(carro)
console.log(x)
console.log(y)

//Tamanho do Array //lenght retorna o tamanho do array
console.log(carro.length)


//Inserir e remover o ultimo elemento "pop"
/*console.clear()
var t = carro.pop()

/* Inserir um elemento no final do array  "push'*/
var u = carro.push('lego');
console.log(carro);
console.log(u);

/* Remove um elemento no inicio do array "shift'*/
console.clear()
var p = carro.shift();
console.log(carro)
console.log(p)

/* Insere um elemento no inicio do array "unshift*/
var w = carro.unshift("console.log")
console.log(carro)
console.log(w)

/*Apagar um elemento do Array em uma posoção pré selecionada*/
delete carro[1]
console.log(carro)