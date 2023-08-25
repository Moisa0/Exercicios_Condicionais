const diaDaSemana = 3;
const extensoDia = ["0","segunda feira", "terça feira", "quarta feira", "quinta feira", "sexta feira", "sabado", "domingo"];

if(diaDaSemana<=7 && diaDaSemana>=1){
    console.log(extensoDia[diaDaSemana]);
}else{
    console.log("O dia da semana informado não é válido.")};