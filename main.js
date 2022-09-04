
//Try To Enhance This Code Whenever You Open It
//Array Of Word 
let words=[
    "Hello",
    "Country",
    "Egypt",
    "Love",
    // "So",
    // "Never,",
    // "Been",
    // "I'm",
    // "Ali",
    // "Java",
    // "C++",
    // "CSS",
    // "Like",
    // "Github",
    // "Scala",
    // "JavaScript",
    // "Destructuring",
    // "Programming",
    // "Rank",
    // "Hacker",
    // "Oriented",
    // "Object",
    // "Paradigm",
    // "Assemply",
    // "Hardware",
    // "Software",
    // "System",
    // "Embeded",
    // "Odin",
    // "Zeus",
    // "Show",
    // "Please",
    // "Confirm",
    // "Play",
    // "Code",
    // "Task",
    // "Gulp",
    // "Runner",
    // "Also",
];
//setting Levels
const levels={
    "Easy":5,
    "Normal":3,
    "Hard":2,
}
//default level
let defaultLevelName="Normal"; //change Level Here
let defaultLevelSeconds=levels[defaultLevelName];

//catch selector 
let startButton=document.querySelector(".start");
let lvlNameSpan=document.querySelector(".message .lvl");
let secondsSpan=document.querySelector(".message .seconds");
let theWord=document.querySelector(".the-word");
let upcomingWords=document.querySelector(".upcoming-words");
let input=document.querySelector(".input");
let timeLeftSpan=document.querySelector(".time span");
let scoreGot=document.querySelector(".score .got");
let scoreTotal=document.querySelector(".score .total");
let finishMessage=document.querySelector(".finish");
let menuBtn=document.querySelector(".heading i");
let menu=document.querySelector(".heading .menu");
//display level menu 
menuBtn.onclick=()=>{
    menu.classList.toggle("show");
    // menu.style.display="block";
}
//choose level 
let easy =document.querySelector(".easy");
let normal =document.querySelector(".normal");
let hard =document.querySelector(".hard");
//for easy level 
easy.onclick=()=>{
    defaultLevelName="Easy"; //change Level Here
    defaultLevelSeconds=5;
    reset();
    setLevelSecondScore();
    scoreGot.innerHTML=0;
    startButton.innerHTML="Start";
    menu.style.display="none";
}
//for normal level 
normal.onclick=()=>{
    defaultLevelName="Normal"; //change Level Here
    defaultLevelSeconds=3;
    reset();
    setLevelSecondScore()
    scoreGot.innerHTML=0;
    startButton.innerHTML="Start";
    menu.style.display="none";
}
//for hard level 
hard.onclick=()=>{    
    defaultLevelName="Hard"; //change Level Here
    defaultLevelSeconds=2;
    reset();
    startButton.innerHTML="Start";
    setLevelSecondScore();
    scoreGot.innerHTML=0;
    menu.style.display="none";
}

//setting Level Name And Second And Scores
function setLevelSecondScore(){
    lvlNameSpan.innerHTML=defaultLevelName;
    secondsSpan.innerHTML=defaultLevelSeconds;
    timeLeftSpan.innerHTML=defaultLevelSeconds;
    scoreTotal.innerHTML=words.length;
    startButton.style.display="block";
}
 
//disable paste event
input.onpaste=function(){
    return false;
}
//disable rigth click
window.oncontextmenu=function(){
    return false;
}
//start game
startButton.onclick=game;
function game(){
    input.focus();
    reset();
    setLevelSecondScore();
    //generate word function 
    genWords();
    this.style.display="none";
    // input.addEventListener("keydown",keyup);
}

// //function to compare and store
// function keyup(e){
//     if (e.key===" " && input.value!==""){
//         genWords();
//     }
// }


//function for reset 
function reset(){
    input.value="";
    finishMessage.innerHTML="";
    upcomingWords.innerHTML="";
    theWord.innerHTML="";
    words=[
        "Hello",
        "Country",
        "Egypt",
        "Love",
        "So",
        "Never,",
        "Been",
        "I'm",
        "Ali",
        "Java",
        "C++",
        "CSS",
        "Like",
        "Github",
        "Scala",
        "JavaScript",
        "Destructuring",
        "Programming",
        "Rank",
        "Hacker",
        "Oriented",
        "Object",
        "Paradigm",
        "Assemply",
        "Hardware",
        "Software",
        "System",
        "Embeded",
        "Odin",
        "Zeus",
        "Show",
        "Please",
        "Confirm",
        "Play",
        "Code",
        "Task",
        "Gulp",
        "Runner",
        "Also",
    ];
}
//genertae word function 
function genWords(){
    //get random Words From Array
    let randomWord= words[Math.floor(Math.random()*words.length)];
    //get index of the word
    let wordIndex=words.indexOf(randomWord);
    //remove the word from array 
    words.splice(wordIndex, 1);
    //show random word
    theWord.innerHTML=randomWord;
    //empty upcoming word
    upcomingWords.innerHTML="";
    //generate upcomingWords
    for(let i=0;i<words.length;i++){
        //create div
        let uWDiv=document.createElement("div");
        let wordInDiv=document.createTextNode(words[i]);
        uWDiv.appendChild(wordInDiv);
        upcomingWords.appendChild(uWDiv);
    } 
    startType();
 }
 //call start typing function 
 function startType(){
    //reset timer 
    timeLeftSpan.innerHTML=defaultLevelSeconds;
    let start=setInterval(()=>{
        timeLeftSpan.innerHTML--;
        if(timeLeftSpan.innerHTML==="0"){
            //stop timer
            clearInterval(start);
            //compare words
            if(theWord.innerHTML.toLocaleLowerCase()===input.value.toLowerCase()){
                //Empty input Field
                input.value="";
                scoreGot.innerHTML++;
                if(words.length>0){
                    //call generate word function 
                    genWords();
                }else{
                    let span=document.createElement("span");
                    span.classList.add("good");
                    let spanTxt=document.createTextNode("Congratulations");
                    span.appendChild(spanTxt);
                    finishMessage.appendChild(span);
                }
            }else{
                reset();
                startButton.textContent="Retry Again";
                startButton.style.display="block";
                scoreGot.innerHTML=0;
                let span =document.createElement("span");
                span.classList.add("bad");
                let spanTxt=document.createTextNode("Game Over");
                span.appendChild(spanTxt);
                finishMessage.appendChild(span);
            }
        }
    },1000)
 }


