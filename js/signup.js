let email = document.getElementById("email");
let emailError = document.getElementById("emailError");
let phone = document.getElementById("phone");
let phoneError = document.getElementById("phoneError");
let password = document.getElementById("password");
let passwordError = document.getElementById("passworError");
let retypePassword = document.getElementById("retypePassword");
let retypePasswordError = document.getElementById("retypePasswordError");






function emailValidate() {
    let emailFormat = /^([\w\.-]+)@([\w\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
    if (emailFormat.test(email.value)) {
        emailError.innerHTML = "<small>Valid Email</small>";
        emailError.style.color = "green";
        return true;
    } else {
        emailError.innerHTML = "<label>Please enter a valid email</label>";
        emailError.style.color = "red";
        return false;
    }
}

function phoneValidate() {
    let condition1 = /^[0-9]{10}$/;
    let condition2 = /^([0-9]{3})-([0-9]{3})-([0-9]{4})$/;
    let condition3 = /^([0-9]{3}).([0-9]{3}).([0-9]{4})$/;
    let condition4 = /^([0-9]{3}) ([0-9]{3}) ([0-9]{4})$/;
    if (condition1.test(phone.value) || condition2.test(phone.value) || condition3.test(phone.value) || condition4.test(phone.value)) {
        phoneError.innerHTML = "<label>Valid Phone Number</label>";
        phoneError.style.color = "green";
        return true;
    } else {
        phoneError.innerHTML = "<label>Please enter a valid Phone Number</label>";
        phoneError.style.color = "red";
        return false;
    }

}

function passwordValidate() {
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;

    if (password.value.length >= 8) {
        if (lowerCaseLetters.test(password.value) && upperCaseLetters.test(password.value) && numbers.test(password.value)) {
            if (password.value.length == 8) {
                passwordError.innerHTML = "<small>Password Strength: Poor</label>";
                password.style.border = "1px solid red";
                passwordError.style.color = "red"
        
                return false;
            } else if (password.value.length > 8 && password.value.length < 12) {
                passwordError.innerHTML = "<label>Password Strength: Medium</label>";
                password.style.border = "1px solid blue";
                passwordError.style.color = "blue";
               
                return false;
            } else if (password.value.length > 12) {
                passwordError.innerHTML = "<label>Password Strength: Strong</label>";
                password.style.border = "1px solid green";
                passwordError.style.color = "green";
               
                return true;
            }
        } else {
            passwordError.innerHTML = "<label>Password must contain Minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number</label>";
            password.style.border = "1px solid #red";
            passwordError.style.color = "#red"
            return false;
           
        }
    } else {
        passwordError.innerHTML = "<label>Password is too short</label>";
        password.style.border = "1px solid #red";
        passwordError.style.color = "red"
         return false;
    }


}

function passwordMatch() {
    if (password.value === retypePassword.value) {
        retypePasswordError.innerHTML = "<label>Password matched</label>";
        retypePasswordError.style.color = "green"
        retypePassword.style.border = "1px solid green";
        return true;
    }
    else {
        retypePasswordError.innerHTML = "<label>Password didn't match</label>";
        retypePasswordError.style.color = "red"
        retypePassword.style.border = "1px solid red";
        return false;
    }
}


function validate(){
    if(emailValidate()){
        if(phoneValidate()){
            if(passwordValidate()){
                if(passwordMatch()){
                    return true;
                }
                else{
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}