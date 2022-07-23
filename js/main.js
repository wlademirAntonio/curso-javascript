function botao() {
    document.getElementById('agradecimento').innerHTML = 'Obrigado por clicar';
}

function redirecionar() {
    window.open('https://www.google.com/webhp?hl=pt-BR&sa=X&ved=0ahUKEwjUtvDB-Y35AhW_l5UCHXzLACYQPAgI');
    // window.location.href = 'google.com'
}

function trocar(elemento) {
    elemento.innerHTML = 'Obrigado por passar o mouse';
}

function voltar(elemento) {
    elemento.innerHTML = 'Passe o mouse aqui';
}

function load() {
    alert('Página carregada')
}

function change(elemento) {
    console.log(elemento.value)
}


// function soma(n1, n1) {
//     return n1 + n1;
// }

// function validaIdade(idade) {

//     if (idade >= 18) {

//         validar = true;

//     } else {

//         validar = false;

//     }

//     return validar;

// }

// var idade = prompt('Digite sua idade');
// console.log(validaIdade(idade));


// var d = new Date();

// console.log(d.getDate());

// var count;

// for (count = 0; count <= 5; count++) {
//     console.log(count)
// }

// while (count < 5) {
//     console.log(count);
//     count++;
// }

// var idade = prompt('Digite sua idade');

// if (idade >= 18) {
//     console.log('Maior de idade');
// } else {
//     console.log('Menor de idade');
// }


// var fruta = [{ nome: 'maça', cor: 'vermelha' }, { nome: 'uva', cor: 'roxa' }];

// console.log(fruta[1].nome);

// var lista = ['maça', 'pera', 'laranja'];

// lista.push('uva');
// lista.pop();

// console.log(lista.join(' '));
// console.log(lista.toString());


// var nome = 'Wlademir';
// var idade = 17;
// var frase = 'Brasil é o melhor do mundo';

// console.log(nome);
// console.log(idade + ' anos');
// console.log(frase.replace('mundo', 'planeta'));
// console.log(frase.toUpperCase('mundo', 'planeta'));
// console.log(frase.toLowerCase('mundo', 'planeta'));