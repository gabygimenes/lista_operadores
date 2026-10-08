//ex6  Complete o código para mostrar "Não informado" quando nome for null ou undefined.
const nome = null;

console.log(nome?? 'Não Informado');

//ex7 Qual será o resultado?
const idade = null;

console.log(idade ?? 18);
//resultado: 18(letra c)

//ex8 Qual será a saída? Atenção ao valor 0.
const estoque = 0;

console.log(estoque ?? 10);
//resultado: 0

//ex9  Explique por que os dois resultados são diferentes.
const quantidade = 0;

console.log(quantidade || 10);
console.log(quantidade ?? 10);

//Porque um deles uiliza o Nullish e o outro o short-circuit, fazendo resultados diferentes.

//ex10
const usuario = {
  apelido: undefined
};

const nomeExibido = usuario.apelido ?? "Visitante";
console.log(nomeExibido);


