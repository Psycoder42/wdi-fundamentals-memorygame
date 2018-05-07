cards = ['queen', 'queen', 'king', 'king'];
cardsInPlay = [];

var checkForMatch = function() {
  if (cardsInPlay.length !== 2) {
    // nothing to do if they haven't selected 2 cards yet
    return;
  }
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!")
  } else {
    alert("Sorry, try again.")
  }
}

var flipCard = function(cardId) {
  var selectedCard = cards[cardId];
  cardsInPlay.push(selectedCard);
  console.log("User flipped " + selectedCard);
  checkForMatch();
}

flipCard(0);
flipCard(2);
