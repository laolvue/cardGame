'use strict';

var fs = require('fs');
var deck = require('./deck');
var bodyParser = require('body-parser')
var express = require("express");
var app = express();
var port = process.env["PORT"] || 1337;


app.use(bodyParser.json()); 

app.listen(port);

app.get("/", function (req, res) {
    getHome(res);
});

function getHome(res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./index.html', null, function (err, data) {
        if (err) {
            res.writeHead(404);
            res.write("Page not found");
            res.end();
        }
        else {
            
            res.write(data);
            res.end();
        }
        

    });
}


app.post("/createDeck", function (req, res) {
    var deckOfCards = deck.createDeck();
    res.send(deckOfCards);
});

app.post("/shuffleDeck", function (req, res) {
    var shuffledDeck = deck.shuffleDeck(req.body.deck.deck);
    var playerCount = {
        deck: shuffledDeck
    }
    res.send(playerCount);

});

app.post("/dealCards", function (req, res) {
    var playerHands = deck.dealCards(req.body.playerCount, req.body.deck.deck);
    if (typeof (playerHands) === "string"){
        return res.status(409).send({
            message: playerHands
        });
    }
    else {
        var tile = {
            hand: playerHands
        }

        res.send(tile);
    }
});