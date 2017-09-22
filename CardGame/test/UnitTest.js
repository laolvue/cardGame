var assert = require('chai').assert;
var deck = require('../deck');

describe('deck', function () {
    describe('createDeck()', function () {
        it('should return type object', function () {
            var deckOfCards = deck.createDeck();
            assert.typeOf(deckOfCards, 'object');
        });

        it('should return object with count property of 52', function () {
            var deckOfCards = deck.createDeck();
            assert.equal(deckOfCards.count, 52);
        });

        it('should return object deck length of 52', function () {
            var deckOfCards = deck.createDeck();
            assert.equal(deckOfCards.deck.length, 52);
        });

        it('should return an object that is neither null nor undefined', function () {
            var deckOfCards = deck.createDeck();
            assert.exists(deckOfCards, 'deck is neither null  nor undefined');
        });

        it('should return an object that contains an array', function () {
            var deckOfCards = deck.createDeck();
            assert.typeOf(deckOfCards.deck, 'array');
        });

        it('should return an object that contains an array of objects', function () {
            var deckOfCards = deck.createDeck();
            assert.typeOf(deckOfCards.deck[0], 'object');
        });

        it('should return an object that contains a number', function () {
            var deckOfCards = deck.createDeck();
            assert.isNumber(deckOfCards.count);

        });

        it('should return an object that is not empty', function () {
            var deckOfCards = deck.createDeck();
            assert.isNotEmpty(deckOfCards);
        });

    });


    describe('shuffleDeck()', function () {
        it('should return type array', function () {
            var cards = ["A","2","3","4","5"];
            var shuffledDeck = deck.shuffleDeck(cards);

            assert.typeOf(shuffledDeck, 'array');
        });

        it('should return the same length', function () {
            var cards = ["A", "2", "3", "4", "5"];
            var shuffledDeck = deck.shuffleDeck(cards);

            assert.equal(cards.length, 5);
        });

        it('should return an array containing type string', function () {
            var cards = ["A", "2", "3", "4", "5"];
            var shuffledDeck = deck.shuffleDeck(cards);

            assert.typeOf(shuffledDeck[0], 'string');
        });

        it('should return an array that is not empty', function () {
            var cards = ["A", "2", "3", "4", "5"];
            var shuffledDeck = deck.shuffleDeck(cards);

            assert.isNotEmpty(shuffledDeck);
        });
        
    });

    describe('dealCards()', function () {
        it('should return type array', function () {
            var numberOfPlayers = 3;
            var cards = ["A", "2", "3", "4", "5"];
            var players = deck.dealCards(numberOfPlayers,cards);

            assert.typeOf(players, 'array');
        });

        it('should return an array containing player objects', function () {
            var numberOfPlayers = 3;
            var cards = ["A", "2", "3", "4", "5"];
            var players = deck.dealCards(numberOfPlayers, cards);

            assert.typeOf(players[0], 'object');
        });

        it('should return array length equal to number of players', function () {
            var numberOfPlayers = 3;
            var cards = ["A", "2", "3", "4", "5"];
            var players = deck.dealCards(numberOfPlayers, cards);

            assert.equal(players.length, 3);
        });

        it('should return player 1 with 2 cards given 3 players and a deck of 5 cards', function () {
            var numberOfPlayers = 3;
            var cards = ["A", "2", "3", "4", "5"];
            var players = deck.dealCards(numberOfPlayers, cards);

            assert.equal(players[0].hand.length, 2);
        });

        it('should return error message if user input is NaN', function () {
            var numberOfPlayers = "abc";
            var cards = ["A", "2", "3", "4", "5"];
            var players = deck.dealCards(numberOfPlayers, cards);

            assert.equal(players, "Please enter a number.");
        });

        it('should return error message if deck is undefined', function () {
            var numberOfPlayers = 2;
            var cards = undefined;
            var players = deck.dealCards(numberOfPlayers, cards);

            assert.equal(players, "Please create a deck of cards FIRST.");
        });

    });
    
});
