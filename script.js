// Create a login form
const loginForm = document.createElement("form");
loginForm.setAttribute("action", "/login");
loginForm.setAttribute("method", "post");

// Create a username input
const usernameInput = document.createElement("input");
usernameInput.setAttribute("type", "text");
usernameInput.setAttribute("name", "username");
usernameInput.setAttribute("placeholder", "Username");

// Create a password input
const passwordInput = document.createElement("input");
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("name", "password");
passwordInput.setAttribute("placeholder", "Password");

// Create a submit button
const submitButton = document.createElement("input");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("value", "Login");

// Add the input elements to the form
loginForm.appendChild(usernameInput);
loginForm.appendChild(passwordInput);

// Add the submit button to the form
loginForm.appendChild(submitButton);

// Add the form to the document
document.body.appendChild(loginForm);