//Question 45: Cars: Create detailed car objects with flexible properties.

function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(make_car("Audi", "Etrone5", ["color", "Black"], ["year", 2023]));
console.log(make_car("Honda", "Civic", ["color", "white"], ["sunroof", true]));