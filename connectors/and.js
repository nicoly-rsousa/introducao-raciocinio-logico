// Exemplo do conector AND


// Este conector retorna 'true' apenas se TODAS as condições forem verdadeiras.
//Se eu tenho 18 anos e tenho CNH eu posso dirigir
//let so existe no bloco
let idade=18
let possuoCNH=true
let nacionalidade='Brasileira'

if(idade>=18 && possuoCNH==true && nacionalidade==='Brasileira'){
    console.log('EU POSSO DIRIGIR') 
} else {
  console.log('EU NÃO POSSO DIRIGIR')
}