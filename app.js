const tiles = Array.from(document.querySelectorAll(".tile"));
const spanPlayerDisplay = document.querySelector(".display-player");
const resetButton = document.getElementById("reset");
const annoucer = document.querySelector(".display-annoucer")

let gameBoard = ['','','','','','','','',''];
let currentPlayer = "X";
let isGameActive = true;

const playerXWins = "Player X Won!";
const playerOWins = "PLayer O Won!";
const tie = "Tie!"

/* 
    Board Indexes
    [0][1][2]
    [3][4][5]
    [6][7][8]

*/

const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];