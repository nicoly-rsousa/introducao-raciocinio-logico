// Exemplo do conector NOT (!)
//ALT SHIFT F
//POSSO DIRIGIR CASO MAIOR DE IDADE, POSSUO HABILITAÇÃO E SER BRASILEIRO
// Este conector INVERTE o valor lógico da condição.
// Se a condição é verdadeira, o '!' a torna falsa, e vice-versa.
let idade = 18
let possuiCNH = true
let nacionalidade = 'Brasileira'
let minhaValidacao = idade >= 18 && possuiCNH == true && nacionalidade == 'Brasileira'
console.log('Valor real da minha validação', minhaValidacao)
console.log('')
//0 false
//1 verdadeiro
if (!(idade >= 18 && possuiCNH == true && nacionalidade == 'Brasileira')) {
    console.log('Você pode dirigir!!')

} else {
    console.log('Você não pode dirigir!!!')
}

//let possuiinformacao = possuiCNH ? 'Sim' : 'Não'
//console.log(possuiinformacao)

let possuiinformacao2 = possuiCNH ? 'Possui CNH' : nacionalidade === 'Brasileiro' ? 'Nacionalidade' ; 'Nacionalidade' : 'Outros'

console.log(possuiinformacao2)