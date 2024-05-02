//Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
var guests = ["zaid", "Ayan", "zeeshan"];
console.log("Great news! I found a bigger dinner table!");
guests.unshift("zoaib");
guests.splice(guests.length / 2, 0, "Anas");
guests.push("Ali");
guests.map(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to Attend dinner for 8pm"));
});
