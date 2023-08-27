const primeiroNome = "Mario";
const sobrenome = "bros";
const apelido = "marinho";

if(apelido){
    console.log(apelido);
}else if(!apelido){
    if(sobrenome){
        console.log(`${primeiroNome} ${sobrenome}`);
    } else{
        console.log(primeiroNome);
    }
}

