let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#btn");
let new_game_btn = document.querySelector(".new_game");
let new_game_menu = document.querySelector(".msg_container");
let winner_msg = document.querySelector("#msg");

let turnOfO = true;
let isWon = false;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        // console.log("hi");
        if(turnOfO){
            box.style.color = "white";
            box.innerText = "O";
            turnOfO = false;
        }
        else{
            box.style.color = "Black";
            box.innerText = "X";
            turnOfO = true;
        }
        box.disabled = true;
        checkWinner();
        if(!isWon){
            gameIsOn = false;
            for(let val of boxes){
                if(!val.disabled) gameIsOn = true; 
            }
            if(!gameIsOn){
                winner_msg.innerText = `Game is Drawn`;
                new_game_menu.classList.remove("hide");
            }
        }
    })
});

const checkWinner = () => {
    for(let val of winPattern){
        let pos1 = boxes[val[0]].innerText;
        let pos2 = boxes[val[1]].innerText;
        let pos3 = boxes[val[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                isWon = true;
                winner_msg.innerText = `winner is ${pos1}`;
                new_game_menu.classList.remove("hide");
                for(let val of boxes){
                    val.disabled = true;
                }
            }
        }
    }
}

const reset = ()=>{
    isWon = false;
    winner_msg.innerText = "";
    new_game_menu.classList.add("hide");
    turnOfO = true;
    for(let val of boxes){
        val.innerText = "";
        val.disabled = false;
    }
    // console.log("Game is reseted")
}

const newgame = () => {
    isWon = false;
    winner_msg.innerText = "";
    new_game_menu.classList.add("hide");
    turnOfO = true;
    for(let val of boxes){
        val.innerText = "";
        val.disabled = false;
    }
}
reset_btn.addEventListener("click", reset);
new_game_btn.addEventListener("click", newgame);