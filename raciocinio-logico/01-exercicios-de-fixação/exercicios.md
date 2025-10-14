1. Validação de Login: O usuário pode logar se o e-mail não estiver vazio E a senha tiver no mínimo 8 caracteres.

email = 'teste@email.com', senha = '12345678'

Resultado esperado: true ou false?
true

2. Idade para Votação: O usuário pode votar se ele tiver 16 anos OU mais.

idade = 15

Resultado esperado: true ou false?
false

3. Compra Mínima: A compra pode ser finalizada se o valor total for maior que R$ 50,00 OU a forma de pagamento for cartão de crédito.

valorTotal = 45, formaPagamento = 'cartão'

Resultado esperado: true ou false?
true

4. Desconto de Membro: O usuário tem direito a um desconto se ele for um membro e o valor da compra for maior que R$ 100,00.

isMembro = true, valorCompra = 95

Resultado esperado: true ou false?
false

5. Permissão de Administrador: O usuário pode excluir um item se ele for um administrador ou o proprietário do item.

isAdministrador = false, isProprietario = false

Resultado esperado: true ou false?
false

6. Disponibilidade de Produto: Um produto pode ser adicionado ao carrinho se o estoque for maior que 0 e o produto não estiver em promoção.

estoque = 10, emPromocao = true

Resultado esperado: true ou false?
false

7. Validação de Formulário: O formulário é válido se o campo "nome" não estiver vazio e o campo "idade" for um número.

nome = 'Maria', idade = 25

Resultado esperado: true ou false?
true

8. Agendamento de Evento: Um evento pode ser agendado se a data for no futuro e o local tiver capacidade suficiente para 50 pessoas.

isDataFutura = true, capacidadeLocal = 45

Resultado esperado: true ou false?
false

9. Validação de Senha: A senha é considerada forte se tiver mais de 8 caracteres e incluir um símbolo ou um número.

senha = 'senha123', temSimbolo = false, temNumero = true

Resultado esperado: true ou false?
false

10. Acesso à Página: O usuário tem acesso a uma página restrita se ele for um assinante OU um convidado VIP.

isAssinante = false, isConvidadoVIP = true

Resultado esperado: true ou false?
true

11. Validação de Data: A data de entrega é válida se não for um feriado E não for um sábado ou domingo.

isFeriado = false, isFimDeSemana = true

Resultado esperado: true ou false?
false

12. Cálculo de Desconto: Se o valor da compra for maior ou igual a R$ 200,00, o desconto é de 10%. Qual o valor final para uma compra de R$ 250,00?

Resultado esperado: o valor numérico.
250-(250*0.10) ----> 250-25 = 225

13. Vaga de Estacionamento: Uma vaga está livre se não houver um carro estacionado.

carroNaVaga = true

Resultado esperado: true ou false?
false

14. Disponibilidade de Serviço: O serviço está online se o servidor principal estiver ativo E não houver manutenção programada.

servidorAtivo = true, manutencaoProgramada = true

Resultado esperado: true ou false?
false

15. Validação de CEP: O CEP é válido se tiver 8 dígitos numéricos e não for nulo.

cep = '12345678', cepNaoNulo = true

Resultado esperado: true ou false?
true

16. Validação de E-mail: O e-mail é válido se incluir um @ e um ., e não começar com @ ou ..

email = 'exemplo@email.com'

Resultado esperado: true ou false?
true

17. Status do Pedido: Um pedido está pronto para envio se ele foi pago E o estoque de todos os itens é suficiente.

pedidoPago = true, estoqueSuficiente = false

Resultado esperado: true ou false?
false

18. Acesso a Conteúdo: O usuário pode ver o conteúdo premium se ele tiver uma assinatura ativa ou for um membro de teste gratuito.

assinaturaAtiva = false, membroTesteGratuito = false

Resultado esperado: true ou false?
false

19. Tempo de Resposta do Servidor: A requisição é considerada rápida se o tempo de resposta for menor que 100ms OU igual a 100ms.

tempoResposta = 100

Resultado esperado: true ou false?
true

20. Validação de Número de Telefone: O número de telefone é válido se tiver 9 dígitos e for um número inteiro.

numero = 987654321

Resultado esperado: true ou false?
true

21. Cálculo de Frete: Se o valor da compra for maior ou igual a R$ 50,00, o frete é grátis (R$ 0,00). Caso contrário, o frete é R$ 15,00. Qual o valor do frete para uma compra de R$ 49,99?

Resultado esperado: o valor numérico.

49,99<50 ----> 15,00

22. Validação de Nome de Usuário: O nome de usuário é válido se tiver entre 5 e 20 caracteres (inclusive).

nome = 'joao'

Resultado esperado: true ou false?
false

23. Notificação de Pedido: O cliente recebe uma notificação se o pedido foi enviado ou cancelado.

pedidoEnviado = false, pedidoCancelado = true

Resultado esperado: true ou false?
true

24. Cálculo de Bônus: O funcionário recebe bônus se ele atingiu a meta de vendas E trabalhou na empresa por mais de 2 anos.

atingiuMeta = true, anosNaEmpresa = 3

Resultado esperado: true ou false?
true

25. Validação de Código de Cupom: O cupom é válido se a data de validade for no futuro OU o código for FRETEGRATIS.

dataValidadeFutura = false, codigoCupom = 'DESCONTO10'

Resultado esperado: true ou false?
false

26. Condição de Vitória no Jogo: O jogador venceu se sua pontuação for maior que 100 e ele não tiver cometido faltas.

pontuacao = 110, teveFaltas = false

Resultado esperado: true ou false?
true

27. Validação de Quantidade: A quantidade de um item no carrinho deve ser maior que 0 e menor ou igual ao estoque disponível.

quantidade = 5, estoque = 4

Resultado esperado: true ou false?
false

28. Acesso a Recursos: Um usuário pode acessar o recurso X se ele for do grupo A e não estiver banido, ou se ele for do grupo B.

grupo = 'B', isBanido = true

Resultado esperado: true ou false?
true

29. Validação de Campo Obrigatório: O campo telefone é obrigatório se o campo contatoEmail estiver vazio.

telefonePreenchido = false, contatoEmailPreenchido = false

Resultado esperado: true ou false?
false

30. Validação de Transação: Uma transação é segura se o valor for menor que R$ 1000,00 e a origem for um IP conhecido, OU se o usuário tiver autenticação de dois fatores habilitada.

valor = 1200, ipConhecido = false, autenticacaoDoisFatores = true

Resultado esperado: true ou false?
true