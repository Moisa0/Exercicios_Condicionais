const alturaEmCm = 200;

if(alturaEmCm <= 180) {
    console.log("REPROVADO");
} else if((180 < alturaEmCm) && (alturaEmCm <=185)){
    console.log("LÍBERO");
} else if((186 <= alturaEmCm) && (alturaEmCm <=195)){
    console.log("PONTEIRO");
} else if((196 <= alturaEmCm) && (alturaEmCm <=205)){
    console.log("OPOSTO");
} else{
    console.log("CENTRAL");
}