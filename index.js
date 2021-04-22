// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true


// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const chanceBtn = document.getElementById("chanceBtn")
const change = document.getElementById("change")
const winner = document.getElementById("winner")
const luck = document.getElementById("luck")


// Create functions
function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
    message.style.color = "white"
    change.style.background = "#264653"
    winner.style.display = "none"
    luck.style.display = "none" 
}


// Hook up a click event listener to the Roll Dice Button
 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
        luck.style.display = "none"
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
        luck.style.display = "none"
    }
    
    if (player1Score >= 20) {
        message.textContent = "Player 1 Won 🥳"
        message.style.fontSize = "50px"
        change.style.background = "#2a9d8f" 
        winner.style.display = "block" 
        showResetButton()
    }  else if (player2Score >= 20) {
        message.textContent = "Player 2 Won 🎉"
        message.style.fontSize = "50px"
        change.style.background = "#2a9d8f"
        winner.style.display = "block"    
        showResetButton()
    }
    player1Turn = !player1Turn
})
 
resetBtn.addEventListener("click", function(){
    reset()
})


// Hook up a click event listener to the Chance Button
chanceBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    const riskNumber = Math.floor(Math.random()*2)
    
            if (player1Turn && riskNumber === 1) {
                luck.style.display = "none"
                player1Score += randomNumber * 2
                player1Scoreboard.textContent = player1Score
                player1Dice.textContent = randomNumber
                player1Dice.classList.remove("active")
                player2Dice.classList.add("active")
                message.textContent = "Player 2 Turn"
                luck.style.display = "block"
                luck.textContent = "Yeah - double points this time!"
            } else if (player1Turn && riskNumber === 0) {
                player1Score -= randomNumber
                player1Scoreboard.textContent = player1Score
                player1Dice.textContent = randomNumber
                player1Dice.classList.remove("active")
                player2Dice.classList.add("active")
                message.textContent = "Player 2 Turn"
                luck.style.display = "block"
                luck.textContent = "Bad luck - " + randomNumber + " points lost!"
            } else if (!player1Turn && riskNumber === 1) {
                player2Score += randomNumber *2
                player2Scoreboard.textContent = player2Score
                player2Dice.textContent = randomNumber
                player2Dice.classList.remove("active")
                player1Dice.classList.add("active")
                message.textContent = "Player 1 Turn"
                luck.style.display = "block"
                luck.textContent = "Yeah - double points this time!"
            } else if (!player1Turn && riskNumber === 0) {
                player2Score -= randomNumber
                player2Scoreboard.textContent = player2Score
                player2Dice.textContent = randomNumber
                player2Dice.classList.remove("active")
                player1Dice.classList.add("active")
                message.textContent = "Player 1 Turn"
                luck.style.display = "block"
                luck.textContent = "Bad luck - " + randomNumber + " points lost!"
            }
            
            if (player1Score >= 20) {
                message.textContent = "Player 1 Won 🥳"
                message.style.fontSize = "50px"
                change.style.background = "#2a9d8f"
                winner.style.display = "block"     
                showResetButton()
            }  else if (player2Score >= 20) {
                message.textContent = "Player 2 Won 🎉"
                message.style.fontSize = "50px"
                change.style.background = "#2a9d8f"
                winner.style.display = "block"    
                showResetButton()
            }
            player1Turn = !player1Turn
})