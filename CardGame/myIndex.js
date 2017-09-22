
    var deckOfCards = {};
    $("#deck").click(function () {
        $.ajax({
            type: 'POST',
            url: 'http://localhost:1337/createDeck',
            success: function (data) {
                console.log('success');
                console.log(data);
                deckOfCards = data;
                $("#cards").html("<br>Cards in deck: ");
                for (var i = 0; i < data.deck.length; i++) {
                    $("#cards").append(data.deck[i].name + " " + data.deck[i].suit + ", ");
                }
                $("#cardcounts").html("<br># of cards: " + data.count);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('Unexpected error.');
            }
        });
    });


    $("#shuffleDeck").click(function () {
        $.ajax({
            type: 'POST',
            url: 'http://localhost:1337/shuffleDeck',
            contentType: "application/json",
            data: JSON.stringify({
                deck: deckOfCards

            }),
            success: function (data) {
                console.log('success');
                console.log(data);
                deckOfCards = data;
                $("#cards").html("<br>Cards in deck: ");
                for (var i = 0; i < data.deck.length; i++) {
                    $("#cards").append(data.deck[i].name + " " + data.deck[i].suit + ", ");
                }

            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('Unexpected error.');
            }
        });
    });

    $("#dealCards").click(function () {
        $.ajax({
            type: 'POST',
            url: 'http://localhost:1337/dealCards',
            contentType: "application/json",
            data: JSON.stringify({
                playerCount: $("#players").val(),
                deck: deckOfCards

            }),
            success: function (data) {
                console.log('success of dealt cards');
                $("#playerHands").html("<br>*********************************************************************************");
                for (var i = 0; i < data.hand.length; i++) {
                    $("#playerHands").append("<br><br>" + data.hand[i].name + ": ");
                    for (var j = 0; j < data.hand[i].hand.length; j++) {
                        $("#playerHands").append(data.hand[i].hand[j].name + " " + data.hand[i].hand[j].suit + ", ");
                    }
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseJSON.message);
            }


        });
    });