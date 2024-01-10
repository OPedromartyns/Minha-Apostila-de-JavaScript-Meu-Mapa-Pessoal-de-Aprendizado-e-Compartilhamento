var num1 = prompt ("Digite um numero para somar")
var num2 = prompt ("Digite outro numero")
/* Estes dois comandos prompt pedem ao usuário para inserir dois números. Os valores inseridos são armazenados nas variáveis num1 e num2 como strings.  */

num1 = parseInt(num1);
num2 = parseInt(num2);
 /*  Aqui, o parseInt converte as strings armazenadas em num1 e num2 em números inteiros. Isso é importante para garantir que a adição seja realizada corretamente, já que os valores digitados pelo usuário são originalmente interpretados como strings pelo prompt. */
var resultado = num1 + num2;
/*  A soma dos números é realizada e o resultado é armazenado na variável resultado.   */
alert(`A soma de ${num1} e ${num2} e ${resultado}`)
/* Finalmente, um alert é exibido com uma mensagem que inclui os números inseridos pelo usuário e o resultado da soma.     */