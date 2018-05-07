// All of the available cards
var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
// Cards that the user has selected
var cardsInPlay = [];
// Variables for keeping track of games played
var gamePlays = 0;
var gameWins = 0;

// Shuffle the cards around so there is some challenge to the game
var shuffleBoard = function() {
  var order = [];
  while (cards.length > 0) {
    // Choose a random index fom the remaining cards
    var index = Math.floor((Math.random() * 10)) % cards.length;
    // Move that card into a new array
    order.push(cards[index]);
    cards.splice(index, 1);
  }
  // Replace the original (now empty) array with the scrambled one
  cards = order;
}

// Generate a new game for the user
var createBoard = function() {
  shuffleBoard();
  for (var i = 0; i < cards.length; i++) {
    var newCard = document.createElement('img');
    newCard.setAttribute('src', 'images/back.png');
    newCard.setAttribute('data-id', i);
    newCard.addEventListener('click', flipCard);
    document.getElementById('game').appendChild(newCard);
  }
}

// Clear away a finished game and reset the board
var resetBoard = function() {
  cardsInPlay.pop();
  cardsInPlay.pop();
  var board = document.getElementById('game');
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
  createBoard();
}

// Check to see if the user won or lost the game
var checkForMatch = function() {
  // Record that another game was played
  gamePlays += 1;
  // Generate a restult element to display
  var resultBanner = document.createElement('div');
  resultBanner.className = "results";
  // Assume they lost
  var bannerMessageHTML = "<h2>Sorry</h2><p>Better luck next time!</p>";
  if (cardsInPlay[0] === cardsInPlay[1]) {
    // They actually won so record the win and update the text
    gameWins += 1;
    bannerMessageHTML = "<h2>Congratulations</h2><p>That's the way to do it!</p>";
  }
  // Add the stats
  var stats = "<p>Played: " + gamePlays + ", Won: " + gameWins + "</p>";
  // Reset the board when the user clicks on the banner
  resultBanner.innerHTML = bannerMessageHTML + stats + "<p>(click to close)</p>";
  resultBanner.addEventListener('click', resetBoard);
  // Show the banner
  var gameDiv = document.getElementById('game');
  gameDiv.appendChild(resultBanner);
}

// Reveal the card that the user clicked
var flipCard = function() {
  var selectedCard = cards[this.getAttribute('data-id')];
  cardsInPlay.push(selectedCard.rank);
  this.setAttribute('src', selectedCard.cardImage);
  // Make sure that they can't cheat by clicking the same card twice
  this.removeEventListener('click', flipCard);
  console.log("User flipped " + selectedCard.rank + " of " + selectedCard.suit + " (" + selectedCard.cardImage + ")");
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
}

// Initialize the game board
createBoard();
