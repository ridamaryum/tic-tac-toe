console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = "X"
let isGameOver = false;

//function to change turn X -> 0 or 0 -> X
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

//Function to check for win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2, 5, 5, 0],
        [3,4,5, 5, 15, 0],
        [6,7,8, 5, 25, 0],
        [0,3,6, -5, 15, 90],
        [1,4,7, 5, 15, 90],
        [2,5,8, 15, 15, 90],
        [0,4,8, 5, 15, 45],
        [2,4,6, 5, 15, 135],
    ];

    wins.forEach((e) => {
        //check for pos 0 == 1 && 1 ==2 && any pos not null, since initially all are null they it gives win
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && boxtexts[e[0]].innerText !== ""){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + ' Won';
            isGameOver = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.line').style.width =  "20vw";
            document.querySelector('.line').style.transform =  `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            gameOver.play();
        }



    })
}

//Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isGameOver){
                document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn;
            }
        }
    })
})

//add event listener to reset
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach( element => {
        element.innerText = "";
    })
    turn = "X";
    isGameOver = false;
    document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.line').style.width =  "0";

})