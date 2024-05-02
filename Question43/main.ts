
//previous
function showmagicians(magicians: string[]) {

    magicians.forEach(name => console.log(name));
}

 function make_great(magicians: string[]){

  return magicians.map(name => `The Great ${name}`);
}
let magician_name : string[] = ["Shoukat Hameed ","M.Ejaz Mughal ","Mian Afzal Rashid"]
//make_great(magician_name);

let great_magicians = make_great(magician_name);
console.log(great_magicians)


// //Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.


function make_great2(magicians: string[]): string[] {
     const greatmagicians : string[] = [];
    for (let i = 0 ; i < magicians.length; i++){
        magicians[i] = magicians[i] + "the great"
    }
    return greatmagicians
}
let magicians3 : string[] = ["Shoukat Hameed ","M.Ejaz Mughal ","Mian Afzal Rashid"]
let greatmagicians2: string[] = make_great2(magicians3)
showmagicians(magicians3);
 showmagicians(greatmagicians2);