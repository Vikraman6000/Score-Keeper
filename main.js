const scoreP1 = document.getElementById("p1s");
const scoreP2 = document.getElementById("p2s");
const score = document.getElementById("max");

const addP1 = document.getElementById("p1b");
const addP2 = document.getElementById("p2b");
const reset = document.getElementById("reset");
const start = document.getElementById("start");
const end = document.getElementById("end");

const error = document.getElementById("errMsg");
const winner = document.getElementById("winMsg");
let score1 = 0,score2 = 0,winScore  = 0;
addP1.disabled = true;
addP2.disabled = true;

start.addEventListener('click',()=>{
    let value = score.value;
    if(validate(value)){
        if(value<=score1 || value<=score2) errMsg.innerText = "That's not Possible";
        else{
        enable();
        winScore = value; 
        score.value = "";      
        start.innerText = "Change";
        winner.innerText = "First to Score "+winScore+" points Wins";        
        if (score1 + score2 == 0) showZero();
        }
    }
});
const validate = (num)=>{
    if(num=="") {
        errMsg.textContent = "Not a Number";
        return false;
    }
    if(num<0) {
        errMsg.textContent = "Invalid Number";
        return false;
    }
    if(num>50){
        errMsg.textContent = "Huge Number";
        return false;
    } 
    errMsg.innerText = "";
    return true;
}
addP1.addEventListener('click',()=>{  
    score1 += 1;
    scoreP1.textContent = score1;
    if(score1 >= winScore) gameOver();
});
addP2.addEventListener('click', () => {
  score2 += 1;
  scoreP2.textContent = score2;
  if (score2 >= winScore) gameOver();
  
});
reset.addEventListener('click',()=>{
    showZero();
    setZero();
    enable();
    winner.textContent = winner.innerText = "First to Score " + winScore + " points Wins";
    if(winScore>0) start.innerText = "Change";
});
end.addEventListener('click',()=>{
    gameOver();
});
function gameOver(){
    addP1.disabled = true;
    addP2.disabled = true;
    if(score1>score2)
    winner.innerText = "Red Won!";
    else if(score2>score1)winner.innerText = "Blue Won!";
    else winner.innerText = "Match Draw!";
    start.innerText = "Start";
    setZero();
}
const enable = ()=>{
    addP1.disabled = false;
    addP2.disabled = false;
}
const setZero = ()=>{
    score1 = 0;
    score2 = 0;
}
const showZero = ()=>{
    scoreP1.textContent = 0;
    scoreP2.textContent = 0;
}
