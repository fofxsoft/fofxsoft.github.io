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



const best = function () {
    return new Promise(then => setTimeout(() => then("Encompass Platform"), 300));
};

best().then(response => alert(`Hello ${response}!`));
