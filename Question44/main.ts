//Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.

function sandwich(...items: string[]): void {
    console.log("Sandwich Order")

    for (let i = 0; i < items.length ; i++){
        console.log(`= ${items[i]}`)
    }
}

sandwich("ham , cheese");
sandwich("turkey , lettuce , tomato");
sandwich("avocado , sprouts , mustard , mayo");