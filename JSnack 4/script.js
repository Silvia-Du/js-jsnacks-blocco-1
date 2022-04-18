/*
 JSnack 4
 In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

const guestList = ['sir-Agostino', 'sir-Mihai', 'sir-Riccardo', 'sir-Manuel', 'sir-Bruno', 'sir-Simone', 'sir-Giovanni'];

let checkname = false;
const buttonCheck = document.querySelector('.button.check');
const buttonAgain = document.querySelector('button.again');
const outputCheck = document.getElementById('output');
const backGround = document.querySelector('body');

//chiedo il nome all'utente
buttonCheck.addEventListener('click', function(){
  const nameUser = document.getElementById('nome').value;

  for(let i = 0; i< guestList.length; i++){
    console.log(guestList[i]);
  
    if(nameUser === guestList[i]){
      checkname = true;
      console.log('nome presente');
    }
  }
  
  //verifica delle credenziali di accesso
  if(checkname){
    outputCheck.innerHTML = 'Benvenuto alla festa!';
    backGround.classList.add('bg-yes');
    outputCheck.classList.remove('again');

  }else{
    outputCheck.innerHTML = 'Lei non è invitato, se ne vada!';
    backGround.classList.add('bg-no');
    buttonAgain.classList.add('show');
  }

})

//ripristina valori iniziali se l'utente vuole riprovare ad entrare alla festa;
buttonAgain.addEventListener('click', function(){

  buttonAgain.classList.remove('show');
  outputCheck.classList.add('again');
  document.getElementById('nome').value = "";
  backGround.classList.remove('bg-no');
})

//ho usato un'input per raccogliere i dati dell'utente, per provare anche questo metodo.