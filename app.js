const calculator = {
    add: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    muliply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
    powerof: function (a, b) {
        return a ** b;
    },
};

console.log(calculator.add(8, 2));
calculator.minus(8, 2);
calculator.muliply(8, 2);
calculator.divide(8, 2);
calculator.powerof(8, 2);
