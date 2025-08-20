// const container = document.querySelector('.container');

// container.addEventListener('click', () => {
//   container.classList.add('animate');

//   // Remove class after animation ends so it can trigger again on next click
//   container.addEventListener('animationend', () => {
//     container.classList.remove('animate');
//   }, { once: true });
// });
// document.getElementById("gbtn").addEventListener("click", function (e) {
//     e.preventDefault(); // stop instant redirect

//     let button = this;
//     button.classList.add("animate");

//     // wait for animation to finish, then redirect
//     setTimeout(() => {
//         button.classList.remove("animate");
//         window.location.href = "login_with_google.html";
//     }, 500); // match animation duration
// });
function validationForm(){
    let isValid = true;
}
let nameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");

let errorUname = document.getElementById("error-username");
let errorPass = document.getElementById("error-password");

errorUname.innerText = "";
errorPass.innerText = "";

if (nameInput.value.trim() === "") {
    errorUname.innerText = "Username is required";
    isValid = false;
}

if (passwordInput.value.trim() === "") {
    errorPass.innerText = "Password is required";
    isValid = false;
}

return isValid;