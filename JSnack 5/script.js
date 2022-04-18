/*
 JSnack 5
 Crea un array vuoto.
 Chiedi per 6 volte all’utente di inserire un numero,
 se è dispari inseriscilo nell’array
*/
let userNumber;
const oddNumbers = [];
const limitQuestion = 6;
let chekNumber = false;
const btnStart = document.querySelector('.button-start');


btnStart.addEventListener('click', function(){

  for(let i = 0; i< limitQuestion; i++){
    
    while(!chekNumber){
      userNumber = parseInt(prompt('inserisci un numero a tua scelta')
      );
      if(isNaN(userNumber)){
        alert('inserisci un numero non lettere!');
      }else{
        chekNumber = true;
      }
    }
    
    //inserimento dei numeri corretti nell'array
    if(userNumber % 2 !== 0){
      
      oddNumbers.push(userNumber);
      console.log(oddNumbers);
  
    }else{
      console.log(userNumber,'è pari non va aggiunto');
      document.getElementById('output').innerHTML = `Ecco i numeri dispari che hai inserito : ${oddNumbers} ;`;
    }

    chekNumber = false;
  }

})
