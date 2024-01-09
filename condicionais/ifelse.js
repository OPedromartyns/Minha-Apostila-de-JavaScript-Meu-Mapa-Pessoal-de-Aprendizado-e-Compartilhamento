var idade = prompt("Qual é a sua idade?");

if (idade < 18) {
alert("Você é menor de idade.");
/*: Verifica se a idade inserida é menor que 18. Se for, exibe um alerta com a mensagem "Você é menor de idade.*/
}else if (idade >= 18 && idade <60 ){
alert ("voce é adulto");
/* Se a idade não for menor que 18 (pois o primeiro if já foi testado), esta condição verifica se a idade é maior ou igual a 18 e menor que 60. Se for, exibe um alerta com a mensagem "Você é adulto*/
}else {
alert( "voce é idoso")
}
/*Se nenhuma das condições anteriores for verdadeira (ou seja, se a idade não for menor que 18 e nem maior ou igual a 18 e menor que 60), esta parte é executada, mostrando um alerta com a mensagem "Você é idoso".*/
