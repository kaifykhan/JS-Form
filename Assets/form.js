const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

function error(element, msg){
    element.style.border= '3px solid red';
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.innerText = msg;
}

function success(element, msg){
    element.style.border= '3px solid green';
    const parent = element.parentElement;
    const p = parent.querySelector('p');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        error(username, 'Username is required');
    } else {
        success(username);
    }

    if(emailValue === '') {
        error(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        error(email, 'Provide a valid email address');
    } else {
        success(email);
    }

    if(passwordValue === '') {
        error(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        error(password, 'Password must be at least 8 character.')
    } else {
        success(password);
    }

    if(password2Value === '') {
        error(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        error(password2, "Passwords doesn't match");
    } else {
        success(password2);
    }

};
