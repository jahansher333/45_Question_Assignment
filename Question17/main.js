//Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
var guests = ["zaid", "Ayan", "zeeshan"];
console.log("Great news! I found a bigger dinner table!");
guests.unshift("zoaib");
guests.splice(guests.length / 2, 0, "Anas");
guests.push("Ali");
guests.map(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to Attend dinner for 8pm"));
});
//Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
var Guestremovemessage = "Unfortunately, I can only invite two people for dinner.";
console.log(Guestremovemessage);
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
guests.splice(0, guests.length);
console.log(guests);
