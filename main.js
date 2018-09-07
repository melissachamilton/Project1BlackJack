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
    // playerOne()
    //    sum = 0
    //    playerHandSum = () => {
    // for (var i = 0; i < playerHand.length; i++) {
    // var aCard = playerHand[i]
    // console.log(aCard.Value)
    // var cardValue = aCard.Value
    // sum+=aCard.Value
    // }
    // return sum;
}

// playerHandSum()
// }



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


// dealerHandSum = () => {
// sum = 0
// for (var i = 0; i < dealerHand.length; i++) {
// var bCard = dealerHand[i]
// console.log(bCard.Value)
// var cardValue = bCard.Value
// sum+=cardValue


// return sum;


// dealerHandSum()

window.onload = function () {
    $('#start').click(dealer)
    $('#start').click(playerOne)
    $('#total').on('click', function () {
        playerSum = 0
        for (var i = 0; i < playerHand.length; i++) {
            var aCard = playerHand[i]
            var cardValue = aCard.Value
            playerSum += cardValue
            // console.log("PLAYER SUM", playerSum)

        }
        return playerSum
        // var aCard = playerHand[i]
        // console.log(aCard.Value)
        // var cardValue = aCard.Value
        // sum+=aCard.Value



        // sum+=cardValue
        // return sum
    })

    $('#stay').on('click', function () {
        dealerSum = 0
        Message = "Player Wins!"
        Message = "House Wins!"

        if (playerSum >= dealerSum) {
            dealerHand.push(cards[Math.floor(Math.random() * cards.length)]);
        }
        for (var i = 0; i < dealerHand.length; i++) {
            var aCard = dealerHand[i]
            var cardValue = aCard.Value
            dealerSum += cardValue
            // console.log("DEALER SUM", dealerSum)

        }
        if (dealerSum > 21) {
            Message = "Player Wins!";
            console.log('Player Wins!')
        }
        if (dealerSum > playerSum) {
            Message = "House Wins!";
        } else {
            Message = "Player Wins!";
        }
        if (dealerSum > 21) {
            Message = "Player Wins!";
        }
        // if (dealerSum = playerSum) {
        // Message = "Player Wins!";
        // } 
        return dealerSum
    });

    $('#hit').on('click', function () {
        playerHand.push(cards[Math.floor(Math.random() * cards.length)]);
        console.log("PLAYERHAND", playerHand)
    });

}

$('button').on('click', () => {
    $('.message').html('Player Wins!!!')
})


