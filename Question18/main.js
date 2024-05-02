//Question 18: Seeing the World: Think of at least five places you’d like to visit.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var cities = ["Karachi", "Lahore", "Peshawer", "Multan", "Sialkot"];
console.log("Original order:", cities);
console.log("Alphabetical order:", __spreadArray([], cities, true).sort());
console.log("Original order:", cities);
console.log("Reverse alphabetical order:", __spreadArray([], cities, true).sort().reverse());
console.log("Original order:", cities);
cities.reverse();
console.log("Reversed order:", cities);
cities.reverse();
console.log("Original order:", cities);
cities.sort();
console.log("Alphabetical order:", cities);
cities.reverse();
console.log("Reverse alphabetical order:", cities);
