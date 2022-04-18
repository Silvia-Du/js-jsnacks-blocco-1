/*
 JSnack 6
 Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
*/

let userNumber;
let cubeNum;
let growingNumber = 0;
let checknumber = false;
const numberList = document.querySelector('.number-list');

while(!checknumber){
  //verifica che sia un numero
  userNumber = parseInt(prompt('inserisci il numero su cui vuoi calcolare il cubo'));

  if(isNaN(userNumber)){
  alert('inserisci un numero non lettere!');
  }else{
  checknumber= true;
  }
}

while(userNumber> growingNumber){
  //calcolo dei cubi
  growingNumber ++;
  cubeNum = Math.pow(growingNumber,3);
  

  //creo lista in cui stampare i numeri e i loro cubi.
  const elementList = document.createElement('li');
  elementList.className =('list-style');
  numberList.append(elementList);
  elementList.append('Numero :  ',growingNumber,'  il suo cubo è :  ',cubeNum);

  if(userNumber===growingNumber){
    document.getElementById('output').innerHTML = `Questo è il numero da te inserito:<br> ${userNumber}; questo è il suo cubo ${cubeNum}.`;
  }
  
}

