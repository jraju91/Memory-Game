// set query selectors for what I'll be using for the js portion

const reset = document.querySelector('.reset')
const tiles = document.querySelectorAll('.tiles')


// creating variables to link to my css
const zapdos = "zapdos"
const pikachu = "pikachu"
const charmander = "charmander"
const blastoise = "blastoise"
const squirtle = "squirtle"
const pokeball = "pokeball"

// creating array of all my variables
let pokeList = [zapdos, zapdos, pikachu, pikachu, charmander, charmander, blastoise, blastoise, squirtle, squirtle, pokeball, pokeball ]

// empty array to push my pokeList into using the buildCardlist function
let cardList = []

// calling functions
buildCardList()
displayCards()

// function to randomize pokemon on game board so if page is refreshed, cards will not be in same place
function getRandomPokemon() {
    
    const index = Math.floor(Math.random()*pokeList.length)
    const pokemon = pokeList[index]
    pokeList.splice(index, 1)
    return pokemon
}

// initialize list of cards in random order
function buildCardList() {
    while (pokeList.length) {
        cardList.push({
            name: getRandomPokemon(),
            isFlipped: false,
        }) 
    
    }
}
// function containing for loop to iterate through my cards to add class name which will allow cards to be matched,
//  and also to remove class name if they are not matched. also used ternary operator instead of traditional if statement
function displayCards() {
    for (let i = 0; i < tiles.length; i++) {
        const element = tiles[i]
        console.log(cardList)
        const className = cardList[i].isFlipped ? cardList[i].name : 'pokeback'
        // console.log(className)
        element.classList.add(className)
        const classNameToRemove = className == 'pokeback' ? cardList[i].name : 'pokeback'
        element.classList.remove(classNameToRemove)
        // console.log(className, classNameToRemove)
        
    }

}

// empty array created to push class names with cardsMatched function
let currentCardsFlipped = []

// function created to see if cards matched pushing to empty array listed above, and to remove them as well since the parameter of length === 2
function cardsMatched () {
    if (currentCardsFlipped.length === 2) {
         if( currentCardsFlipped[0].name !== currentCardsFlipped[1].name) {
             currentCardsFlipped[0].isFlipped = false
             currentCardsFlipped[1].isFlipped = false
            //  console.log(currentCardsFlipped)
             setTimeout(displayCards, 500)
             //  displayCards()
             currentCardsFlipped.pop()
             currentCardsFlipped.pop()
             
             } else {
                    currentCardsFlipped.pop()
                    currentCardsFlipped.pop()
                }
        }
    }

// 
function isGameOver() {
        return cardList.every((card) => {
            return card.isFlipped == true;
        })
    }

// main function to run game
function flipCard(index) {
    
    // console.log(index)
    cardList[index].isFlipped = true;
    displayCards()
    currentCardsFlipped.push(cardList[index])
    cardsMatched()
    if (isGameOver())
    {
        setTimeout(() => {
            alert('YOU WIN!')
            
        }, 200)
    }
}



// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

// function created to shuffle cards when new game button is clicked
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

// function created to restart game, setting everything back to default
function newGame() {
    currentCardsFlipped = []
    cardList.forEach((card) => {
        card.isFlipped = false;
    });
    cardList = shuffle(cardList)
    tiles.forEach((tile) => {
        tile.className = "tiles";
    });
    // buildCardList()
    displayCards()

}


// calling function by using addEventListener and calling flipCard function
tiles.forEach((tile, index) => {
    tile.addEventListener('click', () => flipCard(index))
});

// new game button and also calling newGame function to reset game without having to refresh page
reset.addEventListener('click', newGame)




/* 
    addEventListener to cards / to flip cards / if not match flip back
    alert GAME OVER
    keep track of wins
    tiles.addEventListener('click', flipCard())
    find which pokemon attached to click *hint same index in card list
    assign is flipped = true
    if cards do not match flip back over
    if match green indicator
*/
