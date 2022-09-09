function sumSecondElements(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; j < numbers[i].length; j++) {
            sum += numbers[i][j];
        }
    }
    return sum;
}
let number = [
    [1, 3],
    [2, 4],
    [3, 2]
];
console.log(sumSecondElements(number));
let num = [
    [12, 52],
    [43, 55],
    [99, 55]
];
console.log(sumSecondElements(num));






// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     // console.log("i=",i,element);
//     for (let j = 1; j < numbers[i].length; j++) {
//         // const element = numbers[j];
//         // console.log("j=",j,element);
//         // console.log("j[i][j]=",numbers[i][j]);
//         // console.log("j=",j);
//         sum += numbers[i][j];

//     }
// }
// console.log("total sum",sum)