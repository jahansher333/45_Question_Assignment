//Question 32: Checking Usernames: Ensure uniqueness in usernames.


let currentuser :  string[] = ["admin","eric","jahansher","zaid","Ayan"]

let new_user : string[] = ["admin","eric","Anas","Zeeshan","Arooba"]

new_user.forEach(newuser => {
    if (currentuser.some(currentUser => currentUser.toLowerCase() === newuser.toLowerCase())) {
        console.log(`${newuser} will need to enter a new username.`);
    } else {
        console.log(`${newuser} is available.`);
    }
});
