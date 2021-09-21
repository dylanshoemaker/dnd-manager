$(document).ready(function () {
    $('.carousel').carousel();
});

function signupFormHandler(event) {
    event.preventDefault();

    const email = document.getElementById('email');
    const password = document.getElementById('password');

    if (email && password) {
        const response = fetch('/users', { 
            method: '',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json'}
        }) 

    }
}

// profileImg.addEventListener("click", showImg);
