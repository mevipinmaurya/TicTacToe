let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset")
let message = document.getElementById("msg")
let newGameButton = document.getElementById("newGameButton")

let flag = false
let turn = true
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turn = true
    message.classList.add("hide")
    newGameButton.classList.add("hide")
    enableBoxes();
    count = 0;
}

resetBtn.addEventListener("click", resetGame)
newGameButton.addEventListener("click", resetGame)

boxes.forEach((element) => {
    element.addEventListener("click", () => {
        if (turn) {
            element.innerText = "O"
            turn = false
            count += 1;
            // console.log(count)
        }
        else {
            element.innerText = "X"
            turn = true
            count += 1;
            // console.log(count)
        }
        element.disabled = true

        if(count == 9){
            // Your code here
            checkWinner();
            if(flag){
                message.classList.remove("hide")
                newGameButton.classList.remove("hide")
                message.innerText = `Match is Draw Try Again 😤😤😤`
            }
        }
        else{
            checkWinner();
        }
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false
        box.innerText = ""
    }
}

const checkWinner = () => {
    for (let patterns of winPatterns) {
        // console.log(patterns[0], patterns[1], patterns[2])
        // console.log(boxes[patterns[0]].innerText, boxes[patterns[1]].innerText, boxes[patterns[2]].innerText)

        let pos1 = boxes[patterns[0]].innerText
        let pos2 = boxes[patterns[1]].innerText
        let pos3 = boxes[patterns[2]].innerText
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                // console.log("Winner");
                message.classList.remove("hide")
                newGameButton.classList.remove("hide")
                message.innerText = `Player ${pos1} is the Winner of this Match.✨✨🎉🎉🎊🎊`
                disableBoxes();
                flag = true;
            }
        }
    }
}