//Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var invitedinner = ["zaid", "Ayan", "Anas",];
invitedinner.map(function (items) { return console.log("Dear :".concat(items, " I would to jaoin dinner for 8pm")); });
//Question 15:Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
var notinvitedinner = "Anas";
console.log("".concat(notinvitedinner, " would you not attend dinner 8pm"));
var newguestinvitedinner = "Zeeshan";
invitedinner[invitedinner.indexOf(notinvitedinner)] = newguestinvitedinner;
invitedinner.map(function (items) { return console.log("Dear :".concat(items, " I would to jaoin dinner for 8pm")); });
