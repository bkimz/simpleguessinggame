// var answer = 55;
// var counter = 0;
// var guess = prompt("Guess a number between 1-100");
// var guessedNumber = Number(guess);

// if(guessedNumber === answer){
// 	prompt("You guessed correctly!");
// }

// else if (guessedNumber < answer){
// 	alert("Your guess is too low! Try a higher number");
	
// }

// else {
// 	alert("Your guess is too high! Try a lower number")
// }



// lets try to make it so you don't have to refresh the page every time.

var isCorrect = false;
var answer = 4;

while(isCorrect === false){

	var guess = prompt("Guess a number between 1-100");
	var guessedNumber = Number(guess);
	
	if(guessedNumber === answer){
	prompt("You guessed correctly!");
	isCorrect = true;
}

else if (guessedNumber < answer){
	alert("Your guess is too low! Try a higher number");
	
}

else {
	alert("Your guess is too high! Try a lower number")
}


}












