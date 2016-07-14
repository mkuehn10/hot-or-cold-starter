
$(document).ready(function(){

    'use strict';

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    var numberToGuess;

    function generateNumber(max, min) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    function newGame() {
        $('#feedback').text('Make your Guess!');
        $('#count').text('0');
        $('#guessList').text('');
        $('#userGuess').val('');
        numberToGuess = generateNumber(100, 1);
        console.log(numberToGuess);
    }

    function processGuess(event, guess) {
      // event.preventDefault();
      $('#userGuess').removeClass('red-border');
      console.log("Guess entered " + guess);


      $('#userGuess').val('');
    }

    function validateGuess(guess) {
      if (parseInt(guess) == guess) {
        processGuess(event, guess);
      } else {
        console.log("Invalid guess!");

        $('#userGuess').addClass('red-border');
        $('#userGuess').val('');
      }

    }

    newGame();

    $('.new').click(newGame);

    $('form').submit(function(event) {
      event.preventDefault();
      // $('#guessButton').val();
      validateGuess($('#userGuess').val());
      //processGuess(event, $('#userGuess').val());
    });

    $('#guessButton').keypress(function(event) {
      if (event.keyCode === 13) {
        $('form').submit();
      }
    });
});


