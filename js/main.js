cards = [
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
  console.log("User flipped " + selectedCard.rank + " of " + selectedCard.suit + " (" + selectedCard.cardImage + ")");
  checkForMatch();
}

flipCard(0);
flipCard(2);
