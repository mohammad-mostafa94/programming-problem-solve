let numbers = [6,5,3,7,11,13,15,16];
let minNumber = numbers[0];

for (var i = 0; i < numbers.length; i++) {
    console.log(i,numbers[i]);
    if (minNumber > numbers[i]) {
        var min = numbers[i];
    }
}
console.log("minimum number is " + min);