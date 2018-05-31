//Enum
enum Color { Red = 1, Green = 2, Blue = 4 }
let colorName: string = Color[2];
console.log(colorName);

//let
for (let i = 0; i < 10; i++) {
    setTimeout(function () { console.log(`a: ${ i }`); }, 100);
}
//var
for (var i = 0; i < 10; i++) {
    setTimeout(function () { console.log(`b: ${ i }`); }, 100);
}