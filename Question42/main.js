//Question 42: Great Magicians: Add "the Great" to magician names.
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
