//Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.

let guests: string[] = ["zaid", "Ayan", "zeeshan"];
console.log("Great news! I found a bigger dinner table!");

guests.unshift("zoaib");
guests.splice(guests.length / 2, 0, "Anas");
guests.push("Ali");

guests.map(guest => {
    console.log(`Dear ${guest}, would you like to Attend dinner for 8pm`);
});