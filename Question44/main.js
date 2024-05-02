//Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.
function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order");
    for (var i = 0; i < items.length; i++) {
        console.log("= ".concat(items[i]));
    }
}
sandwich("ham , cheese");
sandwich("turkey , lettuce , tomato");
sandwich("avocado , sprouts , mustard , mayo");
