// Round 2
// Q-5: Composition Polyfill

function addFive(a) {
    return a + 5;
};

function subtractTwo(a) {
    return a - 2;
};

function multiplyFour(a) {
    return a * 4;
};


// Create compose function

const compose = (...functions) => {
    return (args) => {
        return functions.reduceRight((arg, fn) => fn(arg), args);
    }
}

const evaluate = compose(addFive, subtractTwo, multiplyFour);

console.log(evaluate(5));