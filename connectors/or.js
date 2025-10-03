// Exemplo do conector OR (||)
//atribuicao
//sempre colocar ou entre parenteses
let sexo='M'
let idade=16
let possuiTituloEleitor= true
//OU M
// Este conector retorna 'true' se PELO MENOS UMA das condições forem verdadeiras.
//VALIDAÇÃO
if((sexo=='H' || sexo =='M'&& idade>=16) && possuiTituloEleitor==true){
    console.log('Você pode votar')
}else{
    console.log('Você não pode votar')
}