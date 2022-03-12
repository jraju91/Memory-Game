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
        element.classList.add(className)
    }

}


console.log(cardList.length)
console.log(tiles.length)


// var item = items[Math.floor(Math.random()*items.length)];

// const 

/* all pokebacks to start 
    shuffled pokemon behind it
    addEventListener to cards / to flip cards / if not match flip back
    alert GAME OVER
    keep track of wins
*/
