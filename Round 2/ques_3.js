// Round 2
// Q-3: Explain Call, Apply and Bind

var person = {
    name: "Ashfaque Hossain Abir",
    hello: function (thing) {
        console.log(this.name + " says hello " + thing)
    },
};

var alterEgo = {
    name: "Abirett",
};

// Using Call method
person.hello.call(alterEgo, "world");

// Call takes an object which is going to become the context of this particular function.


// Using Apply method
person.hello.apply(alterEgo, ["world"]);



// Using Bind method
const newHello = person.hello.bind(alterEgo);

newHello("World");