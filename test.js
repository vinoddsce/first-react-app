function add(x, y) {
    return x + y;
}

// function makeAdder20(x, ref) {
//     return ref(x, 20);
// }

// function makeAdder30(x, ref) {
//     return ref(x, 30);
// }

function makeAdder(x, ref) {
    return function (y) {
        return ref(x, y);
    }
}

var addTwenty = makeAdder(10, add);
var addThirty = makeAdder(10, add);


console.log(addTwenty(20));
console.log(addThirty(30));
