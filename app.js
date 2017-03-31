var Card = (function () {
    function Card(name, suit, value) {
        this.name = name;
        this.suit = suit;
        this.value = value;
    }
    return Card;
}());
//either create your own deck if you wish to use it that way.
var Hand = (function () {
    function Hand() {
        this.cards = [];
    }
    Hand.prototype.getCard = function () {
        // depending on how you build the deck use that to add to cards array in this hand
        // orginal deal will need two cards and then a hit will need to add a card in whatever method you choos
    };
    return Hand;
}());
var playerHand = new Hand;
var dealerHand = new Hand;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBS0UsY0FBYSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFFckIsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQUVELDZEQUE2RDtBQUU3RDtJQUFBO1FBQ1MsVUFBSyxHQUFHLEVBQUUsQ0FBQztJQU1wQixDQUFDO0lBSkMsc0JBQU8sR0FBUDtRQUNFLGtGQUFrRjtRQUNsRix1R0FBdUc7SUFDekcsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQUVELElBQUksVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDO0FBQzFCLElBQUksVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDO0FBRTFCLDZDQUE2QztBQUU3Qyx3REFBd0Q7QUFFeEQsNENBQTRDO0FBRTVDLDhDQUE4QztBQUU5QywrQkFBK0I7QUFFL0IscUNBQXFDO0FBQ3JDLGVBQWU7QUFDZixtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLHFDQUFxQztBQUNyQyxvQ0FBb0M7QUFDcEMsb0NBQW9DO0FBQ3BDLG1DQUFtQztBQUNuQyxxQ0FBcUM7QUFDckMscUNBQXFDO0FBQ3JDLG9DQUFvQztBQUNwQyxvQ0FBb0M7QUFDcEMscUNBQXFDO0FBQ3JDLHNDQUFzQztBQUN0QyxxQ0FBcUM7QUFDckMsRUFBRTtBQUNGLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDYXJkIHtcclxuICBuYW1lO1xyXG4gIHN1aXQ7XHJcbiAgdmFsdWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yIChuYW1lLCBzdWl0LCB2YWx1ZSl7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5zdWl0ID0gc3VpdDtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4vL2VpdGhlciBjcmVhdGUgeW91ciBvd24gZGVjayBpZiB5b3Ugd2lzaCB0byB1c2UgaXQgdGhhdCB3YXkuXHJcblxyXG5jbGFzcyBIYW5kIHtcclxuICBwdWJsaWMgY2FyZHMgPSBbXTtcclxuXHJcbiAgZ2V0Q2FyZCgpIHtcclxuICAgIC8vIGRlcGVuZGluZyBvbiBob3cgeW91IGJ1aWxkIHRoZSBkZWNrIHVzZSB0aGF0IHRvIGFkZCB0byBjYXJkcyBhcnJheSBpbiB0aGlzIGhhbmRcbiAgICAvLyBvcmdpbmFsIGRlYWwgd2lsbCBuZWVkIHR3byBjYXJkcyBhbmQgdGhlbiBhIGhpdCB3aWxsIG5lZWQgdG8gYWRkIGEgY2FyZCBpbiB3aGF0ZXZlciBtZXRob2QgeW91IGNob29zXHJcbiAgfVxyXG59XHJcblxyXG5sZXQgcGxheWVySGFuZCA9IG5ldyBIYW5kO1xyXG5sZXQgZGVhbGVySGFuZCA9IG5ldyBIYW5kO1xyXG5cclxuLy9HYW1lcGxheSAoaGl0IGFuZCBzdGF5LCBnYW1lIGVuZCwgY29udGludWUpXHJcblxyXG4vL2NvbWFwcmUgdGhlIHR3byBoYW5kcyBmb3Igd2lubmVyLiAoMjEgd2l0aG91dCBidXN0aW5nKVxyXG5cclxuLy9pZGVhIHRvIGFkZCBpZiB0aW1lIEFjZSBjYW4gZXF1YWwgMSBvciAxMS5cclxuXHJcbi8vaW5pdGF0ZSBnYW1lIHBsYXkuLi4uIChleGFtcGxlOiBkZWFsIGJ1dHRvbilcclxuXHJcbi8vYWR2YW5jZWQgaWRlYSB0byBhZGQgYmV0dGluZy5cclxuXHJcbi8vb25lIG9mIHRoZSB3YXlzIHRvIGJ1aWxkIGEgZGVjay4uLi5cclxuLy8gbGV0IERlY2sgPSBbXHJcbi8vICAgbmV3IENhcmQgKCdBY2UnLCAnSGVhcnRzJywgMSksXHJcbi8vICAgbmV3IENhcmQgKCdUd28nLCAnSGVhcnRzJywgMiksXHJcbi8vICAgbmV3IENhcmQgKCdUaHJlZScsICdIZWFydHMnLCAzKSxcclxuLy8gICBuZXcgQ2FyZCAoJ0ZvdXInLCAnSGVhcnRzJywgNCksXHJcbi8vICAgbmV3IENhcmQgKCdGaXZlJywgJ0hlYXJ0cycsIDUpLFxyXG4vLyAgIG5ldyBDYXJkICgnU2l4JywgJ0hlYXJ0cycsIDYpLFxyXG4vLyAgIG5ldyBDYXJkICgnU2V2ZW4nLCAnSGVhcnRzJywgNyksXHJcbi8vICAgbmV3IENhcmQgKCdFaWdodCcsICdIZWFydHMnLCA4KSxcclxuLy8gICBuZXcgQ2FyZCAoJ05pbmUnLCAnSGVhcnRzJywgOSksXHJcbi8vICAgbmV3IENhcmQgKCdUZW4nLCAnSGVhcnRzJywgMTApLFxyXG4vLyAgIG5ldyBDYXJkICgnSmFjaycsICdIZWFydHMnLCAxMCksXHJcbi8vICAgbmV3IENhcmQgKCdRdWVlbicsICdIZWFydHMnLCAxMCksXHJcbi8vICAgbmV3IENhcmQgKCdLaW5nJywgJ0hlYXJ0cycsIDEwKSxcclxuLy9cclxuLy8gXVxyXG4iXX0=