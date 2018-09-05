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
    console.log(playerHand)
}
playerOne()


var dealerHand = []

var dealer = function () {
    dealerHand.push(cards[Math.floor(Math.random() * cards.length)]);
    dealerHand.push(cards[Math.floor(Math.random() * cards.length)]);
    console.log(dealerHand)
}
dealer()

window.onload = function () {
    $('#start').click(dealer)
}

window.onload = function () {
    $('#start').click(playerOne)
}

$('#hit').on('click', function(){
    playerHand.push(cards[Math.floor(Math.random() * cards.length)]);
});
/*if you want to specifically name this function with an on-click event, do like so
$('#hit').on('click', addCard());
function addCard(){
playerHand.push(cards[Math.floor(Math.random() * cards.length)]);
} */
  
        
