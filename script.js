// Prática Guiada I
const estudante = {
  nome: 'Amanda',
  sobrenome: 'Polari',
  numeroDeMatricula: 432423423,
  notasDoSemestre: [7.5, 5, 15, 8],
};

// Prática Guiada II
estudante.modulo = 3;

const nomeDoEstudante = estudante.nome;
// console.log(nomeDoEstudante);

const segundaNotaDoSemestre = estudante.notasDoSemestre[1];
// console.log(segundaNotaDoSemestre);

const moduloAtual = estudante.modulo;
// console.log(moduloAtual);

// Prática Guiada III
// const copiaEstudante = {
//     ...estudante,
// }
// copiaEstudante.nome = 'Astrodev'
// copiaEstudante.notasDoSemestre.push(9);
// copiaEstudante.modulo = 4;
// console.log(copiaEstudante)

// Copiando e já aletrando as propriedades
const copiaEstudante = {
  ...estudante,
  nome: 'Astrodev',
  modulo: 4,
  notasDoSemestre: [...estudante.notasDoSemestre, 9],
};
// console.log(copiaEstudante)

const estudantesLabenu = [];

estudantesLabenu.push(estudante, copiaEstudante);
// console.log('Array de estudantes da Labenu', estudantesLabenu)

// EXERCÍCIO DE FIXAÇÃO

// 1)
const carrinho = {
  nome: 'Amanda',
  formaDePagamento: 'Crédito',
  endereco: 'SP',
};

// 2)
carrinho.compras = [
  {
    nome: 'arroz',
    preco: 6,
    quantidade: 2,
  },
  {
    nome: 'macarrao',
    preco: 3,
    quantidade: 1
  }
];

// 3)
const arrayDeProdutos = carrinho.compras.length;
// const quantidadeDeCompras = arrayDeProdutos.length;

console.log('A quantidade de compras do carrinho é: ', arrayDeProdutos )

// 4)
const carrinhoPresente = {
    ...carrinho,
    nome: 'Fátima',
    formaDePagamento: 'Cartão Presente'
}

// 5) 
console.log('Carrinho original', carrinho);
console.log('Carrinho copiado', carrinhoPresente);
