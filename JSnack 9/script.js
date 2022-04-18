/*
 JSnack 9
 Calcola la somma e la media dei primi 10 numeri.
*/

let counter = 0;
let numberSum = 0;
let averageNumber;
const limit = 10;

const numberList = [];

for(let i = 0; i< limit; i++){
  console.log('questa è la i',i);
  
  counter += 1;
  numberList.push(counter);
  console.log(numberList);
  console.log('questo è il singolo numero', counter);

  numberSum = numberSum + counter;
}

averageNumber = numberSum / numberList.length;


document.getElementById('output-sum').innerHTML = 'Questa è la somma : '+ numberSum + ' ;';

document.getElementById('output-average').innerHTML = 'Questa è la media  : '+ averageNumber + ' ;';






