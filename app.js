function sayBye(person) {
    console.log("Bye! " + person);
}

const player = {
    sayHello: function (person) {
        console.log("hello! " + person);
    },
};

player.sayHello("nico");
sayBye("nico");
