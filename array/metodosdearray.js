//length: Retorna o número de elementos no array
let numeros = [1, 2, 3];
console.log(numeros.length); // Saída: 3
 
//push(): Adiciona um ou mais elementos no final do array e retorna o novo comprimento do array.
numeros.push(4);
console.log(numeros); // Saída: [1, 2, 3, 4]

//pop(): Remove o último elemento do array e retorna esse elemento.
let cores = ["vermelho", "azul", "verde"];
let ultimaCor = cores.pop();
console.log(ultimaCor); // Saída: verde
console.log(cores); // Saída: ["vermelho", "azul"]

//shift(): Remove o primeiro elemento do array e retorna esse elemento.
let frutas = ["Maçã", "Banana", "Pêra", "Uva"];
let primeiraFruta = frutas.shift();
console.log(primeiraFruta); // Saída: Maçã
console.log(frutas); // Saída: ["Banana", "Pêra", "Uva"]

//unshift(): Adiciona um ou mais elementos no início do array e retorna o novo comprimento do array.
let numeros = [2, 3, 4];
numeros.unshift(0, 1);
console.log(numeros); // Saída: [0, 1, 2, 3, 4]

//indexOf(): Retorna o índice do primeiro elemento encontrado no array, se não encontrado, retorna -1.
let numeros = [10, 20, 30, 40, 50];
let indice = numeros.indexOf(30);
console.log(indice); // Saída: 2
