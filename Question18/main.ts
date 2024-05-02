//Question 18: Seeing the World: Think of at least five places you’d like to visit.


let cities: string[] = ["Karachi", "Lahore", "Peshawer", "Multan", "Sialkot"];

console.log("Original order:", cities);

console.log("Alphabetical order:", [...cities].sort());

console.log("Original order:", cities);

console.log("Reverse alphabetical order:", [...cities].sort().reverse());

console.log("Original order:", cities);

cities.reverse();
console.log("Reversed order:", cities);

cities.reverse();
console.log("Original order:", cities);

cities.sort();
console.log("Alphabetical order:", cities);

cities.reverse();
console.log("Reverse alphabetical order:", cities);