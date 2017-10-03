console.log("Window is running");

const $testButton = $('button#test-button');
const $myModal = $('div.active-modal');

$('button#test-button').on('click', (e) => {
	console.log("Reading response to the test button");
	$('div.modal-overlay').show();
	$('div.active-modal').show();
	console.log("Finished running test button");
})

$('button#close-question').on('click', (e) => {
	console.log("Reading response to the close button");
	$('div.modal-overlay').hide();
	$('div.active-modal').hide();
})

// $('div#myModal').on('show.bs.modal', (e) => {
// 	var button = $(e.relatedTarget); // Button that triggered the modal
// 	var recipient = button.data('whatever'); // Extract info from data-* attributes
// 	// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
// 	// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
// 	var modal = $(this);
// 	modal.find('.modal-title').text('New message to ' + recipient);
// 	modal.find('.modal-body input').val(recipient);
// });



// $('#exampleModal').on('show.bs.modal', function (event) {
//   var button = $(event.relatedTarget) // Button that triggered the modal
//   var recipient = button.data('whatever') // Extract info from data-* attributes
//   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//   var modal = $(this)
//   modal.find('.modal-title').text('New message to ' + recipient)
//   modal.find('.modal-body input').val(recipient)
// })


