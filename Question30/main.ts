//Question 30: Hello Admin: Greet users differently, especially 'admin'.

 let usersname : string[] = ["admin", "jahansher", "zaid", "ayan", "Arooba"]

 for(let users of usersname){
    if (users === "admin"){
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${users}, thank you for logging in again.`);
    }
 }