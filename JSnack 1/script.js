
/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

const btnStart = document.querySelector('.btn-start');
const outputSection = document.querySelector('.section-output')

let firstNumber;
let secondNumber;
let output;

btnStart.addEventListener('click', function(){

  while(isNaN(firstNumber)){
    firstNumber = parseInt(prompt('inserisci il primo numero').trim());
    document.querySelector('.first-n').innerHTML = firstNumber;

    if(isNaN(firstNumber)){
      alert('inserisci un numero, non lettere!');
    }
  }

  while(isNaN(secondNumber)){
    
    secondNumber = parseInt(prompt('inserisci il secondo numero').trim());
    document.querySelector('.second-n').innerHTML = secondNumber;

    if(isNaN(secondNumber)){
      alert('inserisci un numero, non lettere!');
    }
  }

  if(firstNumber> secondNumber){
    output = firstNumber;
    
  }else if(firstNumber< secondNumber){
    output = secondNumber;
    
  }else{
    output = 'i numeri sono uguali nessuno dei due è maggiore';   
  }

  outputSection.classList.add('block')

  document.getElementById('output-result').innerHTML = output + '!';
  
});



















