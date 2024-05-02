//Question 32: Checking Usernames: Ensure uniqueness in usernames.
var currentuser = ["admin", "eric", "jahansher", "zaid", "Ayan"];
var new_user = ["admin", "eric", "Anas", "Zeeshan", "Arooba"];
new_user.forEach(function (newuser) {
    if (currentuser.some(function (currentUser) { return currentUser.toLowerCase() === newuser.toLowerCase(); })) {
        console.log("".concat(newuser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newuser, " is available."));
    }
});
