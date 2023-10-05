const cardsArray=[
    {
        name:'apple',
        icon:'<i class="fa-brands fa-apple"></i>'
    },
    {
        name:'hippo',
        icon:'<i class="fa-solid fa-hippo"></i>'
    },
    {
        name:'bolt',
        icon:'<i class="fa-solid fa-bolt"></i>'
    },
    {
        name:'ghost',
        icon:'<i class="fa-solid fa-ghost"></i>'
    },
    {
        name:'plane',
        icon:'<i class="fa-solid fa-plane"></i>'

    },
    {
        name:'bicycle',
        icon:'<i class="fa-solid fa-bicycle"></i>'
    },


    {
        name:'apple',
        icon:'<i class="fa-brands fa-apple"></i>'
    },
    {
        name:'hippo',
        icon:'<i class="fa-solid fa-hippo"></i>'
    },
    {
        name:'bolt',
        icon:'<i class="fa-solid fa-bolt"></i>'
    },
    {
        name:'ghost',
        icon:'<i class="fa-solid fa-ghost"></i>'
    },
    {
        name:'plane',
        icon:'<i class="fa-solid fa-plane"></i>'

    },
    {
        name:'bicycle',
        icon:'<i class="fa-solid fa-bicycle"></i>'
    }



];

let flippedCards = [];
let matchedPairs = 0; // if all cards are match finished successfully then 

shuffleCards();
const gameBoard = document.getElementById('gameBoard')
displayCards();

function shuffleCards(){
    for(let i=cardsArray.length-1;i>=0;i--){
        const randIndex = Math.floor(Math.random()*(i+1));
        [cardsArray[i],cardsArray[randIndex]] = [cardsArray[randIndex],cardsArray[i]]

    }
}

function displayCards(){
    cardsArray.forEach((curr,index,arr)=>{
        const card = document.createElement('div');
        card.setAttribute('id',index);
        card.classList.add('cardback');
        card.classList.add('active');
        gameBoard.append(card);
        card.addEventListener('click',flipCard);
    })
    
}

function flipCard(){
    if(flippedCards.length<2 && this.classList.contains('active')){  //only two cards turn around in flipped card array
        let cardId = this.getAttribute('id');
        flippedCards.push(this);
        this.classList.remove('cardback');
        this.innerHTML = cardsArray[cardId].icon;
        // if two cards match 
        if(flippedCards.length==2){
            //here we use time delay concept for slow processing
            setTimeout(checkMatch,1000); //1000 milliseconds

        }
    }

}

function checkMatch(){
    const card1Id = flippedCards[0].getAttribute('id');
    const card2Id = flippedCards[1].getAttribute('id');
    //check the icon name
    if(cardsArray[card1Id].name === cardsArray[card2Id].name){
        //now if match two card then disappear the cards
        flippedCards[0].style.border = 'none';
        flippedCards[0].style.backgroundColor = '#f5e8ba';
        flippedCards[0].innerHTML = '';

        //if matched -->remove the active 
        flippedCards[0].classList.remove('active');
        flippedCards[1].classList.remove('active');

        flippedCards[1].style.border = 'none';
        flippedCards[1].style.backgroundColor = '#f5e8ba';
        flippedCards[1].innerHTML = '';

        matchedPairs++; // its increase the count
        checkGameOver(); //create function
    }

    else{
        flippedCards[0].innerHTML ='';
        flippedCards[0].classList.add('cardback');
        flippedCards[1].innerHTML ='';
        flippedCards[1].classList.add('cardback');

    }
    flippedCards = [];
}

function checkGameOver(){
    if(matchedPairs == cardsArray.length/2){ //Its 6/2 like this
        while(gameBoard.firstChild){   //In this while loop for remove the first element in the array
            gameBoard.removeChild(gameBoard.firstChild)
        }
        gameBoard.innerHTML ='Congratulations!!!!! You Won the game';
        gameBoard.classList.remove('game');
        gameBoard.classList.add('won');
    }
}