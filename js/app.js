//Array of the cards
let cards = ["fa fa-diamond", "fa fa-diamond", "fa fa-anchor", "fa fa-anchor", "fa fa-paper-plane-o", "fa fa-paper-plane-o", "fa fa-cube", "fa fa-cube", "fa fa-bolt", "fa fa-bolt", "fa fa-leaf", "fa fa-leaf", "fa fa-bicycle", "fa fa-bicycle", "fa fa-bomb", "fa fa-bomb"];

//Array of the opened cards
let openedCards = []; 

//Array of the matched cards 
let matchedCards = [];

//Moves
let moves = 0;
const moveCount = document.querySelector(".moves");

//Rating
const starsPanel = document.querySelector(".stars");

//Timing variables
var timer = document.querySelector("#timer");
var second = 0; minute = 0; hour = 0; 
var interval;

//Modal
const modal = document.querySelector(".modal");
const totalMoves = document.getElementById("totalMoves");
const totalStars = document.getElementById("totalStars");
const totalTime = document.getElementById("totalTime");

//Select the deck
const bundle = document.querySelector(".deck");

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

//Function to refresh the page everytime
function newBoard() {
    location.reload();
};



function newGame(){
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

            card.classList.add("open", "show", "disable");
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
            cardOne.classList.remove("open", "show", "disable");
            cardTwo.classList.remove("open", "show", "disable");
        }, 300);
            openedCards = [];
    }
        } else {
        
        cardOne.classList.add("open", "show", "disable");
        openedCards.push(this); 
        }
  //Move counter
  addMove();
    });
  }
}


function removeStars(){
    switch(moves) {
        case 25: 
        starsPanel.innerHTML= `<li><i class="fa fa-star" id="stella1"></i></li>
                <li><i class="fa fa-star" id="stella2"></i></li>
                <li><i class="fa fa-star" id="stella3"></i></li>`;
                break;
        case 26:
        starsPanel.innerHTML= `<li><i class="fa fa-star" id="stella1"></i></li>
                <li><i class="fa fa-star" id="stella2"></i></li>`;
                break;
        case 31: 
        starsPanel.innerHTML = `<li><i class="fa fa-star" id="stella1"></i></li>`;
        break;
    };
}

function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML= minute+ " : "+second;
        second++;
        if(second == 60) {
            minute++;
            second=0;
        }
        if (minute == 60){
            hour++;
            minute = 0;
        }
    }, 1000);
}

function addMove(){
    moves++;
    moveCount.innerHTML= moves;
    removeStars();

  if(moves == 1){
        second = 0;
        minute = 0; 
        hour = 0;
    startTimer();
   }
};

function gameEnd() {
    if(matchedCards.length === cards.length){
        clearInterval(interval);
        finalTime = timer.innerHTML;
        modal.classList.add("show");
        const starRating = document.querySelector(".stars").innerHTML;
        totalMoves.innerHTML = moves;
        totalStars.innerHTML = starRating;
        totalTime.innerHTML = finalTime;          
  }
};

newGame();







