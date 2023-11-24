function updateScore() {
    document.querySelector('.score').innerHTML= `Wins: ${score.wins}, Looses: ${score.looses}, Ties: ${score.ties}`;
}

let score = JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    looses:0,
    ties:0
};       

updateScore();

function playGame(playerMove){
    const computerMove=getComputerMove();
    console.log(computerMove);
    let result='';
    if(playerMove==='Rock'){           
        if(computerMove==='Rock') result='Tie.';
        else if(computerMove==='Paper') result='You Lose.';
        else if(computerMove==='Scissor') result='You Win.';
    }
    else if(playerMove==='Paper'){
        if(computerMove==='Rock') result='You Win.';
        else if(computerMove==='Paper') result='Tie.';
        else if(computerMove==='Scissor') result='You Lose.';
    }
    else if(playerMove==='Scissors') {
        if(computerMove==='Rock') result='You Lose.';
        else if(computerMove==='Paper') result='You Win.';
        else if(computerMove==='Scissor') result='Tie.';
    }
    if(result==='You Win.') score.wins+=1;
    else if(result==='You Lose.') score.looses+=1;
    else if(result==='Tie.') score.ties+=1;
    
    localStorage.setItem('score',JSON.stringify(score));
    updateScore();
    document.querySelector('.result').innerHTML = result;    
    document.querySelector('.choices').innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;
}

function getComputerMove(){
    let computerMove='';
    let value=Math.random();
    if(value>=0 && value<1/3) computerMove='Rock';
    else if(value>=1/3 && value<=2/3) computerMove='Paper';
    else computerMove='Scissors';
    return computerMove;
}