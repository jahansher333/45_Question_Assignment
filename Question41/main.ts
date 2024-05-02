//Question 41: Magicians: Display magician names from an array.
console.log("Pakistani magicians")
function show_magicians(magicians: string[]) {
    for (let magician of magicians){
      console.log( magician.charAt(0).toUpperCase() + magician.slice(1),)
    }
 }

let magician : string[] = ["M.Yaseen","Abid Khakwani" ,"Iqbal Hussain"]
show_magicians(magician);