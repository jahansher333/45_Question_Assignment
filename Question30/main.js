//Question 30: Hello Admin: Greet users differently, especially 'admin'.
var usersname = ["admin", "jahansher", "zaid", "ayan", "Arooba"];
for (var _i = 0, usersname_1 = usersname; _i < usersname_1.length; _i++) {
    var users = usersname_1[_i];
    if (users === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(users, ", thank you for logging in again."));
    }
}
