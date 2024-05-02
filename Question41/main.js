//Question 41: Magicians: Display magician names from an array.
console.log("Pakistani magicians");
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1.charAt(0).toUpperCase() + magician_1.slice(1));
    }
}
var magician = ["M.Yaseen", "Abid Khakwani", "Iqbal Hussain"];
show_magicians(magician);
