window.addEventListener("DOMContentLoaded", () => {
    const tiles = Array.from(document.querySelectorAll(".tile"));
    const spanPlayerDisplay = document.querySelector(".display-player");
    const resetButton = document.getElementById("reset");
    const annoucer = document.querySelector(".display-annoucer")

    let board = ['','','','','','','','',''];
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

    const winningConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    function handleValidation(){
        let roundWon = false;
        for (let i = 0; i<= 7; i++){
            const winCondition = winningConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            if(a === '' || b === '' || c === '') {
                continue;
            }

            if (a === b && b === c){
                roundWon = true
                break;
            }   
        }

        if (roundWon){
            announce(currentPlayer === "X" ? playerXWins : playerOWins);
            isGameActive = false;
            return;
        }

        if (!board.includes(""))
            announce(tie);
    }

    const announce = (type) => {
        switch(type){
            case playerOWins:
                annoucer.innerHTML = "Player O Won!";
                break;
            case playerXWins:
                annoucer.innerHTML = "Player X Wins";
                break;
            case tie:
                annoucer.innerHTML = "TIE!";
                break;
        }
        annoucer.classList.remove("hide");
    }

    const changePlayer = () => {
        spanPlayerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === "X" ? "O":"X";
        spanPlayerDisplay = currentPlayer;
        spanPlayerDisplay.classList.add(`player${currentPlayer}`);
    }


    const userAction = (tile, index) => {
        if(isValidAction(tile) && isGameActive) {
            tile.innerText = currentPlayer;
            tile.classList.Add(`player${currentPlayer}`);
            updateboard(index);
            handleValidation();
            changePlayer();
        }
    }





    tiles.forEach((tile, index) => {
        tile.addEventListener("click", () => userAction(tile, index));
    });
























});


