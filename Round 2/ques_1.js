// Round 2
// Q-1: var vs let vs const

// var is a functional scope.
// let & const is a block scope.

{
    var a = 'hello';
}

console.log(a); // We get no error in this case

// What if we change this to let or const

{
    let a = 'hello'; // this can be let or const
}

console.log(a); // In this case, a isn't defined because the scope of let & const keyword is only inside of these two curly brackets.

// Example-2
// Some examples of declarations

var a = 5;

var a = 10;

// In this case, it is completely fine.

let a = 5;

let a = 10;

// In this case, it will give an error (Reference Error)

const a = 5;

const a = 10;

// It will give same error.


// What about initialization

var a = 5;

var a = 10; // 'a' can be initialized twice.


let a = 5;

a = 10; // Since let can't be declared twice. We removed let keyword in the second line, and this works (It can be initialized).


const a = 5;

a = 10; // This gives an assign error. It can't be reinitialized. But let can be reinitialized.


// What about declaration without putting any value?

var a; // This will work

let a; // This will also work.

const a; // This will give an error because it can't be declared without value.