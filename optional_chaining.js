//ex1 Mostre a cidade usando Optional Chaining.
const aluno = {
  nome: "Carlos",
  endereco: {
    cidade: "São Paulo"
  }
};

console.log(aluno.endereco?.cidade);

//ex2 Tente acessar a rua sem causar erro caso endereco não exista.
const usuario = {
  nome: "Ana"
};

console.log(usuario.endereco?.rua);

//3 Qual será a saída do código abaixo?
const produto = {
  nome: "Notebook"
};

console.log(produto.fabricante?.nome);
//resposta: undefined

//4 Corrija o código para que ele não gere erro caso endereco não exista.
const cliente = {
  nome: "João"
};

console.log(cliente.endereco?.cidade);

//5  Use ?. para acessar o e-mail do diretor.
const escola = {
  diretor: {
    contato: {
      email: "diretor@escola.com"
    }
  }
};
console.log(escola.diretor?.contato?.email)
