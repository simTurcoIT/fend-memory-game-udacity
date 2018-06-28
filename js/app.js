//Array of the cards
let cards = ["fa fa-diamond", "fa fa-diamond", "fa fa-anchor", "fa fa-anchor", "fa fa-paper-plane-o", "fa fa-paper-plane-o", "fa fa-cube", "fa fa-cube", "fa fa-bolt", "fa fa-bolt", "fa fa-leaf", "fa fa-leaf", "fa fa-bicycle", "fa fa-bicycle", "fa fa-bomb", "fa fa-bomb"];

//Array of the opened cards
let openedCards = []; 

//Array of the matched cards 
let matchedCards = [];


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

function startGame(){
//shuffle cards
shuffle(cards);

//Creation of the cards 
for(let i = 0; i < cards.length; i++){
	const card = document.createElement("li"); 
	card.classList.add("card");
	card.innerHTML= `<i class="${cards[i]}"</i>`;
	bundle.appendChild(card);
	event(card);
  }  

    //click event for each card
    function event(card){
    
    card.addEventListener('click', function(){
    		
    		const cardOne = this;
    		const cardTwo = openedCards[0];

    	if(openedCards.length === 1){

    		card.classList.add("open", "show");
    	    openedCards.push(this); //the opened cards go in the empty array
    		

    	  //compare the cards 
           if(cardOne.innerHTML === cardTwo.innerHTML) {
            cardOne.classList.add("match");
            cardTwo.classList.add("match");

            matchedCards.push(cardOne, cardTwo);

            openedCards = [];//reset the array

            gameEnd();

          } else { //if the cards don't match, we remove classes
            
            setTimeout(function(){
            cardOne.classList.remove("open", "show");
            cardTwo.classList.remove("open", "show");
            openedCards = [];
        }, 300);
    }

    	} else {

    	cardOne.classList.add("open", "show");
    	openedCards.push(this); 
    	}

    });
 }
}
function gameEnd() {
	if(matchedCards.length === cards.length){
		alert("tua mamma");
	}
}

startGame();
