
	var wordList = ["miami", "pictureit", "pussycat"]
	var wordListIndex = 0;
	var guessedLetters = [];
	var wordGuessedSoFar =[];

	var wins=0;
	var losses=0;
	var currentWord;
	var maxNumberGuesses = 12;
	var numGuesses = 0;
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("losses").innerHTML = losses;
	
	currentWord = wordList[wordListIndex];
	for(var x = 0; x < currentWord.length; x++) {
		wordGuessedSoFar.push('_');
	}
	printWordGuessedSoFar();

	document.onkeyup = function(event){
		// after going though the wordList array this will start the array over
		if(wordListIndex >= wordList.length){
			wordListIndex = 0;
			currentWord = wordList[wordListIndex];
			for(var x = 0; x < currentWord.length; x++) {
				wordGuessedSoFar.push('_');
			}
		}
		// The userGuess is the letter the user just typed in
		var userGuess=String.fromCharCode(event.keyCode).toLowerCase();

		var correctGuess = false;
		checkUsedLetters(userGuess);
		checkForLetterInCurrentWord(userGuess);
		var wordsTheSame = true;
		for(var i = 0; i < currentWord.length; i++){
			if(currentWord[i] != wordGuessedSoFar[i]){
				wordsTheSame = false;
			}

		}
		if(wordsTheSame === true){
			wins++;
			document.getElementById("wins").innerHTML = wins;
			numGuesses = 0;
			wordListIndex++;
			guessedLetters = [];
			printGuessLetters();
			wordGuessedSoFar = [];
			currentWord = wordList[wordListIndex];
			for(var x = 0; x < currentWord.length; x++) {
				wordGuessedSoFar.push('_');
			}
			printWordGuessedSoFar();
		}
		else if (numGuesses === maxNumberGuesses){
			losses++;
			document.getElementById("losses").innerHTML = losses;
			numGuesses = 0;
			wordListIndex++;
			guessedLetters = [];
			printGuessLetters();
			wordGuessedSoFar = [];
			currentWord = wordList[wordListIndex];
			for(var x = 0; x < currentWord.length; x++) {
				wordGuessedSoFar.push('_');
			}
			printWordGuessedSoFar();
		}

		//this is for testing

		console.log("letters guessed so far are " + printGuessLetters());
		console.log("word guessed so far is " + printWordGuessedSoFar());

		//alert(userGuess);
		
	}

	
	
	
	//checks guessedLetters array to see if current letter has been guessed
	function checkUsedLetters(userGuess){
		var found = false;
		for (var i = 0; i < guessedLetters.length; i++){
			if (guessedLetters[i] === userGuess){
				found = true;
			}
		}
		if(found === false){
			guessedLetters.push(userGuess);
		}
		numGuesses++;
	}
	
	// the letters the user has already guessed
	function updateLettersGuessed(userGuess){
		guessedLetters.push(userGuess);

	}

	// checks all lettering positions for userGuess
	function checkForLetterInCurrentWord(userGuess){
		
		for(var i = 0; i < currentWord.length;i++) {
    		if (currentWord [i] === userGuess){ 
    			wordGuessedSoFar[i] = userGuess;
    		}
		}
	}
	function printWordGuessedSoFar(){
		var printedWord = "";
		for(var i =0; i < wordGuessedSoFar.length; i++){
			//console.log(wordGuessedSoFar[i]);
			printedWord += wordGuessedSoFar[i];
		}
		document.getElementById("word").innerHTML = printedWord;
	}
	function printGuessLetters(){
		var printedLetters = "";
		for (var i = 0; i < guessedLetters.length; i++){
			printedLetters += guessedLetters[i];
		}
		document.getElementById("lettersguessed").innerHTML = printedLetters;
	}
/*
	// this for loop goes through wordList as the user correctly answers
	for (var i = 0; i< wordList.length; i++) {
			//console.log(wordList[i]);
		currentWord = wordList[i];
		for(var x = 0; x < currentWord.length; x++) {
			wordGuessedSoFar.push('_');
		}


		// this is for testing
		console.log("currentWord is " + currentWord);
	}
*/
// guessedLetters.push(something)
