/* Array Unidimensional */
var objeto = ['HTML', 1993, 'CSS', 1996, 'Bootstrap', 2011,
    'JS', 1995, 'React', 2013, 'Java', 1995];
console.log(objeto)
console.log(objeto.length)
console.log(objeto[6])
console.log(typeof objeto)


var objeto2 = objeto.toString();
console.log(typeof objeto2)

var x = objeto.join('/')
console.log(x)

var u = objeto.push('IOS');
console.log(objeto)

/*Array bidimensional*/
var julieta = ['HTML', 1993, 'CSS', 1996, 'Bootstrap', 2011,
    'JS', 1995, 'React', 2013, 'Java', 1995];
console.log(julieta)

var julieta = [
    ['HTML', 1993, 'CSS', 1996],
    ['Boostrap', 2011, 'JS', 1995],
    ['React', 2013, 'Java', 1995]
]
console.log(julieta);
console.log(julieta[2][1]);
julieta[1][2] = "JavaScript"
delete julieta[2][2]

var u = julieta.push('Pipoca')
console.log(julieta);
console.log(u)


