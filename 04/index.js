const ladoA = 2;
const ladoB = 2;

if( (ladoA === ladoB) && ladoA === 0 ||
    (ladoA === ladoB) && ladoA === 1 ||
    (ladoA === ladoB) && ladoA === 2 ||
    (ladoA === ladoB) && ladoA === 3 ||
    (ladoA === ladoB) && ladoA === 4 ||
    (ladoA === ladoB) && ladoA === 5 ||
    (ladoA === ladoB) && ladoA === 6
){
    console.log(`bucha de ${ladoB}`)
} else{console.log("NÃO É BUCHA")};

//chato que parece ser muito redundante essas repetições

if( (ladoA === ladoB) && ladoA === 0 ){
    console.log("bucha de branca");
} else if (((ladoA === ladoB) && ladoA === 1)){
    console.log("bucha de branca");
}else if (((ladoA === ladoB) && ladoA === 2)){
    console.log("bucha de duque");
}else if (((ladoA === ladoB) && ladoA === 3)){
    console.log("bucha de terno");
}else if (((ladoA === ladoB) && ladoA === 4)){
    console.log("bucha de quadra");
}else if (((ladoA === ladoB) && ladoA === 5)){
    console.log("bucha de quina");
}else if (((ladoA === ladoB) && ladoA === 6)){
    console.log("bucha de sena");
}else{console.log("NÃO É BUCHA")};