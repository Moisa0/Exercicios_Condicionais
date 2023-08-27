//valor do produto comprado.
const valorDoProduto = 1000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 600;

if(valorDoProduto>valorPago){
    console.log(`Restam ${quantidadeDoParcelamento-(valorPago/(valorDoProduto/quantidadeDoParcelamento))} parcelas de R$${valorDoProduto/quantidadeDoParcelamento}`)
}