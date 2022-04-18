/*
 JSnack 2
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.
*/

//const firstWord = 'ciao'; //prompt
//const secondWord = 'heilaa'; //prompt



let firstWord;
let secondWord;
let checkLongWord = false;
let checkLongWord2 = false;


const buttonStart = document.querySelector('.button-div');
const outputSpace = document.querySelector('.box-output');

buttonStart.addEventListener('click',function(){

  while(!checkLongWord){
  
    firstWord = prompt('inserisci la prima parola che ti viene in mente');

    if(!isNaN(firstWord)){
      alert('inserisci lettere non numeri')
    }else if(firstWord.length< 2){
      alert('la parole deve avere almeno due caratteri!')
    }else{
      checkLongWord = true;
    }  
  }

  while (!checkLongWord2){
  
    secondWord = prompt('inserisci un\'altra parola') ;
        
    if(!isNaN(secondWord)){
      alert('inserisci lettere non numeri');
    }else if(secondWord.length< 2){
      alert('la parole deve avere almeno due caratteri!')
    }else{
      checkLongWord2 = true;
    }
  } 

  let output;
  outputSpace.classList.add('block');

  if(firstWord.length > secondWord.length){
    console.log( 'le parole in ordine di lunghezza sono:',secondWord,firstWord);
    output = `le parole in ordine di lunghezza sono:${secondWord},${firstWord}`;
  }else if(firstWord.length < secondWord.length){
    console.log('le parole in ordine di lunghezza sono:',firstWord, secondWord);
    output = `le parole in ordine di lunghezza sono: ${firstWord}, ${secondWord}`;
  }else{
    console.log('le due parole sono uguali');
    output = `le due parole sono uguali`;
  }
  console.log(firstWord);
  document.getElementById('output-word').innerHTML = output;
  
})


 

