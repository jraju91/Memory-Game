const reset = document.querySelector('.reset')
const tiles = document.querySelectorAll('.tiles')


const zapdos = "zapdos"
const pikachu = "pikachu"
const charmander = "charmander"
const blastoise = "blastoise"
const squirtle = "squirtle"
const pokeball = "pokeball"

const pokeList = [zapdos, zapdos, pikachu, pikachu, charmander, charmander, blastoise, blastoise, squirtle, squirtle, pokeball, pokeball ]

const cardList = []

buildCardList()
displayCards()

function getRandomPokemon() {
    
    const index = Math.floor(Math.random()*pokeList.length)
    const pokemon = pokeList[index]
    pokeList.splice(index, 1)
    return pokemon
}

function buildCardList() {
    while (pokeList.length) {
        cardList.push({
            name: getRandomPokemon(),
            isFlipped: false,
        })
    
    }
}

function displayCards() {
    for (let i = 0; i < tiles.length; i++) {
        const element = tiles[i]
        const className = cardList[i].isFlipped ? cardList[i].name : 'pokeback'
        // console.log(className)
        element.classList.add(className)
        const classNameToRemove = className == 'pokeback' ? cardList[i].name : 'pokeback'
        element.classList.remove(classNameToRemove)
    }

}

const currentCardsFlipped = []


function cardsMatched () {
    if (currentCardsFlipped.length === 2) {
         if( currentCardsFlipped[0].name !== currentCardsFlipped[1].name) {
             currentCardsFlipped[0].isFlipped = false
             currentCardsFlipped[1].isFlipped = false
             console.log(currentCardsFlipped)
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


function flipCard(index) {
    
    // console.log(index)
    cardList[index].isFlipped = true;
    displayCards()
    currentCardsFlipped.push(cardList[index])
    cardsMatched()
    if (cardList.every((card) => {
        return card.isFlipped == true
    }) 
    
    ) {
        setTimeout(() => {
            alert('YOU WIN!')
            
        }, 200)
    }
    // when all cards are matched alert you win!
    // console.log(currentCardsFlipped)
}


// console.log(cardList.length)
// console.log(tiles.length)


tiles.forEach((tile, index) => {
    tile.addEventListener("click", () => flipCard(index))
});




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
