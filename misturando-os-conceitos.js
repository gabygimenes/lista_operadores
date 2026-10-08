//ex16 Complete os espaços para que o resultado seja Maria.
const usuario = {
  perfil: {
    nome: "Maria"
  }
};

const nome = usuario.perfil?.nome ?? "Sem nome";
console.log(nome);

//ex17 Faça o código mostrar "Cidade não informada" sem gerar erro.
const usuario1 = {};
    cidade: undefined;

const nomeExibido = usuario1.cidade ?? 'Cidade não informada' ;
console.log(nomeExibido);

//ex18 Sem executar, diga as duas saídas e explique a diferença.
const aluno = {
  nota: 0
};

console.log(aluno.nota || 10);
console.log(aluno.nota ?? 10);

//resposta: Uma saída será 10 e a outra 0, já que em um utilizamos o valor da direita e o outro usamos o valor da nota.


//ex19 Encontre o problema e reescreva a linha de cidade corretamente.
const usuario2 = {};
    endereco: undefined


const cidade = usuario2.endereco ?? "Não informada";
console.log(cidade);

//ex20 
const pedido = {
  cliente: {
    nome: "Pedro"
  }
};
const telefone = pedido.telefone ?? 'Telefone não informado';
console.log(telefone);

//Desafio final
const usuario3 = {
  nome: "",
  idade: 0,
  endereco: null
};

console.log(usuario3.nome || "Visitante");
console.log(usuario3.nome ?? "Visitante");
console.log(usuario3.idade || 18);
console.log(usuario3.idade ?? 18);
console.log(usuario3.endereco?.cidade);
console.log(usuario3.endereco?.cidade ?? "Sem cidade");

// resposta: a primeira será visitante, a 2 não será nada, a 3 será 18, a 4 "0", a 5 undefined, a 6 "Sem cidade"

//Fechamento
// resultado: O operador ||  retorna o valor da direita se o valor da esquerda for falso (falsy, como 0, "", false, null ou undefined), enquanto o operador ??  só retorna o valor da direita se o valor da esquerda for nulo ou indefinido (null ou undefined).

