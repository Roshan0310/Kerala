var email = document.getElementById("email");
var emailError = document.getElementById("emailError");
var password = document.getElementById("password");
var passwordError = document.getElementById("passworError");

function validate(){
    if(emailValidate()){
        if(passwordValidate()){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}


function emailValidate() {
    let emailFormat = /^([\w\.-]+)@([\w\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
    if (emailFormat.test(email.value)) {
        emailError.innerHTML = "<label><small>Valid Email</small></label>";
        emailError.style.color = "#16C79A";
        return true;
    } else {
        emailError.innerHTML = "<label><small>Invalid Email</small></label>";
        emailError.style.color = "#FF5151";
        return false;
    }
}

function passwordValidate() {
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;

    if (password.value.length >= 8) {
        if (lowerCaseLetters.test(password.value) && upperCaseLetters.test(password.value) && numbers.test(password.value)) {
            passwordError.innerHTML = "<label><small>Success</small></label>";
            passwordError.style.color = "green"
            password.style.border = "2px solid red";
            return true;
        } else {
            passwordError.innerHTML = "<label><small>Password incorrect.</small></label>";
            passwordError.style.color = "red"
            password.style.border = "2px solid red";
            return false;        
        }
    } else {
        passwordError.innerHTML = "<label><small>Password Invalid</small></label>";
        passwordError.style.color = "red"
        password.style.border = "2px solid red";
        return false;
    }

}