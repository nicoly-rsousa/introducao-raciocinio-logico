// Exemplo do conector OR (||)

// Este conector retorna 'true' se PELO MENOS UMA das condições forem verdadeiras.

// Eu posso votar caso :
// eu seja Homem ou Mulher
// tenha mais de 16 anos
// tenha titulo de eleitor
// ---------------------------------//
// ----- CONTEXTO DE ATRIBUIÇÃO ----//
// ---------------------------------//
let sexo = 'H'; // ou 'M'
let idade = 16;
let possuiTituloEleitor = true;
// ---------------------------------//
// ----- CONTEXTO DE VALIDACAO -----//
// ---------------------------------// 
if ((sexo == 'H' || sexo == 'M') && idade >= 16 && possuiTituloEleitor == true) {
    console.log('Você pode votar')
} else {
    console.log('Você não pode votar')
}