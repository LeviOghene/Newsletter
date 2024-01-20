const signUp = document.querySelector('.sign-up');
const successState = document.querySelector('.thank');
const emailValue = document.getElementById('email');
const errorMessage = document.getElementById('errorMessage');
const submitButton = document.getElementById('subscribeButton');
const dismissButton = document.getElementById('dismissButton');

submitButton.addEventListener('click', function() {
   if(emailValue.value.trim() === '' || !isValidEmail(emailValue.value)) {
        errorMessage.style.display = 'block';
    document.querySelector('input').classList.add('error-background');
        emailValue.style.border = '1px solid hsl(4, 100%, 67%)';
    }else{
        signUp.style.display = 'none';
        successState.style.display = 'block';
    }
});

dismissButton.addEventListener('click', function() {
    successState.style.display = 'none';
    signUp.style.display = 'block';
    signUp.style.display = 'flex';
});

function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

