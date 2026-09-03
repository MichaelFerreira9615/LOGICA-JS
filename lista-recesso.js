// # 📚 Lista de Exercícios de Férias - Lógica de Programação com JavaScript

// **Prof. Rodrigo Medeiros - Curso Programação Full-Stack | Digital College**

// ---

// ## 📖 Conteúdo para Revisão

// Antes de resolver os exercícios, revise os seguintes tópicos:

// ### Aula 11 - Introdução ao JavaScript (Variáveis, Tipos de Dados e Operadores)

// - **O que é JavaScript**: Linguagem de programação usada no frontend e backend
// - **Formas de executar JavaScript**: Console do navegador, dentro do HTML, arquivo .js separado, Node.js
// - **Variáveis**:
//   - `var` (evitar uso), `let` (valores que mudam), `const` (valores fixos)
//   - Escopo de bloco vs escopo global/função
// - **Boas práticas de nomeação**: camelCase, nomes descritivos, não usar palavras reservadas
// - **Tipos de dados primitivos**: String, Number, Boolean, Undefined, Null
// - **Tipos de dados complexos**: Arrays e Objetos
// - **Operador `typeof`**: Verificar o tipo de uma variável
// - **Operadores aritméticos**: `+`, `-`, `*`, `/`, `%` (resto da divisão)
// - **Operadores relacionais**: `>`, `<`, `>=`, `<=`, `==`, `===`, `!=`, `!==`
// - **Operadores lógicos**: `&&` (E), `||` (OU), `!` (NÃO)

// ### Aula 12 - Funções em JavaScript

// - **O que são funções**: Blocos de código reutilizáveis
// - **Benefícios**: Evitar repetição (DRY), organização, manutenção, flexibilidade
// - **Tipos de funções**:
//   - Função Nomeada: `function nomeFuncao() {}`
//   - Função Anônima: `const nomeFuncao = function() {}`
//   - Arrow Function: `const nomeFuncao = () => {}`
// - **Parâmetros e argumentos**: Valores de entrada das funções
// - **Retorno de valores**: Uso do `return` para devolver resultados
// - **Escopo de variáveis**:
//   - Escopo Global: Variáveis acessíveis em qualquer lugar
//   - Escopo Local: Variáveis acessíveis apenas dentro da função/bloco

// ### Aula 13 - Estruturas de Controle

// - **Estruturas condicionais**:
//   - `if`, `else if`, `else`: Tomada de decisões
//   - `switch/case`: Múltiplas condições organizadas
//   - Importância do `break` no switch (evitar "fall-through")
// - **Operador ternário**: `condição ? valorSeVerdadeiro : valorSeFalso`
// - **Fluxos dinâmicos**: Criar programas interativos e funcionais

// ---

// ## 🎯 Instruções

// - **Nível 1** ⭐: Questões básicas para fixação de conceitos
// - **Nível 2** ⭐⭐: Questões intermediárias que combinam conceitos
// - **Nível 3** ⭐⭐⭐: Questões avançadas com múltiplos conceitos integrados

// **Dica**: Teste todos os seus códigos no console do navegador!

// ---

// ## 📝 Questões

// ### Questão 1 - Nível 1 ⭐

// Declare três variáveis usando `let`: `nome` (seu nome), `idade` (sua idade) e `cidade` (sua cidade). Em seguida, exiba no console uma frase no formato: "Meu nome é [nome], tenho [idade] anos e moro em [cidade]."

let nome = 'Michael';
let idade = 19;
let cidade = 'Fortaleza';

const Frase = 'Ola meu nome é ${nome} eu tenho ${idade} anos de idade e moro em ${cidade}';
// ---
// ### Questão 2 - Nível 1 ⭐

// Crie uma variável para cada tipo primitivo do JavaScript (String, Number, Boolean, Undefined, Null) e use `typeof` para exibir o tipo de cada uma no console.

const Qtwo = 'questão 2';
const Qtwo1 = 33;
const Qtwo2 = false;
const Qtwo3 = undefined;

console.log(typeof Qtwo);
console.log(typeof Qtwo1);
console.log(typeof Qtwo2);
console.log(typeof Qtwo3);
// ---
// ### Questão 3 - Nível 1 ⭐

// Crie duas variáveis numéricas `a` e `b` com valores de sua escolha. Calcule e exiba no console: a soma, a subtração, a multiplicação, a divisão e o resto da divisão entre elas.

const a = 22;
const b = 17;
const soma = a + b;
console.log(soma)
// ---

// ### Questão 4 - Nível 1 ⭐

// Crie uma função chamada `saudacao` que receba um nome como parâmetro e retorne a string "Olá, [nome]! Bem-vindo(a)!".
function saudacao1 (nome){
  console.log(`Olá, ${nome} seja bem vindo`)
}
saudacao1("Lucas")
// ---

// ### Questão 5 - Nível 1 ⭐

// Escreva um código que verifique se o número 15 é maior que 10. Use `if/else` para exibir "Maior que 10" ou "Menor ou igual a 10".
function verificacao (numeroVerifica){
  if (numeroVerifica > 10)
    {
    return `O numero ${numeroVerifica} é maior que 10`
  } else if (numeroVerifica === 10)
  {
    return `O numero ${numeroVerifica} é igual a 10` 
  } else (numeroVerifica < 10)
  {
    return `O numero ${numeroVerifica} é menor que 10`
  }

  console.log(verificacao)
}
console.log(verificacao(15));
console.log(verificacao(10));
console.log(verificacao(7));
// ---

// ### Questão 6 - Nível 1 ⭐

// Crie uma função chamada `dobrar` que receba um número como parâmetro e retorne o dobro desse número.
function dobrar (number) {
  console.log(number * 2)
}
dobrar(22);
dobrar(11);
dobrar(13);
// ---

// ### Questão 7 - Nível 1 ⭐

// Declare um array chamado `frutas` com 5 frutas de sua escolha. Exiba no console a primeira e a última fruta do array.
const frutas = [
  'banana','maçã','pêra','abacaxi','melancia'
]
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[4]);
// ---

// ### Questão 8 - Nível 1 ⭐

// Crie um objeto chamado `pessoa` com as propriedades: `nome`, `idade` e `profissao`. Exiba cada propriedade no console.
const pessoa1 = {nome: "michael",
                 idade: 19,
                 profissão: "aux.administrativo"
                };
console.log(pessoa1);
console.log(pessoa1.nome);
console.log(pessoa1.idade);
console.log(pessoa1.profissão );
// ---

// ### Questão 9 - Nível 1 ⭐

// Use o operador ternário para verificar se uma variável `numero` (valor 7) é par ou ímpar. Armazene o resultado ("Par" ou "Ímpar") em uma variável e exiba no console.
function ParOuImpar(VerificarNumero){
   if (VerificarNumero % 2 === 0){
    return `o numero ${VerificarNumero} é par` 
   } else {
    return `O numero ${VerificarNumero} é impar`
   }
  }
  console.log(ParOuImpar(7));
  console.log(ParOuImpar(10));
  console.log(ParOuImpar(4));
// ---

// ### Questão 10 - Nível 1 ⭐

// Crie uma função usando Arrow Function chamada `quadrado` que receba um número e retorne seu quadrado (número elevado a 2).
function quadrado1 (numero) {
  return numero ** 2
};
console.log(quadrado1(4));
console.log(quadrado1(10));
console.log(quadrado1(6));
// ---

// ### Questão 11 - Nível 1 ⭐

// Declare duas variáveis booleanas `temCarteira` e `maiorDeIdade`. Use os operadores lógicos para verificar se a pessoa pode dirigir (ambas devem ser `true`).

// ---

// ### Questão 12 - Nível 1 ⭐

// Crie uma função chamada `soma` que receba dois números como parâmetros e retorne a soma deles.

// ---

// ### Questão 13 - Nível 1 ⭐

// Escreva um código usando `switch` que receba um número de 1 a 7 e exiba o dia da semana correspondente (1 = Domingo, 2 = Segunda, etc.).

// ---

// ### Questão 14 - Nível 1 ⭐

// Crie uma constante chamada `PI` com o valor 3.14159 e uma função que calcule a área de um círculo dado o raio (Área = PI \* raio²).

// ---

// ### Questão 15 - Nível 1 ⭐

// Verifique se a string "JavaScript" é igual a "javascript" usando `==` e `===`. Exiba os resultados e explique a diferença em um comentário.

// ---

// ### Questão 16 - Nível 1 ⭐

// Crie uma função chamada `ehPositivo` que receba um número e retorne `true` se for positivo ou `false` se for negativo ou zero.

// ---

// ### Questão 17 - Nível 1 ⭐

// Declare uma variável `temperatura` com valor 25. Use `if/else` para exibir "Está quente" se for maior que 30, ou "Está agradável" caso contrário.

// ---

// ### Questão 18 - Nível 1 ⭐

// Crie uma função anônima armazenada em uma constante chamada `subtrair` que receba dois números e retorne a subtração do primeiro pelo segundo.

// ---

// ### Questão 19 - Nível 1 ⭐

// Crie um array chamado `notas` com 4 valores numéricos. Acesse e exiba no console o segundo e o terceiro elemento do array.

// ---

// ### Questão 20 - Nível 1 ⭐

// Escreva uma função chamada `apresentar` que receba `nome` e `idade` como parâmetros e retorne: "Me chamo [nome] e tenho [idade] anos."

// ---

// ### Questão 21 - Nível 2 ⭐⭐

// Crie uma função chamada `calcularMedia` que receba três notas como parâmetros e retorne a média aritmética. Em seguida, use uma estrutura condicional para exibir se o aluno está "Aprovado" (média >= 7), "Recuperação" (média entre 5 e 6.9) ou "Reprovado" (média < 5).

// ---

// ### Questão 22 - Nível 2 ⭐⭐

// Crie uma função chamada `classificarIdade` que receba uma idade como parâmetro e retorne: "Criança" (0-12), "Adolescente" (13-17), "Adulto" (18-59) ou "Idoso" (60+).

// ---

// ### Questão 23 - Nível 2 ⭐⭐

// Crie uma função chamada `calcularIMC` que receba peso (em kg) e altura (em metros) como parâmetros. A função deve calcular o IMC (peso / altura²) e retornar uma string indicando a classificação: "Abaixo do peso" (< 18.5), "Peso normal" (18.5-24.9), "Sobrepeso" (25-29.9) ou "Obesidade" (>= 30).

// ---

// ### Questão 24 - Nível 2 ⭐⭐

// Crie uma função chamada `calcularDesconto` que receba o valor de um produto e a porcentagem de desconto. A função deve retornar o valor final com o desconto aplicado. Use o operador ternário para garantir que o desconto não seja maior que 50%.

// ---

// ### Questão 25 - Nível 2 ⭐⭐

// Crie um objeto `aluno` com as propriedades: `nome`, `nota1`, `nota2`, `nota3`. Crie uma função que receba esse objeto e retorne a situação do aluno (Aprovado, Recuperação ou Reprovado) baseada na média das notas.

// ---

// ### Questão 26 - Nível 2 ⭐⭐

// Crie uma função chamada `verificarTriangulo` que receba três lados como parâmetros e verifique se eles podem formar um triângulo (a soma de dois lados deve ser maior que o terceiro lado). Retorne `true` ou `false`.

// ---

// ### Questão 27 - Nível 2 ⭐⭐

// Crie uma função chamada `converterTemperatura` que receba uma temperatura e uma string indicando a escala atual ("C" para Celsius ou "F" para Fahrenheit). A função deve converter e retornar a temperatura na outra escala. Fórmulas: F = C _ 9/5 + 32 | C = (F - 32) _ 5/9

// ---

// ### Questão 28 - Nível 2 ⭐⭐

// Crie uma função chamada `calcularPrecoFinal` que receba o preço de um produto e o tipo de cliente ("comum", "associado" ou "vip"). Use `switch` para aplicar descontos diferentes: comum (0%), associado (10%), vip (20%). Retorne o preço final.

// ---

// ### Questão 29 - Nível 2 ⭐⭐

// Crie uma função chamada `verificarAnobissexto` que receba um ano como parâmetro e retorne `true` se for bissexto ou `false` caso contrário. Um ano é bissexto se for divisível por 4, exceto anos divisíveis por 100, a menos que também sejam divisíveis por 400.

// ---

// ### Questão 30 - Nível 2 ⭐⭐

// Crie uma função chamada `calcularSalarioLiquido` que receba o salário bruto. A função deve calcular o desconto de INSS (11%) e IR (15% se salário > 2000, senão 0%). Retorne um objeto com: salarioBruto, descontoINSS, descontoIR e salarioLiquido.

// ---

// ### Questão 31 - Nível 2 ⭐⭐

// Crie uma função chamada `maiorDeTres` que receba três números como parâmetros e retorne o maior deles usando apenas estruturas condicionais (não use Math.max).

// ---

// ### Questão 32 - Nível 2 ⭐⭐

// Crie uma função chamada `calcularAreaForma` que receba o tipo da forma ("circulo", "retangulo", "triangulo") e os parâmetros necessários. Use `switch` para calcular e retornar a área correspondente.

// ---

// ### Questão 33 - Nível 2 ⭐⭐

// Crie uma função `verificarPalindromo` que receba uma palavra e verifique se ela é um palíndromo (lê-se igual de trás para frente). Retorne `true` ou `false`. Dica: você pode converter a string para array, inverter e comparar.

// ---

// ### Questão 34 - Nível 2 ⭐⭐

// Crie uma função chamada `calcularParcelas` que receba o valor total de uma compra e o número de parcelas desejado. Se o número de parcelas for maior que 3, aplique juros de 2% por parcela adicional. Retorne um objeto com: valorTotal, numeroParcelas, juros e valorParcela.

// ---

// ### Questão 35 - Nível 2 ⭐⭐

// Crie uma função chamada `classificarProduto` que receba o preço de um produto e retorne sua categoria: "Econômico" (até R$50), "Intermediário" (R$50.01 a R$200), "Premium" (R$200.01 a R$500) ou "Luxo" (acima de R$500).

// ---

// ### Questão 36 - Nível 2 ⭐⭐

// Crie um objeto `conta` com as propriedades: `titular`, `saldo` e `tipo` ("corrente" ou "poupanca"). Crie funções `depositar`, `sacar` e `verificarSaldo` que manipulem esse objeto. A função sacar deve verificar se há saldo suficiente.

// ---

// ### Questão 37 - Nível 2 ⭐⭐

// Crie uma função chamada `calcularIdade` que receba o ano de nascimento e retorne a idade da pessoa. Use uma condição para exibir também se a pessoa pode votar (>= 16 anos) e se o voto é obrigatório (>= 18 e <= 70 anos).

// ---

// ### Questão 38 - Nível 2 ⭐⭐

// Crie uma função usando Arrow Function chamada `ordenarNumeros` que receba três números e retorne um array com eles ordenados do menor para o maior (sem usar o método sort).

// ---

// ### Questão 39 - Nível 2 ⭐⭐

// Crie uma função chamada `validarSenha` que receba uma senha (string) e verifique se ela é válida. Uma senha válida deve ter: pelo menos 8 caracteres, pelo menos uma letra maiúscula e pelo menos um número. Retorne um objeto indicando se é válida e quais critérios falharam.

// ---

// ### Questão 40 - Nível 2 ⭐⭐

// Crie uma função chamada `calcularNotaFinal` que receba um objeto com as notas de diferentes atividades (prova, trabalho, participacao) e seus respectivos pesos. Calcule a média ponderada e retorne a nota final junto com a situação do aluno.

// ---

// ### Questão 41 - Nível 3 ⭐⭐⭐

// Crie um sistema de calculadora com as seguintes funções: `somar`, `subtrair`, `multiplicar`, `dividir` e uma função principal `calcular` que receba dois números e uma operação (string) e use `switch` para chamar a função correspondente. Trate o caso de divisão por zero.

// ---

// ### Questão 42 - Nível 3 ⭐⭐⭐

// Crie uma função chamada `analisarVendas` que receba um array de objetos representando vendas (cada objeto com: `produto`, `quantidade`, `valorUnitario`). A função deve retornar um objeto com: totalVendas, produtoMaisVendido, valorTotalArrecadado e mediaValorPorVenda.

// ---

// ### Questão 43 - Nível 3 ⭐⭐⭐

// Crie um sistema de notas escolares com as seguintes funções:

// - `adicionarNota(aluno, nota)`: adiciona uma nota ao array de notas do aluno
// - `calcularMedia(aluno)`: calcula a média das notas
// - `verificarSituacao(aluno)`: retorna Aprovado/Recuperação/Reprovado
// - `gerarBoletim(aluno)`: retorna um objeto completo com nome, notas, média e situação

// ---

// ### Questão 44 - Nível 3 ⭐⭐⭐

// Crie uma função chamada `simularEmprestimo` que receba: valorEmprestimo, taxaJurosMensal e numeroParcelas. A função deve calcular o valor total a pagar com juros compostos e retornar um objeto detalhado com: valorOriginal, taxaJuros, parcelas, valorParcela, totalJuros e valorTotal.

// ---

// ### Questão 45 - Nível 3 ⭐⭐⭐

// Crie um mini sistema de e-commerce com:

// - Um array de objetos `produtos` (nome, preco, estoque)
// - Uma função `adicionarAoCarrinho` que verifica estoque
// - Uma função `calcularTotal` que soma os valores do carrinho
// - Uma função `aplicarCupom` que aplica desconto se o cupom for válido
// - Uma função `finalizarCompra` que atualiza o estoque e retorna o resumo

// ---

// ### Questão 46 - Nível 3 ⭐⭐⭐

// Crie uma função chamada `validarCPF` que receba uma string com 11 dígitos e faça validações básicas: todos os caracteres são números, não são todos iguais (ex: 11111111111). Retorne um objeto indicando se é potencialmente válido e quais validações passaram/falharam.

// ---

// ### Questão 47 - Nível 3 ⭐⭐⭐

// Crie um sistema de avaliação de filmes com:

// - Um array de objetos `filmes` (titulo, genero, notas[])
// - Uma função para adicionar avaliação
// - Uma função para calcular média de um filme
// - Uma função para listar filmes por gênero
// - Uma função para retornar o filme melhor avaliado

// ---

// ### Questão 48 - Nível 3 ⭐⭐⭐

// Crie uma função chamada `converterMoeda` que receba: valor, moedaOrigem e moedaDestino. Use um objeto com as taxas de conversão (BRL, USD, EUR) e implemente a conversão entre qualquer par de moedas. Trate casos de moedas inválidas.

// ---

// ### Questão 49 - Nível 3 ⭐⭐⭐

// Crie um sistema de gestão de tarefas com:

// - Um array de objetos `tarefas` (id, descricao, prioridade, concluida)
// - Função para adicionar tarefa
// - Função para marcar como concluída
// - Função para filtrar por prioridade ("alta", "media", "baixa")
// - Função para gerar relatório (total, concluídas, pendentes por prioridade)

// ---

// ### Questão 50 - Nível 3 ⭐⭐⭐

// Crie uma função chamada `analisarTexto` que receba uma string e retorne um objeto com: numeroCaracteres, numeroPalavras, numeroFrases (separadas por . ! ?), palavraMaisLonga e mediaCaracteresPorPalavra.

// ---

// ### Questão 51 - Nível 3 ⭐⭐⭐

// Crie um sistema de reserva de hotel com:

// - Um objeto `hotel` com quartos disponíveis (array de objetos com numero, tipo, precoDiaria, disponivel)
// - Função para verificar disponibilidade por tipo
// - Função para calcular valor da estadia (dias \* precoDiaria)
// - Função para aplicar desconto por temporada ("alta" +20%, "baixa" -15%)
// - Função para fazer reserva (atualiza disponibilidade e retorna confirmação)

// ---

// ### Questão 52 - Nível 3 ⭐⭐⭐

// Crie uma função chamada `calcularFrete` que receba: peso, dimensoes (objeto com altura, largura, comprimento), distancia e tipoEntrega ("normal", "expressa"). Calcule o frete considerando: peso volumétrico (AxLxC/5000), use o maior entre peso real e volumétrico, aplique taxa por km e adicional para entrega expressa.

// ---

// ### Questão 53 - Nível 3 ⭐⭐⭐

// Crie um sistema de quiz com:

// - Um array de objetos `perguntas` (pergunta, opcoes[], respostaCorreta)
// - Uma função para verificar resposta
// - Uma função para calcular pontuação final
// - Uma função para gerar feedback (excelente >= 80%, bom >= 60%, regular >= 40%, insuficiente < 40%)
// - Uma função para mostrar gabarito com respostas do usuário

// ---

// ### Questão 54 - Nível 3 ⭐⭐⭐

// Crie um sistema de controle de estoque com:

// - Um array de objetos `produtos` (codigo, nome, quantidade, precoCompra, precoVenda)
// - Função para adicionar produto
// - Função para registrar entrada (aumenta quantidade)
// - Função para registrar saída (diminui quantidade, verifica mínimo)
// - Função para calcular lucro potencial do estoque
// - Função para listar produtos abaixo do estoque mínimo

// ---

// ### Questão 55 - Nível 3 ⭐⭐⭐

// Crie uma função chamada `gerarSenhaSegura` que receba o tamanho desejado e opções (objeto com: incluirMaiusculas, incluirMinusculas, incluirNumeros, incluirSimbolos). A função deve gerar uma senha aleatória respeitando as opções e retornar a senha junto com uma avaliação de força ("fraca", "média", "forte").

// ---

// ### Questão 56 - Nível 3 ⭐⭐⭐

// Crie um sistema de agendamento com:

// - Um array de objetos `horarios` (data, hora, disponivel, cliente)
// - Função para verificar disponibilidade em uma data
// - Função para agendar (marca como indisponível e registra cliente)
// - Função para cancelar (libera horário)
// - Função para listar agenda do dia
// - Função para contar agendamentos por período

// ---

// ### Questão 57 - Nível 3 ⭐⭐⭐

// Crie uma função chamada `calcularInvestimento` que simule um investimento com:

// - Parâmetros: valorInicial, aporteMensal, taxaMensal, meses
// - Calcule mês a mês o rendimento (juros compostos + aportes)
// - Retorne: valorFinal, totalInvestido, totalRendimentos, rentabilidadePercentual
// - Inclua um array com a evolução mês a mês

// ---

// ### Questão 58 - Nível 3 ⭐⭐⭐

// Crie um sistema de cardápio de restaurante com:

// - Um array de objetos `itens` (nome, categoria, preco, disponivel, ingredientes[])
// - Função para filtrar por categoria
// - Função para buscar por ingrediente (para alergias)
// - Função para montar combo (entrada + prato + bebida com 10% desconto)
// - Função para calcular conta de mesa (array de pedidos + taxa de serviço opcional)

// ---

// ### Questão 59 - Nível 3 ⭐⭐⭐

// Crie uma função chamada `analisarDados` que receba um array de números e retorne um objeto completo com estatísticas: quantidade, soma, media, maior, menor, amplitude, mediana (valor do meio quando ordenado) e verificação se há números repetidos.

// ---

// ### Questão 60 - Nível 3 ⭐⭐⭐

// Crie um sistema completo de biblioteca com:

// - Arrays para `livros` (titulo, autor, isbn, disponivel) e `emprestimos` (livroIsbn, usuario, dataEmprestimo, dataDevolucao)
// - Função para emprestar livro (verifica disponibilidade)
// - Função para devolver livro (calcula multa se atrasado - R$1/dia)
// - Função para buscar livros por autor ou título
// - Função para listar empréstimos de um usuário
// - Função para gerar relatório geral (livros disponíveis, emprestados, usuários com pendência)

// ---

// ## 🏆 Desafio Bônus

// Após completar todas as questões, tente criar um projeto que combine pelo menos 5 conceitos diferentes aprendidos. Pode ser um mini sistema de sua escolha (loja, escola, banco, etc.) que demonstre seu domínio em variáveis, tipos de dados, operadores, funções e estruturas de controle.

// ---

// **Bons estudos e boas férias! 🎄🎉**

// _Qualquer dúvida, anote para discutirmos na volta às aulas._
