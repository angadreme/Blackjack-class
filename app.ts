let cardCount = 0;

class Card {
  name;
  suit;
  value;

  constructor (name, suit, value) {
    this.name = name;
    this.suit = suit;
    this.value = value;

  }
}

function Shuffle (thedeck) {
      this.cardCount = 0;
      let counter = thedeck.length;

      while (counter > 0) {
          let index = Math.floor(Math.random() * counter);

          counter--;

          let temp = thedeck[counter];
          thedeck[counter] = thedeck[index];
          thedeck[index] = temp;
      }
//      document.getElementById("playGame").value = '';
      return thedeck;
  }

class Hand {
  public cards: Card[];

  totalValue() {
    let total = 0;
    for(let i = 0; i < this.cards.length; i++){
      total += this.cards[i].value;
    }
    return total;
  }
}

let playerHand = new Hand();
let dealerHand = new Hand();

let myDeck = [
  new Card ('Ace', 'Hearts', 1),
  new Card ('Two', 'Hearts', 2),
  new Card ('Three', 'Hearts', 3),
  new Card ('Four', 'Hearts', 4),
  new Card ('Five', 'Hearts', 5),
  new Card ('Six', 'Hearts', 6),
  new Card ('Seven', 'Hearts', 7),
  new Card ('Eight', 'Hearts', 8),
  new Card ('Nine', 'Hearts', 9),
  new Card ('Ten', 'Hearts', 10),
  new Card ('Jack', 'Hearts', 10),
  new Card ('Queen', 'Hearts', 10),
  new Card ('King', 'Hearts', 10),
  new Card ('Ace', 'Spades', 1),
  new Card ('Two', 'Spades', 2),
  new Card ('Three', 'Spades', 3),
  new Card ('Four', 'Spades', 4),
  new Card ('Five', 'Spades', 5),
  new Card ('Six', 'Spades', 6),
  new Card ('Seven', 'Spades', 7),
  new Card ('Eight', 'Spades', 8),
  new Card ('Nine', 'Spades', 9),
  new Card ('Ten', 'Spades', 10),
  new Card ('Jack', 'Spades', 10),
  new Card ('Queen', 'Spades', 10),
  new Card ('King', 'Spades', 10),
  new Card ('Ace', 'Diamonds', 1),
  new Card ('Two', 'Diamonds', 2),
  new Card ('Three', 'Diamonds', 3),
  new Card ('Four', 'Diamonds', 4),
  new Card ('Five', 'Diamonds', 5),
  new Card ('Six', 'Diamonds', 6),
  new Card ('Seven', 'Diamonds', 7),
  new Card ('Eight', 'Diamonds', 8),
  new Card ('Nine', 'Diamonds', 9),
  new Card ('Ten', 'Diamonds', 10),
  new Card ('Jack', 'Diamonds', 10),
  new Card ('Queen', 'Diamonds', 10),
  new Card ('King', 'Diamonds', 10),
  new Card ('Ace', 'Clubs', 1),
  new Card ('Two', 'Clubs', 2),
  new Card ('Three', 'Clubs', 3),
  new Card ('Five', 'Clubs', 5),
  new Card ('Six', 'Clubs', 6),
  new Card ('Seven', 'Clubs', 7),
  new Card ('Eight', 'Clubs', 8),
  new Card ('Nine', 'Clubs', 9),
  new Card ('Ten', 'Clubs', 10),
  new Card ('Jack', 'Clubs', 10),
  new Card ('Queen', 'Clubs', 10),
  new Card ('King', 'Clubs', 10),
]

function gamePlay() {
  Shuffle(myDeck);

  playerHand.cards = [myDeck[cardCount], myDeck[cardCount + 2]];
  dealerHand.cards = [myDeck[cardCount + 1], myDeck[cardCount + 3]];
  cardCount += 4;

  document.getElementById("playGame").value = ('your hand: ' +playerHand.cards[0].name+ ' of ' +playerHand.cards[0].suit+ ' and ' +playerHand.cards[1].name+ ' of ' +playerHand.cards[1].suit+ '. \n');
  document.getElementById("playGame").value += ('your total: ' +(playerHand.totalValue()+ '\n\n'));

  document.getElementById("playGame").value += ('Dealer is showing: ' +dealerHand.cards[1].name+ ' of ' +dealerHand.cards[1].suit +'.\n\n');
  document.getElementById("playGame").value += ('Do you wish to HIT or STAY? \n')

}

function Hit() {
  if (playerHand.totalValue() < 22) {
    playerHand.cards.push(myDeck[cardCount]);
    cardCount += 1;

    document.getElementById("playGame").value += ('\nCard added: ' + playerHand.cards[playerHand.cards.length-1].name + ' of ' +playerHand.cards[playerHand.cards.length-1].suit +'\n');
    document.getElementById("playGame").value += ('New Value: ' +playerHand.totalValue()+ '\n');

  }

  if (playerHand.totalValue() < 21) {
    document.getElementById("playGame").value += ('\nDo you wish to HIT or STAY? \n');
  } else if (playerHand.totalValue() === 21) {
    document.getElementById("playGame").value += ('WOOHOO 21 You WIN! \n\nClick PLAY to start new game.');
  } else {
    document.getElementById("playGame").value += ('\nBUSTED!! You Loose! \n\nClick PLAY to start new game.');
  }
//  return cardCount;
}

function Stay() {
  document.getElementById("playGame").value += ('\nThe Dealer hand: ' +dealerHand.cards[0].name+ ' of ' +dealerHand.cards[0].suit+ ' and ' +dealerHand.cards[1].name+ ' of ' +dealerHand.cards[1].suit+ '. \n')
  document.getElementById("playGame").value += ('Dealer total: ' +(dealerHand.totalValue()+ '\n\n'));

  if (dealerHand.totalValue() >= 17) {

    if (dealerHand.totalValue() > playerHand.totalValue()) {
      document.getElementById("playGame").value += ('\nDealer Score: '+dealerHand.totalValue()+' Your Score: '+playerHand.totalValue()+ '\nDealer Wins! \n\nClick PLAY to start new game.');
    } else {
      document.getElementById("playGame").value += ('\nDealer Score: '+dealerHand.totalValue()+' Your Score: '+playerHand.totalValue()+ '\nYou Win! \n\nClick PLAY to start new game.');
    }
  }

  for (let i = 0; dealerHand.totalValue() < 17; i++) {
    dealerHand.cards.push(myDeck[cardCount]);
    cardCount += 1;
    document.getElementById("playGame").value += ('Dealer Hit: ' +dealerHand.cards[dealerHand.cards.length-1].name+ ' of ' +dealerHand.cards[dealerHand.cards.length-1].suit +'\n');
    document.getElementById("playGame").value += ('New Value: ' +dealerHand.totalValue()+ '\n\n');

    if (dealerHand.totalValue() >= 17) {
      if (dealerHand.totalValue() > 21) {
        document.getElementById("playGame").value += ('Dealer Bust: You WIN! \n\nClick PLAY to start new game.');
      } else if (dealerHand.totalValue() > playerHand.totalValue()) {
        document.getElementById("playGame").value += ('Dealer Score: '+dealerHand.totalValue()+' Your Score: '+playerHand.totalValue()+ '\nDealer Wins! \n\nClick PLAY to start a new game.');
      }else {
        document.getElementById("playGame").value += ('Dealer Score: '+dealerHand.totalValue()+' Your Score: '+playerHand.totalValue()+'\nYou WIN! \n\nClick PLAY to start a new game.');
    }
    }
  }
}
