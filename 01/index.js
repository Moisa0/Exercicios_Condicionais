const jogada1 = "pedra";
const jogada2 = "tesoura";

if (jogada1 === jogada2){
    console.log("Jogo empatado!");
}else if(
    (jogada1 === "pedra" && jogada2 === "tesoura") ||
    (jogada1 === "papel" && jogada2 === "pedra") ||
    (jogada1 === "tesoura" && jogada2 === "papel")
){
    console.log(`${jogada1} venceu!`);
}else {
    console.log(`${jogada2} venceu!`);
}