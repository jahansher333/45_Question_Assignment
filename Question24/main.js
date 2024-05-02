"use strict";
//Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
let citiename = "karachi";
let citiename1 = "lahore";
let citiename2 = "multan";
if (citiename == citiename2) {
    console.log("cities name are same name");
}
else {
    console.log("cities name are not same name");
}
if (citiename1 != citiename2) {
    console.log("cities name are equal name");
}
else {
    console.log("cities name are not equal name");
}
let age = 17;
let age1 = 20;
if (age == 17) {
    console.log("Include the name for metric exam");
}
if (age != 20) {
    console.log("Not Include the name for metric exam unlimited age");
}
;
if (age <= age1) {
    console.log("Younger");
}
if (age1 >= age) {
    console.log("older");
}
if (age == 17 && age1 == 20) {
    console.log("person Include the name for metric exam");
}
if (age != 17 || age1 != 20) {
    console.log("person Not Include the name for metric exam unlimited age");
}
;
let citiesnames = ["karachi", "lahore", "multan"];
if (citiesnames.includes("karachi")) {
    console.log("karachi is in citiesnames list");
}
if (!citiesnames.includes("peshawer")) {
    console.log("peshawer is not include in an array");
}
