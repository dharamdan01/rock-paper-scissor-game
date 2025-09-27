let userScore = document.getElementById("user-score");
let computerScore = document.getElementById("computer-score");
let message = document.getElementById('message');
let container = document.getElementById('container');
let winner = document.getElementById('winner-image');
let Img = document.getElementById('result-img');
var clickSound = document.getElementById("click-sound");
var winnerAudio = document.getElementById("winner-audio");
const obj = {"rock": 0, "paper" : 1, "scissor": 2};
let objKeys = Object.keys(obj);
let userChoice; 
function inputValues(winnerAudio)
{

    debugger;
    userScore.innerText = 0, computerScore.innerText = 0;
    container.style.display = "none";
    winnerAudio.play();
    winner.style.display = "flex";
    return setTimeout(() => {
        winner.style.display = "none";
        container.style.display = "block";
        message.innerText = "";
    },5000);
}
function Rock()
{
    userChoice = Math.floor(Math.random() * 3);
    clickSound.play();
    if(userChoice == obj[objKeys[2]])
    {
        Img.src = "./Images/winner.jpg";
        winnerAudio.src = "./winner sound.mp3";
        userScore.innerText = parseInt(userScore.innerText) + 1;
        return userScore.innerText == 10 ? inputValues(winnerAudio) : message.innerText = `Win! ${objKeys[0]} beats ${objKeys[2]}.`;
    }
    else if(userChoice == obj[objKeys[1]])
    {
        Img.src = "./Images/loose.webp";
        winnerAudio.src = "./loose audio.wav";
        computerScore.innerText = parseInt(computerScore.innerText) + 1;
        return computerScore.innerText == 10 ? inputValues(winnerAudio) : message.innerText = `Lose! ${objKeys[1]} beats ${objKeys[0]}.`;
    }
    else return message.innerText = `Draw ${objKeys[0]} beats ${objKeys[0]}.`;

}
function Paper()
{
    userChoice = Math.floor(Math.random() * 3);
    clickSound.play();
    if(userChoice == obj[objKeys[0]])
    {
        Img.src = "./Images/winner.jpg";
        winnerAudio.src = "./winner sound.mp3";
        userScore.innerText = parseInt(userScore.innerText) + 1;
        return userScore.innerText == 10 ? inputValues(winnerAudio) : message.innerText = `Win! ${objKeys[1]} beats ${objKeys[0]}.`;
    }
    else if(userChoice == obj[objKeys[2]])
    {
        Img.src = "./Images/loose.webp";
        winnerAudio.src = "./loose audio.wav";
        computerScore.innerText = parseInt(computerScore.innerText) + 1;
        return computerScore.innerText == 10 ? inputValues(winnerAudio) : message.innerText = `Lose! ${objKeys[2]} beats ${objKeys[1]}.`;
    }
    else return message.innerText = `Draw ${objKeys[1]} beats ${objKeys[1]}.`;
}
function Scissor()
{
    clickSound.play();
    if(userChoice == obj[objKeys[1]])
    {
        Img.src = "./Images/loose.webp";
        winnerAudio.src = "./loose audio.wav";
        userScore.innerText = parseInt(userScore.innerText) + 1;
        return userScore.innerText == 10 ? inputValues(winnerAudio) : message.innerText = `Win! ${objKeys[2]} beats ${objKeys[1]}.`;
    }
    else if(userChoice == obj[objKeys[0]])
    {
        Img.src = "./Images/loose.webp";
        winnerAudio.src = "./loose audio.wav";
        computerScore.innerText = parseInt(computerScore.innerText) + 1;
        return computerScore.innerText == 10 ? inputValues(winnerAudio) : message.innerText = `Lose! ${objKeys[0]} beats ${objKeys[2]}.`;
    }
    else return message.innerText = `Draw ${objKeys[2]} beats ${objKeys[2]}.`;
}

