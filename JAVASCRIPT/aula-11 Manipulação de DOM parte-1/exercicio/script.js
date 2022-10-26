alert('Bem-vindo')
document.title = 'Teste';

let sec = document.createElement('section')
let main = document.createElement('H1')
let para = document.createElement('p')
main.innerHTML = 'Olá mundo!';
para.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
document.body.appendChild(sec);
sec.appendChild(main);
sec.appendChild(para);

let artc = document.createElement('article')
let title = document.createElement('H1')
let paragrafo = document.createElement('p')
title.innerHTML = 'Seu desempregado!';
paragrafo.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
document.body.appendChild(artc);
artc.appendChild(title);
artc.appendChild(paragrafo);
