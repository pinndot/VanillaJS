const h1 = document.querySelector("div.hello:first-child h1");
// const h1 = document.querySelector("div.hello:last-child h1");

function handleTitleClick() {
    h1.classList.toggle("active");
}

h1.addEventListener("click", handleTitleClick);
