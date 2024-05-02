//previous
function showmagicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magician_name = ["Shoukat Hameed ", "M.Ejaz Mughal ", "Mian Afzal Rashid"];
//make_great(magician_name);
var great_magicians = make_great(magician_name);
console.log(great_magicians);
// //Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
function make_great2(magicians) {
    var greatmagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + "the great";
    }
    return greatmagicians;
}
var magicians3 = ["Shoukat Hameed ", "M.Ejaz Mughal ", "Mian Afzal Rashid"];
var greatmagicians2 = make_great2(magicians3);
showmagicians(magicians3);
showmagicians(greatmagicians2);
