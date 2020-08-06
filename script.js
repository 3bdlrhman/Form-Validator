const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show input error mesage
function showError (input, message){
	const formControl = input.parentElement;
	formControl.className = "form-control error";
	const small = formControl.querySelector('small');
	small.innerText = message;
}

//highlight success input field wu=ith green border
function showSuccess (input, message){
	const formControl = input.parentElement;
	formControl.className = "form-control success";
}

// check an input
function checkRequired(inputArr){
	inputArr.forEach(function(input){
		if(input.value.trim() === ''){
			showError(input, input.id + ' is required');
		}else{
			showSuccess(input);
		}
	})
}

//check the length of input
function checkLength(input, min, max){
	if(input.value.length < min){
		showError(input, ' must be at least ' + min);
	}else if(input.value.length > max){
		showError(input, ' must be less than '+max);
	}else{
		showSuccess(input);
	}
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

//check the passwords if they did not match
function checkPasswordsMatch(input1, input2){
	if(input1.value !== input2.value){
		showError(input2, 'passwords did nt match');
	}
}

//listen to the submit event
form.addEventListener('submit', function(e){
	e.preventDefault();

	checkRequired([username, email, password, password2]);
	checkLength(username, 3, 15);
	checkLength(password, 6, 25);
	checkEmail(email);
	checkPasswordsMatch(password, password2);
});