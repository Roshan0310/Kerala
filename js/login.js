var email = document.getElementById("email");
var emailError = document.getElementById("emailError");
var password = document.getElementById("password");
var passwordError = document.getElementById("passworError");


function emailValidate() {
    let emailFormat = /^([\w\.-]+)@([\w\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
    if (emailFormat.test(email.value)) {
        emailError.innerHTML = "<label>Email valid</label>";
        emailError.style.color = "green";
        return true;
    } else {
        emailError.innerHTML = "<label>Enter a valid email</label>";
        emailError.style.color = "red";
        return false;
    }
}

function passwordvalidate() {
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;

    if (password.value.length >= 8) {
        if (lowerCaseLetters.test(password.value) && upperCaseLetters.test(password.value) && numbers.test(password.value)) {
            passwordError.innerHTML = "<label><small>correct Password </small></label>";
            passwordError.style.color = "green"
            password.style.border = "1px solid green";
            return true;
        } else {
            passwordError.innerHTML = "<label>Incorrect password</label>";
            passwordError.style.color = "red"
            password.style.border = "1px solid red";
            return false;        
        }
    } else {
        passwordError.innerHTML = "<label>Invalid password</label>";
        passwordError.style.color = "red"
        password.style.border = "1px solid red";
        return false;
    }

}

function validate(){
    if(emailValidate()){
        if(passwordvalidate()){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}