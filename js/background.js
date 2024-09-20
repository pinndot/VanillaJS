// const images = ["0.jpg", "1.jpg", "2.jpg"];

// const chosenImage = images[Math.floor(Math.random() * images.length)];

const imageWidth = 1920;
const imageHeight = 1080;

const imageUrl = `https://picsum.photos/${imageWidth}/${imageHeight}`;

const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;
bgImage.src = imageUrl;
bgImage.classList.add("bg-image");

document.body.appendChild(bgImage);

// console.log(bgImage);
