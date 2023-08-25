//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "debito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if(tipoDePagamento === "credito"){
    console.log(`o valor a ser pago: ${valorDoProduto -valorDoProduto*0.05}`)
}else if(tipoDePagamento === "cheque"){
    console.log(`o valor a ser pago: ${valorDoProduto -valorDoProduto*0.03}`)
}else{console.log(`o valor a ser pago: ${valorDoProduto -valorDoProduto*0.1}`)}