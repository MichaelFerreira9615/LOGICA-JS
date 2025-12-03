//assuntos que ja aprendemos:
//tipos de dados primitivo - string, number, booleano, undefined, null
// varialções da string - aspas duplas, aspas simples, crase (template string)
//crição de variaveis - var, let, const
//diferença do let e const
//reatribuicao de valores na variavel
//operadores matematicos
//operadores de comparpação
//operadores logico (e, ou, inverso)
//propriedade typeof

//assunto: introdução a arrays (listas)

const frutas = ["laranja", "morango", "manga", "uva"];
console.log(frutas);

console.log(frutas[1]);
console.log(frutas[3]);
console.log(frutas[0]);
console.log(frutas[4-2]);

console.log(frutas [0] === "banana");

const objeto = "dindin" || "geladinho";

const resultado = objeto === "dindin";

console.log(resultado)

//substituir o valor no array

frutas[2] = "banana";

console.log(frutas)

frutas[4] = "manga"

console.log(frutas)

frutas[6] = "fruta do conde"
console.log(frutas);

console.log(frutas[5]);

//quantidade de intems de um arreio 

console.log(frutas.length)

console.log(frutas[frutas.length -1])

