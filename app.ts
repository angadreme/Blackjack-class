class Card {
  name;
  suit;
  value;

  constructor (name, suit, value){
    this.name = name;
    this.suit = suit;
    this.value = value;

  }
}

//either create your own deck if you wish to use it that way.

class Hand {
  public cards = [];

  getCard() {
    // depending on how you build the deck use that to add to cards array in this hand
    // orginal deal will need two cards and then a hit will need to add a card in whatever method you choos
  }
}

let playerHand = new Hand;
let dealerHand = new Hand;

//Gameplay (hit and stay, game end, continue)

//comapre the two hands for winner. (21 without busting)

//idea to add if time Ace can equal 1 or 11.

//initate game play.... (example: deal button)

//advanced idea to add betting.

//one of the ways to build a deck....
// let Deck = [
//   new Card ('Ace', 'Hearts', 1),
//   new Card ('Two', 'Hearts', 2),
//   new Card ('Three', 'Hearts', 3),
//   new Card ('Four', 'Hearts', 4),
//   new Card ('Five', 'Hearts', 5),
//   new Card ('Six', 'Hearts', 6),
//   new Card ('Seven', 'Hearts', 7),
//   new Card ('Eight', 'Hearts', 8),
//   new Card ('Nine', 'Hearts', 9),
//   new Card ('Ten', 'Hearts', 10),
//   new Card ('Jack', 'Hearts', 10),
//   new Card ('Queen', 'Hearts', 10),
//   new Card ('King', 'Hearts', 10),
//
// ]
