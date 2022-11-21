let animals = ['fox', 'cat', 'dog', 'hamster', 'squirrel'];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
//gamePattern = userClickedPattern;

$(document).keydown(function() {
  if(!started){
    $('h1').text('Who ate the food')
    startGame()
    started = true;
  }
})


function startGame() {
  let randomNumber = Math.floor(Math.random() * 5);
  let randomClick = animals[randomNumber];
  gamePattern.push(randomClick);
  $('#' + randomClick).fadeIn(200).fadeOut(200).fadeIn(200)
  console.log(gamePattern)
}

//let player to choose

$('.btn').click(function() {
  let myClicks = $(this).attr('id');
  userClickedPattern.push(myClicks)
  animateButtons(myClicks)
  checkAnswer(userClickedPattern.length - 1)
  console.log(userClickedPattern)
})

//adding animation to my buttons when user clicks them

function animateButtons(currentColor) {
  $('#' + currentColor).addClass('pressed');
  setTimeout(function() {
    $('#' + currentColor).removeClass('pressed')
  }, 1000)
}

function checkAnswer() {
  let makeit = gamePattern.toString();
  let makeout = userClickedPattern.toString();
  if (gamePattern.length === userClickedPattern.length) {
    setTimeout(function() {
      startGame()
    }, 1000)
  }
  if (makeit === makeout) {
    $('h1').text(gamePattern + ' ate the food');
    $('h1').text(userClickedPattern.slice(-1)[0] + ' ate the food')
  }else{
    $('body').addClass('game-over');
    setTimeout(function(){
      $('body').removeClass('game-over');
    }, 400)
    $('h1').text('GAME OVER,Restart The Page To Start Over');
    startOver()
  }
}



function startOver(){
gamePattern = []
started = false;
}
