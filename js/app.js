//Array of the cards
let cards = ["fa fa-diamond", "fa fa-diamond", "fa fa-anchor", "fa fa-anchor", "fa fa-paper-plane-o", "fa fa-paper-plane-o", "fa fa-cube", "fa fa-cube", "fa fa-bolt", "fa fa-bolt", "fa fa-leaf", "fa fa-leaf", "fa fa-bicycle", "fa fa-bicycle", "fa fa-bomb", "fa fa-bomb"];

//Array of the opened cards
let openedCards = []; 


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//Select the deck
const bundle = document.querySelector(".deck");


//Creation of the cards 
for(let i = 0; i < cards.length; i++){
	const card = document.createElement("li"); 
	card.classList.add("card");
	card.innerHTML= `<i class="${cards[i]}"</i>`;
	bundle.appendChild(card);
    
    //card event
    card.addEventListener('click', function(){
    	card.classList.add("open", "show");
    })
  }


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
