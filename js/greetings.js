const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); // 기본적으로 하는 동작을 막음(Refresh를 막기 위해 사용)
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add("hidden");
    // loginForm.id = "login-form hidden";
    paintGreeting(username);
}

function paintGreeting(username) {
    greeting.innerText = `Hello! ${username}.`;
    greeting.classList.remove("hidden");
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    const username = localStorage.getItem(USERNAME_KEY);
    paintGreeting(username);
}
