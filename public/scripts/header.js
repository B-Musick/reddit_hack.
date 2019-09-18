/********************** SIGN UP FORM FRAME ********************************** */
let signUpButton = document.getElementById('sign-up-button');
let signUpForm = document.getElementById("sign-up-form");

let signUpPageShown = false;

signUpButton.addEventListener('click', (e)=>{
    // If user clicks the sign up button, then display register form in frame
    signUpForm.classList.remove('sign-up-form-no-display');
    signUpForm.classList.add('sign-up-form-display');

    signUpPageShown = true;
})

signUpForm.addEventListener('click', (e)=>{
    // Set event so that when signup form is showing, and user clicks outside then
    // it will not show it anymore
    console.log(signUpPageShown)
    if(signUpPageShown){
        if (e.target.classList.value !== "sign-up-form-display"){
            return;
        }else{
            signUpForm.classList.add('sign-up-form-no-display');
            signUpForm.classList.remove('sign-up-form-display');
            signUpPageShown = false;
        }


    }
})



/********************** LOGIN FORM FRAME ********************************** */
let loginButton = document.getElementById('login-button');
let loginForm = document.getElementById("login-form");

let loginPageShown = false;

loginButton.addEventListener('click', (e) => {
    // If user clicks the sign up button, then display register form in frame
    loginForm.classList.remove('login-form-no-display');
    loginForm.classList.add('login-form-display');

    loginPageShown = true;
})

loginForm.addEventListener('click', (e) => {
    // Set event so that when signup form is showing, and user clicks outside then
    // it will not show it anymore
    console.log(loginPageShown)
    if (loginPageShown) {
        if (e.target.classList.value !== "login-form-display") {
            return;
        } else {
            loginForm.classList.add('login-form-no-display');
            loginForm.classList.remove('login-form-display');
            loginPageShown = false;
        }


    }
})