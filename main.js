var cards = [{
    Name: "King",
    Value: 10
},
{
    Name: "Queen",
    Value: 10
},
{
    Name: "Jack",
    Value: 10
},
{
    Name: "Card10",
    Value: 10
},
{
    Name: "Card9",
    Value: 9
},
{
    Name: "Card8",
    Value: 8
},
{
    Name: "Card7",
    Value: 7
},
{
    Name: "Card6",
    Value: 6
},
{
    Name: "Card5",
    Value: 5
},
{
    Name: "Card4",
    Value: 4
},
{
    Name: "Card3",
    Value: 3
},
{
    Name: "Card2",
    Value: 2
},
{
    Name: "Card1",
    Value: 1
},
]

var playerHand = []

var playerOne = function () {
playerHand.push(cards[Math.floor(Math.random() * cards.length)]);
playerHand.push(cards[Math.floor(Math.random() * cards.length)]);
console.log("PLAYER HAND", playerHand)

}

playerHandSum = () => {
sum = 0
for (var i = 0; i < playerHand.length; i++) {
    var aCard = playerHand[i]
    console.log(aCard.Value)
    var cardValue = aCard.Value
    sum += cardValue
}

return sum;
}

playerHandSum()

var dealerHand = [];
var dealer = function () {

dealerHand.push(cards[Math.floor(Math.random() * cards.length)]);
dealerHand.push(cards[Math.floor(Math.random() * cards.length)]);
console.log("DEALER HAND", dealerHand)
}

var picture = function () {
    $('.image').html('<img src="cards.jpg" alt="cards">')
}
window.onload = function () {
$('#start').click(dealer) 
$('#start').click(playerOne)
$('#start').click(picture)
$('#total').on('click', function () {
    playerSum = 0
    for (var i = 0; i < playerHand.length; i++) {
        var aCard = playerHand[i]
        var cardValue = aCard.Value
        playerSum += cardValue
        // console.log("PLAYER SUM", playerSum)

    }
    // return playerSum
   swal(`${playerSum}`);
})

$('#stay').on('click', function () {
    dealerSum = 0
    // Message = "Player Wins!"
    // Message = "House Wins!"

    if (playerSum >= dealerSum) {
        dealerHand.push(cards[Math.floor(Math.random() * cards.length)]);
    }
    for (var i = 0; i < dealerHand.length; i++) {
        var aCard = dealerHand[i]
        var cardValue = aCard.Value
        dealerSum += cardValue
        // console.log("DEALER SUM", dealerSum)

    }
    // return dealerSum
    swal(`${dealerSum}`);

    if (dealerSum > 21) {swal(
        "Player Wins!");
    }

    if (dealerSum > playerSum) {swal(
        "House Wins!");
    } else {swal(
        "Player Wins!");
    }
    if (dealerSum > 21) {swal(
        "Player Wins!");
    }
});

$('#hit').on('click', function () {
    playerHand.push(cards[Math.floor(Math.random() * cards.length)]);
    console.log("PLAYERHAND", playerHand)
});
}

// $('button').on('click', () => {
// $('.message').html('Player Wins!!!')
// })

// $('button').on('click', () => {
// $('.message').html('Player W!!!')
// });