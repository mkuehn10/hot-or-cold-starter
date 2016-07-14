$(document).ready(function(){

    'use strict';

	/*--- Display information modal box ---*/
  	$('.what').click(function(){
    	$('.overlay').fadeIn(1000);
  	});
  	/*--- Hide information modal box ---*/
  	$('a.close').click(function(){
  		$('.overlay').fadeOut(1000);
  	});

    var numberToGuess;

    function newGame() {
        $('#feedback').text('Make your Guess!');
        $('#count').text('0');
        $('#guessList').text('');
        $('#userGuess').val('');
        numberToGuess = Math.floor(Math.random() * (100 - 1)) + 1;
        console.log(numberToGuess);
    }

    newGame();

    $('.new').click(newGame);
});