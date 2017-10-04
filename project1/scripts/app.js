console.log("Window is running");

let turnTime = 10;
let buzzerTime = 10;

let playerOneName = "Sam";
let playerOneScore = 0;
let playerTwoName = "James";
let playerTwoScore = 0;

let potentialScore = 0;

// const $answerButton = $('#answer-button');
// const $myModal = $('#active-modal');
let correctAnswer = "";

$('#p1-points-display').text(`${playerOneName}: ${playerOneScore}pts`);
$('#p2-points-display').text(`${playerTwoName}: ${playerTwoScore}pts`);



// When we click the begin button, the timer should start
$('.question-select').on('click', (e) => {
	console.log("It clicked!");
	correctAnswer = "";
	potentialScore = parseInt(e.currentTarget.innerText);
	// if (e.currentTarget.id === "cat1-100" || e.currentTarget.id === "cat2-100" || e.currentTarget.id === "cat3-100" || e.currentTarget.id === "cat4-100" || e.currentTarget.id === "cat5-100" || e.currentTarget.id === "cat1-200" || e.currentTarget.id === "cat2-200" || e.currentTarget.id === "cat3-200" || e.currentTarget.id === "cat4-200" || e.currentTarget.id === "cat5-200" || e.currentTarget.id === "cat1-300" || e.currentTarget.id === "cat2-300" || e.currentTarget.id === "cat3-300" || e.currentTarget.id === "cat4-300" || e.currentTarget.id === "cat5-300" || e.currentTarget.id === "cat1-400" || e.currentTarget.id === "cat2-400" || e.currentTarget.id === "cat3-400" || e.currentTarget.id === "cat4-400" || e.currentTarget.id === "cat5-400" || e.currentTarget.id === "cat1-500" || e.currentTarget.id === "cat2-500" || e.currentTarget.id === "cat3-500" || e.currentTarget.id === "cat4-500" || e.currentTarget.id === "cat5-500") {
		// console.log("Category Button Hit!");

	// const timer = setInterval(() => {
	// 	correctAnswer = false;
	// 	turnTime--;
	// 	if (turnTime === 0) {
	// 		clearInterval(timer); // ends the countdown
	// 		$('#active-modal').modal('toggle');
	// 		$('#incorrect-modal').modal('toggle');
	// 		turnTime = 10;
	// 	} else if (correctAnswer === true) {
	// 		clearInterval(timer);
	// 		$('#active-modal').modal('toggle');
	// 		$('#answer-modal').modal('toggle');
	// 	}
	// 	$('#timer-counter').text(`${turnTime}s`); // updates the time on the board
	// }, 1000);

	setTimer();

	$('#buzzer-button').on('click', () => {
		console.log("Buzzer button is still working!!!");
	});
});

$('#answer-button').on('click', () => {
	console.log("Answer button is still working!!!");
	// clearInterval(timer);
	if ($('#message-text')[0].value === "Hello") { // if player's answer is right
		// $('#answer-modal').modal('toggle'); // opens modal for correct answers
		console.log(playerOneScore);
		turnTime = 10;
		correctAnswer = true;
		playerOneScore += potentialScore;
		// playerOneScore += parseInt(e.currentTarget.innerText);
		$('#return-button').on('click', () => {
			console.log("Return to the Game");
			console.log(playerOneScore);
		});
	// } else if ($('#message-text')[0].value === "Greet") {
	// 	// $('#answer-modal').modal('toggle'); // opens modal for correct answers
	// 	// playerOneScore += parseInt(e.currentTarget.innerText);
	// 	$('#return-button').on('click', () => {
	// 		console.log("Return to the Game");
	// 	});
	} else if ($('#message-text')[0].value ==! "Hello") {
		turnTime = 10;
		correctAnswer = false;
		playerOneScore += 0;
		// $('#incorrect-modal').modal('toggle'); // opens modal for wrong answers
		$('#incorrect-return-button').on('click', () => {
			console.log("Now returning");
			console.log(playerOneScore);
		});
	}
	// turnTime = 10;
	console.log("Does this look right?");
	// $('#message-text').empty();
	$('#p1-points-display').text(`${playerOneName}: ${playerOneScore}pts`);
	$('#p2-points-display').text(`${playerTwoName}: ${playerTwoScore}pts`);
});
	// } else if (e.currentTarget.id === "return-button" || e.currentTarget.id === "incorrect-return-button") {
	// 	console.log("Return to Game Board Button Hit!");
	// }
// $('#p1-points-display').text(`${playerOneName}: ${playerOneScore}pts`);
// $('#p2-points-display').text(`${playerTwoName}: ${playerTwoScore}pts`);
// });



// $('#answer-button').on('click', (e) => {
// 	console.log("Reading response to the answer button");
// 	if (input === answer){
// 		correctAnswer = true;
// 	}
// 	console.log("Finished running answer button");
// })



const setTimer = () => {
	const timer = setInterval(() => {

		turnTime--;

		// if (turnTime === 0){
		// 	// clearInterval(timer); // ends the countdown
		// 	// $('#active-modal').modal('toggle');
		// 	// $('#incorrect-modal').modal('toggle');
		// 	// turnTime = 10;
		// 	correctAnswer = false;
		// }

		if (correctAnswer === true) {
			clearInterval(timer);
			// $('#active-modal').modal('toggle');
			$('#answer-modal').modal('toggle');
			turnTime = 10;
		} else if (correctAnswer === false || turnTime === 0) {
			clearInterval(timer);
			// $('#active-modal').modal('toggle');
			$('#incorrect-modal').modal('toggle');
			turnTime = 10;
		}

		$('#timer-counter').text(`${turnTime}s`); // updates the time on the board

	}, 1000); // each interval happens after every second
}



console.log("Finished running js file");


