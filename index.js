

let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// let sunEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
     name: "Gopi",
     chips :  145,
     
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

//create a function, getRandomCard(), that always returns the number 5
function getRandomCard(){
    // if 1         -> return 11
    // if 11,12,13  -> return 10
    let randomNumber = Math.floor(Math.random()*13) + 1
    if(randomNumber > 10){
        return 10
    }else if(randomNumber == 1){
        return 11
    }else{
        return randomNumber
    }
}


function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    // create a for loop that renders out all the cards instead of just two
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if(sum<=20){
        message = "Do you want to draw a new card?"
    }else if(sum == 21){
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    }else{
        message = "You're out of the game!"
        isAlive = false
    }
    
    messageEl.textContent = message
}


function newCard(){
    // only allow the player to get a new card if she is alive and does not have Blackjack
    if(isAlive == true && hasBlackJack == false){
        let card = getRandomCard()
        sum += card
        //push the card to the cards array
        cards.push(card)
        console.log(cards)
        renderGame()
    }

    
    
}