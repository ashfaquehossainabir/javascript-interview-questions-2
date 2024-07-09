// Round 2
// Q-2: setTimeout Output

function a() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function log() {
            console.log(i); // What is logged?
        }, i * 1000);
    }
}

a(); // 3, 3, 3

// var doesn't have block scope, var has functional scope.

// setTimeout only runs after the complete code has run successfully.

// After the complete code has run successfully, it is going to look into the scope of the i variable.



// Using let keyword you can print 0, 1, 2
// Because let keyword has block scopes.

function a() {
    for (let i = 0; i < 3; i++) {
        setTimeout(function log() {
            console.log(i);
        }, i * 1000);
    }
}

a(); // 0, 1, 2



// What if interviewer says you to print 0, 1, 2 using var keyword?
// In this case, you will need to use closures. 
// Here is the example of creating loops using var with closures.

function a() {
    for (var i = 0; i < 3; i++) {
      (function(i) {
        setTimeout(function() {
          console.log(i);
        }, 1000);
      })(i);
    }
  }
  
a();