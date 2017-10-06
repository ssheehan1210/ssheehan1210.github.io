console.log("Window is running");

let turnTime = 15;
let roundNumber = 1;

const playerOneNumber = 1;
const playerTwoNumber = 2;
let playerOneName = "Player 1";
let playerOneScore = 0;
let playerTwoName = "Player 2";
let playerTwoScore = 0;

let currentPlayerTurn = playerOneNumber;

let potentialScore = 0;

let correctAnswer = "";
let correctAnswerText = "";

$('#p1-points-display').text(`${playerOneName}: ${playerOneScore}pts`);
$('#p2-points-display').text(`${playerTwoName}: ${playerTwoScore}pts`);



$.ajax({
	url: 'http://jservice.io/api/category',
	type: 'GET',
	dataType: 'Json',
	data: { id: 67 }, // Television category
	success: (res) => {
		console.log(res, ' this is the response from the server');
		const $televisionQuestion = $('#question-text');
		$('#active-modal').on('shown.bs.modal', (e) => {
			if (e.relatedTarget.id === "cat1-100") { // The Simpsons
				correctAnswerText = res.clues[33].answer;
				const $teleQuestionOne = $('<p>');
				$teleQuestionOne.attr('class', 'tv-question');
				$televisionQuestion.append($teleQuestionOne);
				$('.tv-question').text(res.clues[33].question);
			} else if (e.relatedTarget.id === "cat1-200") { // Chihuahua
				correctAnswerText = res.clues[96].answer;
				const $teleQuestionTwo = $('<p>');
				$teleQuestionTwo.attr('class', 'tv-question');
				$televisionQuestion.append($teleQuestionTwo);
				$('.tv-question').text(res.clues[96].question);
			} else if (e.relatedTarget.id === "cat1-300") { // Seinfeld
				correctAnswerText = res.clues[114].answer;
				const $teleQuestionThree = $('<p>');
				$teleQuestionThree.attr('class', 'tv-question');
				$televisionQuestion.append($teleQuestionThree);
				$('.tv-question').text(res.clues[114].question);
			} else if (e.relatedTarget.id === "cat1-400") { // Gilligan
				correctAnswerText = res.clues[190].answer;
				const $teleQuestionFour = $('<p>');
				$teleQuestionFour.attr('class', 'tv-question');
				$televisionQuestion.append($teleQuestionFour);
				$('.tv-question').text(res.clues[190].question);
			} else if (e.relatedTarget.id === "cat1-500") { // Rocko
				correctAnswerText = res.clues[215].answer;
				const $teleQuestionFive = $('<p>');
				$teleQuestionFive.attr('class', 'tv-question');
				$televisionQuestion.append($teleQuestionFive);
				$('.tv-question').text(res.clues[215].question);
			}
			e.relatedTarget.disabled = true;
		});
		$('#active-modal').on('hidden.bs.modal', (e) => {
			$('.tv-question').remove();
		});
	},
	error: (err) => {
		console.log(err, ' this is the error message from the server');
	}
})

$.ajax({
	url: 'http://jservice.io/api/category',
	type: 'GET',
	dataType: 'Json',
	data: { id: 1892 }, // Video Games category
	success: (res) => {
		console.log(res, ' this is the response from the server');
		const $videoQuestion = $('#question-text');
		$('#active-modal').on('shown.bs.modal', (e) => {
			if (e.relatedTarget.id === "cat2-100") { // Game Boy
				correctAnswerText = res.clues[0].answer;
				const $videoQuestionOne = $('<p>');
				$videoQuestionOne.attr('class', 'video-question');
				$videoQuestion.append($videoQuestionOne);
				$('.video-question').text(res.clues[0].question);
			} else if (e.relatedTarget.id === "cat2-200") { // Everquest
				correctAnswerText = "Everquest";
				const $videoQuestionTwo = $('<p>');
				$videoQuestionTwo.attr('class', 'video-question');
				$videoQuestion.append($videoQuestionTwo);
				$('.video-question').text(res.clues[9].question);
			} else if (e.relatedTarget.id === "cat2-300") { // Mii
				correctAnswerText = res.clues[17].answer;
				const $videoQuestionThree = $('<p>');
				$videoQuestionThree.attr('class', 'video-question');
				$videoQuestion.append($videoQuestionThree);
				$('.video-question').text(res.clues[17].question);
			} else if (e.relatedTarget.id === "cat2-400") { // Pac-Man
				correctAnswerText = res.clues[11].answer;
				const $videoQuestionFour = $('<p>');
				$videoQuestionFour.attr('class', 'video-question');
				$videoQuestion.append($videoQuestionFour);
				$('.video-question').text(res.clues[11].question);
			} else if (e.relatedTarget.id === "cat2-500") { // Donkey Kong
				correctAnswerText = res.clues[14].answer;
				const $videoQuestionFive = $('<p>');
				$videoQuestionFive.attr('class', 'video-question');
				$videoQuestion.append($videoQuestionFive);
				$('.video-question').text(res.clues[14].question);
			}
			e.relatedTarget.disabled = true;
		});
		$('#active-modal').on('hidden.bs.modal', (e) => {
			$('.video-question').remove();
		});
	},
	error: (err) => {
		console.log(err, ' this is the error message from the server');
	}
})

$.ajax({
	url: 'http://jservice.io/api/category',
	type: 'GET',
	dataType: 'Json',
	data: { id: 309 }, // Movies category
	success: (res) => {
		console.log(res, ' this is the response from the server');
		const $movieQuestion = $('#question-text');
		$('#active-modal').on('shown.bs.modal', (e) => {
			if (e.relatedTarget.id === "cat3-100") { // Space Jam
				correctAnswerText = "Space Jam";
				const $movieQuestionOne = $('<p>');
				$movieQuestionOne.attr('class', 'movie-question');
				$movieQuestion.append($movieQuestionOne);
				$('.movie-question').text(res.clues[26].question);
			} else if (e.relatedTarget.id === "cat3-200") { // Disturbia
				correctAnswerText = "Disturbia";
				const $movieQuestionTwo = $('<p>');
				$movieQuestionTwo.attr('class', 'movie-question');
				$movieQuestion.append($movieQuestionTwo);
				$('.movie-question').text(res.clues[106].question);
			} else if (e.relatedTarget.id === "cat3-300") { // Jackie Chan
				correctAnswerText = res.clues[96].answer;
				const $movieQuestionThree = $('<p>');
				$movieQuestionThree.attr('class', 'movie-question');
				$movieQuestion.append($movieQuestionThree);
				$('.movie-question').text(res.clues[96].question);
			} else if (e.relatedTarget.id === "cat3-400") { // The Glass Menagerie
				correctAnswerText = "The Glass Menagerie";
				const $movieQuestionFour = $('<p>');
				$movieQuestionFour.attr('class', 'movie-question');
				$movieQuestion.append($movieQuestionFour);
				$('.movie-question').text(res.clues[89].question);
			} else if (e.relatedTarget.id === "cat3-500") { // Damn
				correctAnswerText = "Damn";
				const $movieQuestionFive = $('<p>');
				$movieQuestionFive.attr('class', 'movie-question');
				$movieQuestion.append($movieQuestionFive);
				$('.movie-question').text(res.clues[4].question);
			}
			e.relatedTarget.disabled = true;
		});
		$('#active-modal').on('hidden.bs.modal', (e) => {
			$('.movie-question').remove();
		});
	},
	error: (err) => {
		console.log(err, ' this is the error message from the server');
	}
})

$.ajax({
	url: 'http://jservice.io/api/category',
	type: 'GET',
	dataType: 'Json',
	data: { id: 760 }, // Comic Books category
	success: (res) => {
		console.log(res, ' this is the response from the server');
		const $comicQuestion = $('#question-text');
		$('#active-modal').on('shown.bs.modal', (e) => {
			if (e.relatedTarget.id === "cat4-100") { // Robin
				correctAnswerText = res.clues[1].answer;
				const $comicQuestionOne = $('<p>');
				$comicQuestionOne.attr('class', 'comic-question');
				$comicQuestion.append($comicQuestionOne);
				$('.comic-question').text(res.clues[1].question);
			} else if (e.relatedTarget.id === "cat4-200") { // Flash
				correctAnswerText = "Flash";
				const $comicQuestionTwo = $('<p>');
				$comicQuestionTwo.attr('class', 'comic-question');
				$comicQuestion.append($comicQuestionTwo);
				$('.comic-question').text(res.clues[5].question);
			} else if (e.relatedTarget.id === "cat4-300") { // Hulk
				correctAnswerText = "Hulk";
				const $comicQuestionThree = $('<p>');
				$comicQuestionThree.attr('class', 'comic-question');
				$comicQuestion.append($comicQuestionThree);
				$('.comic-question').text(res.clues[7].question);
			} else if (e.relatedTarget.id === "cat4-400") { // Ellery Queen
				correctAnswerText = res.clues[4].answer;
				const $comicQuestionFour = $('<p>');
				$comicQuestionFour.attr('class', 'comic-question');
				$comicQuestion.append($comicQuestionFour);
				$('.comic-question').text(res.clues[4].question);
			} else if (e.relatedTarget.id === "cat4-500") { // Police Academy
				correctAnswerText = "Police Academy";
				const $comicQuestionFive = $('<p>');
				$comicQuestionFive.attr('class', 'comic-question');
				$comicQuestion.append($comicQuestionFive);
				$('.comic-question').text(res.clues[0].question);
			}
			e.relatedTarget.disabled = true;
		});
		$('#active-modal').on('hidden.bs.modal', (e) => {
			$('.comic-question').remove();
		});
	},
	error: (err) => {
		console.log(err, ' this is the error message from the server');
	}
})

$.ajax({
	url: 'https://pokeapi.co/api/v2/pokemon/170/',
	type: 'GET',
	dataType: 'Json',
	success: (res) => {
		console.log(res, ' this is the response message from the server');
		const $firstPokeQuestion = $('#question-text');
		$('#active-modal').on('shown.bs.modal', (e) => {
			if (e.relatedTarget.id === "cat5-100") { // Chinchou
				correctAnswerText = "Chinchou";
				const $pokeImageOne = $('<img>');
				$pokeImageOne.attr('id', 'first-poke-image');
				$pokeImageOne.attr('src', res.sprites.front_default);
				$firstPokeQuestion.append($pokeImageOne);
			}
			e.relatedTarget.disabled = true;
		});
		$('#active-modal').on('hidden.bs.modal', (e) => {
			$('#first-poke-image').remove();
		});
	},
	error: (err) => {
		console.log(err, ' this is the error message from the server');
	}
})

$.ajax({
	url: 'https://pokeapi.co/api/v2/pokemon/420/',
	type: 'GET',
	dataType: 'Json',
	success: (res) => {
		console.log(res, ' this is the response message from the server');
		const $secondPokeQuestion = $('#question-text');
		$('#active-modal').on('shown.bs.modal', (e) => {
			if (e.relatedTarget.id === "cat5-200") { // Cherubi
				correctAnswerText = "Cherubi";
				const $pokeImageTwo = $('<img>');
				$pokeImageTwo.attr('id', 'second-poke-image');
				$pokeImageTwo.attr('src', res.sprites.front_default);
				$secondPokeQuestion.append($pokeImageTwo);
			}
			e.relatedTarget.disabled = true;
		});
		$('#active-modal').on('hidden.bs.modal', (e) => {
			$('#second-poke-image').remove();
		});
	},
	error: (err) => {
		console.log(err, ' this is the error message from the server');
	}
})

$.ajax({
	url: 'https://pokeapi.co/api/v2/pokemon/700/',
	type: 'GET',
	dataType: 'Json',
	success: (res) => {
		console.log(res, ' this is the response message from the server');
		const $thirdPokeQuestion = $('#question-text');
		$('#active-modal').on('shown.bs.modal', (e) => {
			if (e.relatedTarget.id === "cat5-300") { // Sylveon
				correctAnswerText = "Sylveon";
				const $pokeImageThree = $('<img>');
				$pokeImageThree.attr('id', 'third-poke-image');
				$pokeImageThree.attr('src', res.sprites.front_default);
				$thirdPokeQuestion.append($pokeImageThree);
			}
			e.relatedTarget.disabled = true;
		});
		$('#active-modal').on('hidden.bs.modal', (e) => {
			$('#third-poke-image').remove();
		});
	},
	error: (err) => {
		console.log(err, ' this is the error message from the server');
	}
})

$.ajax({
	url: 'https://pokeapi.co/api/v2/pokemon/42/',
	type: 'GET',
	dataType: 'Json',
	success: (res) => {
		console.log(res, ' this is the response message from the server');
		const $fourthPokeQuestion = $('#question-text');
		$('#active-modal').on('shown.bs.modal', (e) => {
			if (e.relatedTarget.id === "cat5-400") { // Golbat
				correctAnswerText = "Golbat";
				const $pokeImageFour = $('<img>');
				$pokeImageFour.attr('id', 'fourth-poke-image');
				$pokeImageFour.attr('src', res.sprites.front_default);
				$fourthPokeQuestion.append($pokeImageFour);
			}
			e.relatedTarget.disabled = true;
		});
		$('#active-modal').on('hidden.bs.modal', (e) => {
			$('#fourth-poke-image').remove();
		});
	},
	error: (err) => {
		console.log(err, ' this is the error message from the server');
	}
})

$.ajax({
	url: 'https://pokeapi.co/api/v2/pokemon/577/',
	type: 'GET',
	dataType: 'Json',
	success: (res) => {
		console.log(res, ' this is the response message from the server');
		const $fifthPokeQuestion = $('#question-text');
		$('#active-modal').on('shown.bs.modal', (e) => {
			if (e.relatedTarget.id === "cat5-500") { // Solosis
				correctAnswerText = "Solosis";
				const $pokeImageFive = $('<img>');
				$pokeImageFive.attr('id', 'fifth-poke-image');
				$pokeImageFive.attr('src', res.sprites.front_default);
				$fifthPokeQuestion.append($pokeImageFive);
			}
			e.relatedTarget.disabled = true;
		});
		$('#active-modal').on('hidden.bs.modal', (e) => {
			$('#fifth-poke-image').remove();
		});
	},
	error: (err) => {
		console.log(err, ' this is the error message from the server');
	}
})



// When we click a button, the timer should start
$('.question-select').on('click', (e) => {
	console.log("It clicked!");
	correctAnswer = "";
	potentialScore = parseInt(e.currentTarget.innerText);

	setTimer();

	if (e.currentTarget.id === "cat1-100" || e.currentTarget.id === "cat1-200" || e.currentTarget.id === "cat1-300" || e.currentTarget.id === "cat1-400" || e.currentTarget.id === "cat1-500"){
		$('#active-modalLabel').text(`Television for ${e.currentTarget.innerText}:`);
	} else if (e.currentTarget.id === "cat2-100" || e.currentTarget.id === "cat2-200" || e.currentTarget.id === "cat2-300" || e.currentTarget.id === "cat2-400" || e.currentTarget.id === "cat2-500"){
		$('#active-modalLabel').text(`Video Games for ${e.currentTarget.innerText}:`);
	} else if (e.currentTarget.id === "cat3-100" || e.currentTarget.id === "cat3-200" || e.currentTarget.id === "cat3-300" || e.currentTarget.id === "cat3-400" || e.currentTarget.id === "cat3-500"){
		$('#active-modalLabel').text(`Movies for ${e.currentTarget.innerText}:`);
	} else if (e.currentTarget.id === "cat4-100" || e.currentTarget.id === "cat4-200" || e.currentTarget.id === "cat4-300" || e.currentTarget.id === "cat4-400" || e.currentTarget.id === "cat4-500"){
		$('#active-modalLabel').text(`Comic Books for ${e.currentTarget.innerText}:`);
	} else if (e.currentTarget.id === "cat5-100" || e.currentTarget.id === "cat5-200" || e.currentTarget.id === "cat5-300" || e.currentTarget.id === "cat5-400" || e.currentTarget.id === "cat5-500"){
		$('#active-modalLabel').text(`Pokemon for ${e.currentTarget.innerText}:`);
	}

	$('#p1-question-name').text(`${playerOneName}`);
	$('#p2-question-name').text(`${playerTwoName}`);

	$('#p1-points-counter').text(`Points: ${playerOneScore}`);
	$('#p2-points-counter').text(`Points: ${playerTwoScore}`);

	if (currentPlayerTurn === playerOneNumber) {
		$('#question-p1-indicator').show();
		$('#question-p2-indicator').hide();
	} else if (currentPlayerTurn === playerTwoNumber) {
		$('#question-p1-indicator').hide();
		$('#question-p2-indicator').show();
	}
});

$('#answer-button').on('click', () => {
	console.log("Answer button is still working!!!");
	if ($('#message-text')[0].value === correctAnswerText) { // if player's answer is right
		console.log("Player One: " + playerOneScore);
		console.log("Player Two: " + playerTwoScore);
		turnTime = 15;
		correctAnswer = true;
		if (currentPlayerTurn === playerOneNumber) {
			playerOneScore += potentialScore;
		} else if (currentPlayerTurn === playerTwoNumber) {
			playerTwoScore += potentialScore;
		}

		$('#p1-correct-name').text(`${playerOneName}`);
		$('#p2-correct-name').text(`${playerTwoName}`);

		$('#p1-correct-points').text(`Points: ${playerOneScore}`);
		$('#p2-correct-points').text(`Points: ${playerTwoScore}`);

	} else if ($('#message-text')[0].value ==! correctAnswerText) { // if the answer is wrong
		console.log("Player One: " + playerOneScore);
		console.log("Player Two: " + playerTwoScore);
		turnTime = 15;
		correctAnswer = false;
		if (currentPlayerTurn === playerOneNumber) {
			playerOneScore += 0;
		} else if (currentPlayerTurn === playerTwoNumber) {
			playerTwoScore += 0;
		}

		$('#p1-incorrect-name').text(`${playerOneName}`);
		$('#p2-incorrect-name').text(`${playerTwoName}`);

		$('#p1-incorrect-points').text(`Points: ${playerOneScore}`);
		$('#p2-incorrect-points').text(`Points: ${playerTwoScore}`);
	}
});

$('#correct-return-button').on('click', () => {
	console.log("Return to the Game");
	if (currentPlayerTurn === playerOneNumber) {
		currentPlayerTurn = playerTwoNumber;
		$('#p1-turn-indicator').toggle();
		$('#p2-turn-indicator').toggle();
	} else if (currentPlayerTurn === playerTwoNumber) {
		currentPlayerTurn = playerOneNumber;
		$('#p1-turn-indicator').toggle();
		$('#p2-turn-indicator').toggle();
	}
	console.log(currentPlayerTurn);
	console.log("Does this look right?");
	$('#p1-points-display').text(`${playerOneName}: ${playerOneScore}pts`);
	$('#p2-points-display').text(`${playerTwoName}: ${playerTwoScore}pts`);
});

$('#incorrect-return-button').on('click', () => {
	console.log("Now returning");
	if (currentPlayerTurn === playerOneNumber) {
		currentPlayerTurn = playerTwoNumber;
		$('#p1-turn-indicator').toggle();
		$('#p2-turn-indicator').toggle();
	} else if (currentPlayerTurn === playerTwoNumber) {
		currentPlayerTurn = playerOneNumber;
		$('#p1-turn-indicator').toggle();
		$('#p2-turn-indicator').toggle();
	}
	console.log(currentPlayerTurn);
	console.log("Does this look right?");

	roundNumber++;

	$('#p1-points-display').text(`${playerOneName}: ${playerOneScore}pts`);
	$('#p2-points-display').text(`${playerTwoName}: ${playerTwoScore}pts`);
});



const setTimer = () => {
	const timer = setInterval(() => {

		turnTime--;

		if (correctAnswer === true) {
			clearInterval(timer);
			$('#answer-modal').modal('toggle');
			turnTime = 15;
		} else if (correctAnswer === false) {
			clearInterval(timer);
			$('#incorrect-modal').modal('toggle');
			turnTime = 15;
		} else if (turnTime === 0) {
			clearInterval(timer);
			$('#active-modal').modal('hide');
			$('#incorrect-modal').modal('toggle');
			$('#p1-incorrect-name').text(`${playerOneName}`);
			$('#p2-incorrect-name').text(`${playerTwoName}`);
			$('#p1-incorrect-points').text(`Points: ${playerOneScore}`);
			$('#p2-incorrect-points').text(`Points: ${playerTwoScore}`);
			turnTime = 15;
		}

		$('#timer-counter').text(`${turnTime}s`); // updates the time on the board

	}, 1000); // each interval happens after every second
}



if (roundNumber > 25) {
	if (playerOneScore > playerTwoScore) {
		alert("GAME OVER! The winner is: " + playerOneName + "!");
	} else if (playerTwoScore > playerOneScore) {
		alert("GAME OVER! The winner is: " + playerTwoName + "!");
	} else if (playerOneScore === playerTwoScore) {
		alert("GAME OVER! This game is a draw!");
	}
}



console.log("Finished running js file");
