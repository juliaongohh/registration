

 
function checkPostalCode() {
    var postalcode = document.getElementById("pcode");
    var error = document.getElementById("postalcodeError");
              try {
                if (/^[a-zA-z][0-9][a-zA-z][\s-]?[0-9][a-zA-z][0-9]$/.test(postalcode.value) === false) {
                throw "Please enter another postal code"
              }
              error.style.display = "none";
              error.innerHTML = "";
              postalcode.style.background = "";
              }
              catch (warning) {
            error.style.display = "block";
            error.innerHTML = warning;
            postalcode.style.background = "rgb(255, 148, 171)"
           }
    }


function checkPassword() {
    var pw = document.getElementById("pw1");
    var pwconfirmation = document.getElementById("pw2");
    var error = document.getElementById("pwError");
        
        error.style.display = "none";
        error.innerHTML = "";
        pw.style.background = "";
        pwconfirmation.style.background = "";

    }

function checkEmail() {
    var email= document.getElementById("email");
    var error = document.getElementById("emailError");
    try {
        if (email.value.search("@") === -1 ||
            email.value.lastIndexOf(".") === -1) {
            throw "Please enter another email";
        }
        error.innerHTML = "";
        error.style.display = "none";
        email.value = email.value.toLowerCase();
        email.style.background = "";
    }
    catch (warning) {
        error.innerHTML = warning;
        error.style.display = "block";
        email.style.background = "rgb(255, 148, 171)";
    }
}

		
function errorMessage() {
var firstName = document.getElementById("fname");
var lastName = document.getElementById("lname");
var address = document.getElementById("address");
var city = document.getElementById("city");
var postalcode= document.getElementById("pcode");
var province = document.getElementById("province");
var age = document.getElementById("age");
var pw = document.getElementById("pw1");
var pwconfirmation = document.getElementById("pw2");
var email = document.getElementById("email");
    if (firstName.value === "") {
      alert('Please fill out first name')
    }
    else if (lastName.value === "") {
      alert('Please fill out last name')
    }
    else if (address.value === "") {
      alert('Please fill out address')
    }
    else if (city.value === "") {
      alert('Please fill out city')
    }
    else if (postalcode.value === "") {
      alert('Please fill out postal code')
    }
    else if (province.value === "") {
      alert('Please choose a province')
    }
    else if (age.value === "") {
      alert('Please fill out age')
    }
    else if (age.value < 18){
        alert('You must be at least 18')
    }
    else if (pw.value === "") {
      alert('Password is required')
    }
    else if (pwconfirmation.value === "") {
      alert('Password is required')
    }
    else if (pw.value != pwconfirmation.value){
        alert('Password confirmation does not match')
    }
    else if (/.{6,}/.test(pw.value) === false) {
        alert('Password must be at least 6 characters')
    } else if (/[A-Z]/.test(pw.value) === false) {
        alert('Password must have at least one uppercase letter');
    } else if (/\d/.test(pw.value) === false) {
        alert('Password must have at least one number');
    }
    else if (email.value === "") {
      alert('Please fill out email')
    }
    else {
      alert("Thanks for registering with our website! Your account was created successfully.")
    }
}

function Validation() {
	checkPostalCode();
	checkPassword();
	checkEmail();
	errorMessage();
}
