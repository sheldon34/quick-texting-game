window.addEventListener('load',init)

//globals
   

//Game level
const levels={
    easy:5,
    medium:3,
    hard:2,
}
// to change level
const currentlevel=levels.easy 
let time = currentlevel+1;
let score=0;
let isPlaying;
// dom elements
const wordInput=document.querySelector('#word-input');
const currentword=document.querySelector('.display');
const scoreDisplay=document.querySelector('#score');
const timeDisplay=document.querySelector('.time');
const message=document.querySelector('#message');
const seconds=document.querySelector('.second');
const words=[
  
    'hat','juice','Venom','Strong','Audience','Conversations','SHELDON',
    'random','javascript','Joy','Power','Runaway','lucky',
    'HUMBLE','speed','profolio','programming','algorithm',
    'functions','love','promises','dream','array',
    'Data types','functions','APIkeys','raccon',
    'establishment','nutrition','siblings','space']
    ///intialize game
function init(){
    //load word from array
    showWords(words);
    //start matching on word input 
    wordInput.addEventListener('input',startMatch);
    //call countdown every second
setInterval(countdown,1000);  
//check game status 
setInterval(checkstatus,15);
}
    //pick & show random word
    function showWords(words){
        //generating  random index array
        const randIndex=Math.floor(Math.random()*words.length);
        
//output random word 
currentword.innerHTML=words[randIndex];  }

function countdown(){
//make sure time is not run out 
if (time>0)  {
    //decrement
    time--;

}   
else if (time===0){
    isPlaying=false
}
timeDisplay.innerHTML=time
}

//check game status
function checkstatus(){
    if(!isPlaying && time===0){
        message.innerHTML='Game Over!!!'
score=-1     }
}
///Matching currentWords to wordInput
function matchwords(){
    if(wordInput.value === currentword.innerHTML){
        message.innerHTML='Correct!!!';
         return true}
        else{
            message.innerHTML=' ';
        return false;
        }

    }
    // start match
    function startMatch(){
        if(matchwords()){
    isPlaying=true;
    time=6;
    showWords(words);
    wordInput.value=''
    score++;
}// if score ===-1 display 0;
scoreDisplay.innerHTML= score===-1 ? 0:score;



}













