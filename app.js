let choices = document.querySelector(".choices")
let choice = document.querySelectorAll(".choice")
let rock = document.querySelector("#rock")
let paper = document.querySelector("#paper")
let scissors = document.querySelector("#scissors")
let scoreboard = document.querySelector(".score-board")
let score = document.querySelector(".score")
let yourscore = document.querySelector(".your-score")
let yourscorenum = document.querySelector("#you-score")
let compscorenum = document.querySelector("#com-score")
let compscore = document.querySelector(".comp-score")
let name = document.querySelectorAll("#name-you")
let msgcontainer = document.querySelector(".msgcontainer")
let reset = document.querySelector(".reset")
let robotscore = 0;
let userscore = 0;
const compmove =() =>{
    const options = ["rock","paper","scissors"]
   const compchoosed= Math.floor(Math.random()*3);
   return options[compchoosed];
}
const draw = (userchoice)=>{
    msgcontainer.innerText = "It's a draw"
    msgcontainer.style.backgroundColor="yellow"
}
const finalresult=(userdid,compchoice)=>{
    if(userdid==true){
        msgcontainer.innerText=".....You Win....."+"\n  Since computer choosed  "+ compchoice
        userscore++;
        msgcontainer.style.backgroundColor="green"
        yourscorenum.innerText= userscore
    }else{
        msgcontainer.innerText=".....Computer Win....." + "\n  Since computer choosed "+ compchoice
        robotscore++; 
        msgcontainer.style.backgroundColor="red"
       compscorenum.innerText= robotscore
    }
}
const playgame= (userchoice) =>{
    let userwin;
    const  compchoice = compmove();
    if(userchoice==compchoice){
     userwin = "draw"
    }else if( userchoice=="rock"){
      userwin =  compchoice==="scissors" ? true : false
}else if(userchoice=="paper"){
    userwin = compchoice==="rock"? true : false;
} else if(userchoice=="scissors"){
    userwin = compchoice==="rock"? false: true;
}
if(userwin==="draw"){
    draw(userwin);
}else{
finalresult(userwin,compchoice)
}
}
choice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       let who = choice.getAttribute("id")
        playgame(who)
    })
})

   reset.addEventListener("click",()=>{
    robotscore=0
    userscore=0
    yourscorenum.innerText= 0
    compscorenum.innerText= 0
    msgcontainer.innerText="New game...play your move "
    msgcontainer.style.backgroundColor="#E95793"
   })
 