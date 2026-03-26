let boxes = document.querySelectorAll(".box") // boxes is html collection
let resetBtn = document.querySelector("#reset-btn")
let msg = document.querySelector("#msg")
let newgameBtn = document.querySelector("#new-game-btn")
let resetCnt = 0;
let clickCnt = 0;

const winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
let turnX = true;

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}

const resetGame = () => {
    resetCnt += 1
    turnX = (resetCnt%2 === 0) ? true : false
    msg.innerText = ""
    newgameBtn.classList.add("hide")
    enableBoxes()
    clickCnt = 0;
}

const checkDraw = () => {
    if(clickCnt === 9) {
        msg.innerText = "Draw!!"
        newgameBtn.classList.remove("hide");
        disableBoxes()
    }
}

boxes.forEach((box) =>{  // when js is loaded all boxex got iterated and each box is assigned the given handeler fn(with its full definition)
    box.addEventListener("click", () => {
        if(turnX) {
            box.innerText = "X"
            turnX = false;
        } else {
            box.innerText = "O"
            box.style.color = "#edafb8"
            turnX = true;
        }
        box.disabled = true;
        const winner = checkWinner();
        if(winner != "") {
            msg.innerText = `Player ${winner} is winner!!`
            newgameBtn.classList.remove("hide")
            disableBoxes();
        }
        clickCnt++;
        checkDraw()
    })
})


const checkWinner = () => {  
    for(let pattern of winningPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                return pos1Val;
            }
        }
    }
    return "";
}

resetBtn.addEventListener("click", resetGame);
newgameBtn.addEventListener("click", resetGame);
