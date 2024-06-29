const playerName = "nico";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit";

// const player = ["nico", 121212, false, "little bit"];

const player = {
    name: "nico",
    points: 121212,
    handsome: false,
    fat: "little bit",
    poo: undefined,
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

// Modify Object
player.handsome = true;
player.poo = "Big";
console.log(player);

// Add Object
player.lastName = "potato";
console.log(player);