//Question 37: Large Shirts: Default values in make_shirt().
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("you order ".concat(size, " t-shirt with the message \"").concat(message, "\""));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "I love TypeScript"); // 
