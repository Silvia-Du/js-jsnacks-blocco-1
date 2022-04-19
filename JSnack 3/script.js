/*
 JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti.
 Esegui questo programma in due versioni, con il for e con il while (facoltativo)
*/


//CICLO FOR


let userNumber;
const numQuestion = 5;
const insertNumList =[];
let numberSum = 0;
let numberSumW = 0;

const buttonFor = document.querySelector('.button-for');
const buttonWhile = document.querySelector('.button-while');

//FOR 
buttonFor.addEventListener('click', function(){
  alert('ti chiederò di inserire 5 numeri');
  for(let i=0; i< numQuestion; i++){
    userNumber = parseInt(prompt('inserisci un numero casuale'));
  
  
    if(insertNumList.length< numQuestion){
      insertNumList.push(userNumber);
      numberSum = numberSum +userNumber;
      console.log('lista dei numeri inseriti',insertNumList);
    }
  }

  document.getElementById('output-for').innerHTML = `La somma dei numeri inseriti è: ${numberSum} !`;

  document.getElementById('user-numbers').innerHTML = 'I tuoi numeri: '+ insertNumList + ' ;' ;

})


//WHILE
buttonWhile.addEventListener('click', function(){

  let i = 0;
  
  alert('ti chiederò di inserire 5 numeri');

  while(numQuestion > i){
    userNumber = parseInt(prompt('inserisci un numero casuale'));
    numberSumW = numberSumW +userNumber;
    console.log('la somma dei numeri inseriti è:', numberSum);
    i++
  }

  console.log('la somma dei numeri inseriti è', numberSumW);

  document.getElementById('output-while').innerHTML = `La somma dei numeri inseriti è: ${numberSumW} !`;

})




//WHILE
/*


*/
