console.log('LOGGING');

// REMOVE ALERTS
// if (document.querySelector('.alert')) {
// 	let delay = 0;

// 	setTimeout(() => {
// 		const alerts = document.querySelectorAll('.alert');
// 		alerts.forEach(alert => {
// 			delay += 500;
// 			setTimeout(() => {
// 				alert.remove();
// 			}, delay);
// 		});
// 	}, 3000);
// }

const $usersList;
const allUsers = [];

$(document).ready(function() {
	$usersList = $('#userTarget');
	$.ajax({
		method: 'GET',
		url: '/api/v1/users',
		success: handleSuccess,
		error: handleError
  });

  function handleSuccess(json) {
	  allUsers = json;
	  render();
  };

function handleError(e) {
	  console.log('uh oh');
	  $('#userTarget').text('Failed to load users, is the server working?');
  };

  // $('#newUserForm').on('submit', function(e) {
  //   e.preventDefault();
  //   $.ajax({
  //     method: 'POST',
  //     url: '/api/books',
  //     data: $(this).serialize(),
  //     success: newBookSuccess,
  //     error: newBookError
  //   });
});


