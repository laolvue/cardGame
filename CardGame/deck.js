module.exports = {
    createDeck: function () {
        var names = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        var suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
        var deckOfCards = [];
        var countOfCards = 0;

        for (var i = 0; i < suits.length; i++) {
            for (var j = 0; j < names.length; j++) {
                deckOfCards.push(new card(names[j], suits[i]));
                countOfCards++;
            }
        }

        var cards = {
            deck: deckOfCards,
            count: countOfCards
        }

        return cards;
    },
    shuffleDeck: function (deck) {
        var currentIndex = deck.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = deck[currentIndex];
            deck[currentIndex] = deck[randomIndex];
            deck[randomIndex] = temporaryValue;
        }

        return deck;
    },
    dealCards: function (numberOfPlayers, deck) {
        if (deck === undefined) {
            return "Please create a deck of cards FIRST.";
        }
        else if (isNaN(numberOfPlayers) || numberOfPlayers === "") {
            return "Please enter a number.";
        }
        else {
            var players = [];
            var count = 0;

            for (var i = 0; i < numberOfPlayers; i++) {
                players.push(new player(i + 1));
            }

            for (var j = 0; j < deck.length; j++) {
                players[count].drawCard(deck[j]);
                count++;
                if (count == players.length) {
                    count = 0;
                }
            }
            return players;
        }
    }


}



function card(name, suit) {
    this.name = name;
    this.suit = suit;
}

function player(name) {
    this.name = "Player " + name;
    this.hand = [];
        
    this.drawCard = function (card) {
        this.hand.push(card);
        return;
    }
}
