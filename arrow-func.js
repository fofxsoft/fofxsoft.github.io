// Use named function expressions instead of function declarations.
// ----------------------------------------------------------------------------------------
// Function declarations are hoisted, which means that it’s easy - too easy - to reference
// the function before it is defined in the file.

// Always use const or let to declare variables.
// ----------------------------------------------------------------------------------------
// Not doing so will result in global variables. We want to avoid polluting the global
// namespace.

// Always use doublequotes for strings.
// ----------------------------------------------------------------------------------------
// This improves redability. Consistant string quotes helps with searching for strings in
// a file.

// When you use an anonymous function (as with callbacks), use arrow function notation.
// ----------------------------------------------------------------------------------------
// It creates a version of the function that executes in the context of this, which is
// usually what you want, and is a more concise syntax.

// BAD
// ----------------------------------------------------------------------------------------
function bad() {
    return new Promise(function(then) {
        setTimeout(function () {
            then('Encompass Platform');
        }, 300);
    });
}

bad().then(function(response) {
    var message = 'Hello ' + response + '!';

    alert(message);
});

// BETTER
// ----------------------------------------------------------------------------------------
const better = function () {
    return new Promise((then) => {
        setTimeout(() => {
            then("Encompass Platform");
        }, 300);
    });
};

better().then((response) => {
    let message = "Hello " + response + "!";

    alert(message);
});

// BEST
// ----------------------------------------------------------------------------------------
const best = function () {
    return new Promise(then => {
        setTimeout(() => then("Encompass Platform"), 300);
    });
};

best().then(response => alert(`Hello ${response}!`));
