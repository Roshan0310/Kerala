// let firstName = document.getElementById("firstname");
// let lastName = document.getElementById("lastname");
let email = document.getElementById("email");
let emailError = document.getElementById("emailError");
let phone = document.getElementById("phone");
let phoneError = document.getElementById("phoneError");
let password = document.getElementById("password");
let passwordError = document.getElementById("passworError");
let retypePassword = document.getElementById("retypePassword");

var retypePasswordError = document.getElementById("retypePasswordError");






function email_validate() {
    let emailFormat = /^([\w\.-]+)@([\w\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
    if (emailFormat.test(email.value)) {
        emailError.innerHTML = "<label><small>Valid Email</small></label>";
        emailError.style.color = "green";
        return true;
    } else {
        emailError.innerHTML = "<label><small>Invalid Email</small></label>";
        emailError.style.color = "red";
        return false;
    }
}

function phone_validate() {
    let phoneFormat0 = /^[0-9]{10}$/;
    let phoneFormat1 = /^([0-9]{3})-([0-9]{3})-([0-9]{4})$/;
    let phoneFormat2 = /^([0-9]{3}).([0-9]{3}).([0-9]{4})$/;
    let phoneFormat3 = /^([0-9]{3}) ([0-9]{3}) ([0-9]{4})$/;
    if (phoneFormat0.test(phone.value) || phoneFormat1.test(phone.value) || phoneFormat2.test(phone.value) || phoneFormat3.test(phone.value)) {
        phoneError.innerHTML = "<label><small>Valid Phone Number</small></label>";
        phoneError.style.color = "green";
        return true;
    } else {
        phoneError.innerHTML = "<label><small>Invalid Phone Number</small></label>";
        phoneError.style.color = "red";
        return false;
    }

}

function password_validate() {
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;

    if (password.value.length >= 8) {
        if (lowerCaseLetters.test(password.value) && upperCaseLetters.test(password.value) && numbers.test(password.value)) {
            if (password.value.length == 8) {
                passwordError.innerHTML = "<label><small>Password Strength: Poor</small></label>";
                passwordError.style.color = "red"
                password.style.border = "2px solid red";
                return false;
            } else if (password.value.length > 8 && password.value.length < 12) {
                passwordError.innerHTML = "<label><small>Password Strength: Medium</small></label>";
                passwordError.style.color = "yellow"
                password.style.border = "2px solid yellow";
                return false;
            } else if (password.value.length > 12) {
                passwordError.innerHTML = "<label><small>Password Strength: Strong</small></label>";
                passwordError.style.color = "green"
                password.style.border = "2px solid green";
                return true;
            }
        } else {
            passwordError.innerHTML = "<label><small>Password must contain at least 8 characters, one uppercase, one lowercase, one number.</small></label>";
            passwordError.style.color = "#red"
            password.style.border = "2px solid #red";
            return false;
            return false;
        }
    } else {
        passwordError.innerHTML = "<label><small>Password Too Short.</small></label>";
        passwordError.style.color = "red"
        password.style.border = "2px solid #red";
        return false;
    }

}

function password_match_checker() {
    if (password.value === retypePassword.value) {
        retypePasswordError.innerHTML = "<label><small>Password match.</small></label>";
        retypePasswordError.style.color = "green"
        retypePassword.style.border = "2px solid green";
        return true;
    }
    else {
        retypePasswordError.innerHTML = "<label><small>Password didn't match.</small></label>";
        retypePasswordError.style.color = "red"
        retypePassword.style.border = "2px solid red";
        return false;
    }
}

function validate() {
    if (email_validate()) {

        if (phone_validate()) {

            if (password_validate()) {

                if (password_validate()) {

                    if (password_match_checker()) {
                        return true;
                    }
                    else {
                        return false;
                    }
                } else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}