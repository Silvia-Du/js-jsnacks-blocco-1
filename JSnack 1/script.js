
/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

const btnStart = document.querySelector('.btn-start');
const outputSection = document.querySelector('.section-output')

let firstNumber;
let secondNumber;
let higestNumber;

let wantNumber = false;
let wantNumber2 = false;


btnStart.addEventListener('click', function(){

  while(!wantNumber){
    firstNumber = parseInt(prompt('inserisci il primo numero'));
    document.querySelector('.first-n').innerHTML = firstNumber;

    if(isNaN(firstNumber)){
      alert('inserisci un numero, non lettere!');
    }else{
      wantNumber = true;
    }

  }

  while(!wantNumber2){
    
    secondNumber = parseInt(prompt('inserisci il secondo numero'));
    document.querySelector('.second-n').innerHTML = secondNumber;

    if(isNaN(secondNumber)){
      alert('inserisci un numero, non lettere!');
    }else{
      wantNumber2 = true;
    }

  }

  if(firstNumber> secondNumber){
    higestNumber = firstNumber;
    
  }else if(firstNumber< secondNumber){
    higestNumber = secondNumber;
    

  }else{
    higestNumber = 'i numeri sono uguali nessuno dei due è maggiore';   
  }

  outputSection.classList.add('block')

  document.getElementById('output-result').innerHTML = higestNumber + '!';
  
});



















