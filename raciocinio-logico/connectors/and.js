// Exemplo do conector AND (&&)

// Este conector retorna 'true' apenas se TODAS as condições forem verdadeiras.

// Se eu tenho 18 anos e tenho CNH eu posso dirigir.
// ---------------------------------// 
// ----- CONTEXTO DE ATRIBUIÇÃO ----//
// ---------------------------------// 
let idade = 18
let possuoCNH = false
let nacionalidade = 'Brasileira'

// ---------------------------------// 
// ----- CONTEXTO DE VALIDACAO -----//
// ---------------------------------// 
if (idade >= 18 && possuoCNH == true && nacionalidade === 'Brasileira') {
    console.log('EU POSSO DIRIGIR')
} else {
    console.log('EU NÃO POSSO DIRIGIR')
}
// ----------------------------- //

