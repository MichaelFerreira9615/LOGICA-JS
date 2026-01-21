// ✅ 20 Exercícios de Lógica com JavaScript (nível iniciante)

// Declare três variáveis: uma string, um number e um booleano. Exiba o tipo de cada uma usando typeof.
let nome = "Michael";
let ano = 2026;
let casado = false;

console.log(typeof nome);
console.log(typeof ano);
console.log(typeof casado);
// Crie uma variável contendo seu nome usando aspas simples, outra usando aspas duplas e outra usando template string. Mostre todas no console.
let primeiroNome = "Michael";
let segundoNome = "Ferreira";
let terceiroNome = "Holanda";
let nomeCompleto = `Meu nome completo é ${primeiroNome} ${segundoNome} ${terceiroNome}`;

console.log(primeiroNome);
console.log(segundoNome);
console.log(terceiroNome);
console.log(nomeCompleto);
// Declare uma variável idade usando let, depois reatribua um novo valor para ela. Exiba antes e depois.
let idade = 12;
console.log(idade);
idade = 19;
console.log(idade);
// Tente alterar o valor de uma variável criada com const e observe o erro. Explique com um comentário no código.
const pai = "carlos";
console.log(pai);
//  pai = "araujo"
//  console.log(pai)

// o erro e mostrado pois "const" é uma variavel constante "não pode ser alterada"!

// Crie duas variáveis numéricas e exiba no console os resultados de: soma, subtração, multiplicação, divisão e resto da divisão.
let num1 = 12;
let num2 = 6;
const soma = num1 + num2;
const multiplicar = num1 * num2;
const dividir = num1 / num2;
const sobra = num1 % num2;

console.log(soma);
console.log(multiplicar);
console.log(dividir);
console.log(sobra);
// Crie uma variável nota e use operadores de comparação para verificar se a nota é maior que 7, igual a 10 e menor que 5.

const nota1 = 7;
const nota2 = 2;
const nota3 = 9;
const nota4 = 4;

const comparando1 = nota1 > nota2;
const comparando2 = nota3 < nota2;
const comparando3 = nota1 < nota4;
const comparando4 = nota4 > nota2;

console.log(comparando1);
console.log(comparando2);
console.log(comparando3);
console.log(comparando4);

// Crie duas variáveis booleanas representando “acordou cedo” e “tomou café”. Use operadores lógicos (&&, ||, !) para testar condições.
let acordouCedo = false;
let tomouCafe = true;

const acao1 = acordouCedo && tomouCafe;
const acao2 = acordouCedo || tomouCafe;
const acao3 = !acordouCedo && tomouCafe;
const acao4 = (acordouCedo && tomouCafe) || (acordouCedo && !tomouCafe);

console.log(acao1);
console.log(acao2);
console.log(acao3);
console.log(acao4);
// Declare uma variável com valor undefined e outra com valor null. Mostre o tipo de cada uma.
let carro = undefined;
let salario = null;

console.log(carro);
console.log(salario);

// Crie um array com 5 nomes. Exiba o primeiro e o último nome usando índice.

const bandas = [
  "Skillet",
  "Linkin Park",
  "Slipknot",
  "Three Days Grace",
  "Nirvana",
];

console.log(bandas[0]);
console.log(bandas[4]);

// Modifique o terceiro nome do array criado acima por outro nome. Mostre o array atualizado.

bandas[2] = "gun's rose";

console.log(bandas);
console.log(bandas[2]);

// Crie um array com 3 números e mostre a soma deles usando os índices.
const nums = [21, 15, 33];

console.log(nums);
console.log(nums[0] + [1] + [2]);

// Crie um objeto representando uma pessoa com nome, idade e cidade. Exiba cada propriedade separadamente.
const identidade = {
  nome: "Carlos",
  idade: 49,
  cidade: "Fortaleza",
};
console.log(identidade.nome);
console.log(identidade.idade);
console.log(identidade.cidade);
// Adicione a esse objeto uma nova propriedade chamada profissao. Mostre o objeto atualizado.

// Delete a propriedade idade do objeto. Exiba o objeto novamente.

// Crie um objeto representando um produto (nome e preço). Mostre o tipo de cada propriedade usando typeof.

// Crie um array com 3 objetos representando alunos (nome e nota). Exiba apenas a nota do segundo aluno.

// Crie um array com tipos misturados (string, number, boolean). Exiba o tipo de cada item.
const colega = {
  nome: "Sandra",
  idade: 28,
  casada: false,
};
console.log(colega.nome);
console.log(colega.idade);
console.log(colega.casada);
// Use template string para exibir uma frase como: “Meu nome é X e tenho Y anos”, usando variáveis.

const fraseCompleta = `Meu nome é ${nome} e tenho ${idade} anos`;

console.log(fraseCompleta);

// Crie uma variável saldo e outra gasto. Use operadores matemáticos para atualizar o valor do saldo e exibir o resultado.

const saldo1 = 1600;
const gasto1 = 316;

const saldoRestante = saldo1 - gasto1;

console.log(saldoRestante);

// Crie duas variáveis: senhaCorreta e senhaDigitada. Use operadores lógicos para verificar se a senha está correta.
