
//Question 42: Great Magicians: Add "the Great" to magician names.


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