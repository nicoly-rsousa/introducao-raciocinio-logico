// Exemplo do conector NOT (!)

// Este conector INVERTE o valor lógico da condição.
// Se a condição é verdadeira, o '!' a torna falsa, e vice-versa.

// Eu posso dirigir caso :
// Maior de idade
// Possuir habilitação
// Ser Brasileiro 
// ---------------------------------// 
// ----- CONTEXTO DE ATRIBUIÇÃO ----//
// ---------------------------------// 
let idade = 18
let possuiCNH = false
let nacionalidade = 'Brasileira'
let minhaValidacao = idade >= 18 && possuiCNH == true && nacionalidade == 'Brasileiro'
// console.log('Valor real da minha validação: ', minhaValidacao)
// console.log('Valor negado(!) da minha validação: ', !minhaValidacao)
// console.log('Valor negado(!)x2 da minha validação: ', !!minhaValidacao)
let possuiInformacao = possuiCNH ? 'Possui CNH' : nacionalidade === 'Brasileiro' ? 'Nacionalidade' : 'Outros'
console.log(possuiInformacao)

// Imagine o contexto de pegar as informações do usuário no banco de dados
// através de um endpoint na api /users/22
let respostaDaApi = null // nao existe o codigo 22
let users = respostaDaApi ?? 'Dados do Usuário {}'
console.log('users', users)

// ---------------------------------//
// ----- CONTEXTO DE VALIDACAO -----//
// ---------------------------------//
// if (!(idade >= 18 && possuiCNH == true && nacionalidade == 'Brasileiro')) {
//     console.log('Você não pode dirigir !!!')
// } else {
//     console.log('Você pode dirigir !!!')
// }

// ----------------------------- //

