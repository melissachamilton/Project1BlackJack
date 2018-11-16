var cards = [{
    Name: "King",
    Value: 10,
    Img: '<img src="KingofHearts.jpg" alt="King of Hearts">'
},
{
    Name: "Queen",
    Value: 10,
    Img: '<img src = "QueenofDiamonds.png" alt="Queen of Diamonds">'
},
{
    Name: "Jack",
    Value: 10,
    Img: '<img src="JackofSpades.jpeg" alt="Jack of Spades">'
  
},
{
    Name: "Card10",
    Value: 10,
    Img: '<img src="10ofDiamonds.jpeg" alt="10 of Diamonds">'
},
{
    Name: "Card9",
    Value: 9,
    Img: '<img src="9ofClubs.png" alt= "9 of Clubs">'
},
{
    Name: "Card8",
    Value: 8,
    Img: '<img src="8ofclubs.png" alt = "8 of Clubs">'
},

{
    Name: "Card7",
    Value: 7,
    Img: '<img src="7ofSpades.png" alt="7 of Spades">'
},
{
    Name: "Card6",
    Value: 6,
    Img: '<img src="6ofspades.png" alt="6 of Spades">'
},
{
    Name: "Card5",
    Value: 5,
    Img: '<img src="5ofdiamonds.png" alt="5 of Diamonds">'
},
{
    Name: "Card4",
    Value: 4,
    Img: '<img src="4ofhearts.png" alt="4 of Hearts">'
},
{
    Name: "Card3",
    Value: 3,
    Img: '<img src="3ofclubs.png" alt = "3 of Clubs">'
},
{
    Name: "Card2",
    Value: 2,
    Img: '<img src = "2ofhearts.png" alt = "2 of hearts">'
},
]

var playerHand = []

var playerOne = function () {
playerHand.push(cards[Math.floor(Math.random() * cards.length)]);
playerHand.push(cards[Math.floor(Math.random() * cards.length)]);
console.log("PLAYER HAND", playerHand)
}


var dealerHand = [];
var dealer = function () {

dealerHand.push(cards[Math.floor(Math.random() * cards.length)] );
dealerHand.push(cards[Math.floor(Math.random() * cards.length)]);

console.log("DEALER HAND", dealerHand)
}


window.onload = function () {
$('#deal').click(dealer)
$('#deal').click(playerOne)
$('#deal').on('click', function () {
  for (var i = 0; i < playerHand.length; i++) {
    var aCard = playerHand[i]
    var eachCard = aCard.Img 
    var image=$('.pimage').append(eachCard)
}
return image
})

$('#deal').on('click', function () {
  for (var i = 0; i < dealerHand.length; i++) {
    var bCard = dealerHand[i]
    var eachBCard = bCard.Img
    var image=$('.dimage').append(eachBCard)
}
return image
})

$('#hit').on('click', function () {
  playerHand.push(cards[Math.floor(Math.random() * cards.length)]);
  console.log("PLAYERHAND", playerHand)
  var aCard = playerHand[playerHand.length - 1]
    // var aCard = playerHand[2]
    console.log("AHITCard", aCard)
    var eachCard = aCard.Img 
    console.log("Each HIT Card", eachCard)
    var image=$('.pimage').append(eachCard)
    console.log("HITImage", image)
  // }

return image
})


$('#stay').on('click', function () {
    playerSum = 0
    for (var i = 0; i < playerHand.length; i++) {
        var aCard = playerHand[i]
        var cardValue = aCard.Value
        playerSum += cardValue

        console.log("PLAYER SUM", playerSum)

    }

    return playerSum

})


$('#stay').on('click', function () {
    dealerSum = 0
    for (var i = 0; i < dealerHand.length; i++) {
      var aCard = dealerHand[i]
      var cardValue = aCard.Value
      dealerSum += cardValue
     console.log("Dealer Sum", dealerSum)
    }
    return dealerSum
    
    
  })
  $('#stay').on('click', function () {
     if (playerSum >= dealerSum && dealerSum <=21 && playerSum <21) {
      dealerHand.push(cards[Math.floor(Math.random() * cards.length)]);
        var aCard = dealerHand[dealerHand.length - 1]
        var cardValue = aCard.Value
        dealerSum += cardValue
       console.log(" New Dealer Sum", dealerSum)}

       if (playerSum >= dealerSum && dealerSum <=21 && playerSum <21) {
        dealerHand.push(cards[Math.floor(Math.random() * cards.length)]);
          var aCard = dealerHand[dealerHand.length - 1]
          var cardValue = aCard.Value
          dealerSum += cardValue
            console.log ("New New Dealer Sum", dealerSum)}
      
    if (dealerSum > playerSum && dealerSum <=21 ) {swal(
      "House Wins!");
  }
  if (playerSum > dealerSum && playerSum <=21) {swal(
      "Player Wins!");
  }
  if (dealerSum > 21) {swal(
    "Dealer Bust!");
}
if (playerSum > 21) {swal(
  "Player Bust!");
}
    
    })
    
  
  
  
  



  

    

}
