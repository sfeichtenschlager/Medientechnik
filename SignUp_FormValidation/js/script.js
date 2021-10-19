/* simple form evaluation */


/* DOM elements */
let input_name = document.getElementById('name');
let error_name = document.getElementById('error-name');

let input_mail = document.getElementById('email');
let error_mail = document.getElementById('error-email');

let input_password = document.getElementById('password');
let input_passwordCheck = document.getElementById('passwordCheck');
let error_pw1 = document.getElementById('error-pw1');
let error_pw2 = document.getElementById('error-pw2');

/* Event listener */
input_name.addEventListener('keyup', validateName);
input_mail.addEventListener('keyup', validateMail);
input_password.addEventListener('keyup', validatePassword);
input_passwordCheck.addEventListener('keyup', validatePassword);

/* Function declaration */
function validateName(){
    let val = input_name.value;
    if(val.length < 3){
        error_name.style.display = 'block';
        error_name.innerHTML = 'Min. 3 Zeichen';
    } else {
        error_name.style.display = 'none';
    }
}

function validateMail(){
    let val = input_mail.value;
    if(val.length < 5){
        error_mail.style.display = 'block';
        error_mail.innerHTML = 'Min. 5 Zeichen';
    } else {
        error_mail.style.display = 'none';
    }
}

function validatePassword(){
    let val = input_password.value;
    let valTwo = input_passwordCheck.value;
    if(val.length < 8){
        error_pw1.style.display = 'block';
        error_pw1.innerHTML = 'Min. 8 Zeichen';
    } else {
        error_pw1.style.display = 'none';
        if(valTwo.length >= 1) {
            if(val !== valTwo) {
                error_pw2.style.display = 'block';
                error_pw2.innerHTML = 'Die eingegebenen Passwörter stimmen nicht überein';
            } else {
                error_pw2.style.display = 'none';
            }
        }
            
    }
}
