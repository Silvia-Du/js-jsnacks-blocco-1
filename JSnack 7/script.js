/*
 JSnack 7
 Stampa le potenze di 2 fino a 1000.
 questo snack cela un trabocchetto:  1000 non è una potenza di 2
 perciò per fermarsi prima di 1000 bisogna stampare la potenza prima di incrementarla
 perché altrimenti il controllo viene fatto dopo e si sfora
*/


const baseNum = 2;
const limit = 1000;
let potenZa = 0;
let resultNum;
const listaPow = [];


let stopCheck = false;

while(!stopCheck){
  resultNum = Math.pow(baseNum, potenZa);

  if(resultNum < limit){
    console.log(resultNum);
    potenZa ++;
    listaPow.push(resultNum);
    document.getElementById('output').innerHTML += `> ${resultNum} <`;
  }else{
    stopCheck = true;
  }
};

console.log(listaPow);






  

  

