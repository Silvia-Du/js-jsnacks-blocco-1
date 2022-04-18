/*
 JSnack 8
 Chiedi un numero di 4 cifre all’utente
 e calcola la somma di tutte le cifre che compongono il numero.
 in questo caso possiamo sfruttare a nostro vantaggio il fatto che
 la funzione prompt restituisca una stringa anche se si è digitato un numero
 e recuperare una cifra alla volta usanto il ciclo for per scorrere la stringa numerica
*/

let isANumber;
let userNumber;
const numberBox = [];
let numberSum = 0;
let checkNumber = false;

//Verifica dei valori inseriti
while(!checkNumber){
  userNumber = prompt('Inserisci qui un numero di 4 cifre');

  if(isNaN(userNumber)){
    alert('inserisci un numero non lettere!');
  }else if(userNumber.length != 4){
    alert('inserisci un numero di 4 cifre...QUATTROOO!!')
  }else{
    checkNumber = true;
  }
}

//calcolo della somma
for(let i = 0; i< userNumber.length; i++){

  console.log('il singolo numero',userNumber[i]);
  isANumber = parseInt(userNumber[i]);
  console.log('questo ora è un numero',isANumber);

  numberSum += isANumber;
}

document.getElementById('output').innerHTML = `La somma dei valori numerici inseriti è:  ${numberSum}`;


