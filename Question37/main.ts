//Question 37: Large Shirts: Default values in make_shirt().

function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`you order ${size} t-shirt with the message "${message}"`);
}

make_shirt(); 
make_shirt("medium"); 
make_shirt("small", "I love TypeScript"); // 

