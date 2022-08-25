
let hasBlackJack = false;
let sum = 0;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let cards = [];
let player = {
  name: "Khushi",
  chips: 145

}
document.getElementById("player-el").textContent = `${player.name} : $${player.chips}`

function getRandomNum() {
  let num =  Math.floor(Math.random()*13) + 1;

  if(num === 1)
  {
    return 11;
  }

  else if( num >=11 && num <= 13)
  {
    return 10;
  }

  return num;
  
}

function startGame() 
{
  isAlive= true;
  let firstCard = getRandomNum();
  let secondCard = getRandomNum();
  sum = firstCard + secondCard;
  cards = [firstCard, secondCard];
  renderGame(); 
  
}

function renderGame()
{
  if (sum < 21)
{
  message = "Do you wanna draw a new card ??";   
  isAlive = true;
}

else if ( sum === 21) 
{
    message = "Woohoo !! You won the game."; 
    hasBlackJack = true;
    isAlive = false;
}

else
{
    message ="Game over !!"; 
    isAlive = false;
    
}

messageEl.textContent = message;
document.querySelector("#sum-el").innerText = `Sum: ${sum}`;
document.getElementById("cards-el").innerText = `Cards: ${cards}`;
}

function newCard()
{
  let thirdCard = getRandomNum();
  sum += thirdCard;
  cards.push(thirdCard);
  if (isAlive=== true && hasBlackJack === false ) {
    renderGame();
  }
  // else if (isAlive=== false && hasBlackJack === true) 
  // {
  //   message = "You've already won!!";
  //   messageEl.textContent = message;
  //   document.querySelector("#sum-el").innerText = `Sum: ${sum}`;
  //   document.getElementById("cards-el").innerText = `Cards: ${cards}`;
  // }
  // else
  //   {
  //     message = "You are out of the game!!";
  //     messageEl.textContent = message;
  //     cards = [];
  //     sum = 0;
  //     document.querySelector("#sum-el").innerText = `Sum: ${sum}`;
  //     document.getElementById("cards-el").innerText = `Cards: ${cards}`;

  //   }
 
}