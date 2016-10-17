/*
 * Usage:
 * odd(20) => false
 * odd(7) => true
 * */
function isOdd(number) { // true/false
  return (number % 2 === 1);
}

/*
 * Init var currentValue with 2;
 * Loop 10 times and in each iteration:
 * - lift currentValue to the square, and
 * - log it on console
 * */
function toInfinity() {
    var i, currentValue = 2;
    for (i = 0; i < 10; i++) {
        console.log(currentValue * currentValue);
    }
}

/*
 * Returns pseudo random number between [0, max)
 * */
function random(max) {
    return Math.random() * max;
}

/*
 * Returns pseudo random number between [min, max)
 * */
function randomBetween(min, max) {
    return min + random(max - min);
}

function even(number) { // true/false
    return !isOdd(number);
}

function div(dividend, divisor) { // dzielenie div np. (13, 4) === 3
    return Math.floor(dividend / divisor);
}

function divmod(divident, divisor) { // [dzielenie div, dzielenie mod] np. (13, 4) === [3, 1]; ()

}

function greatestCommonDivisor(n1, n2) { // najwiekszy wspolny dizelnik

}

function leastCommonMultiple(n1, n2) { // najmniejsza wspolna wielokrotnosc

}


function multipleOf(i, arg) { //true if i === x * arg
}

function ordinalize(i) { // (1) === "1st"; (-22) === "-22nd" ...

}
