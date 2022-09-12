//     /* 
//         let febo = [0,1];
//         for (let i = 2; i <= 6; i++) {
//             febo[i] = febo[i-1] + febo[i-2];
//         }
//         console.log(febo);
//      */

// function findFibonacciNumbers(number){
//     let febo = [0,1];
//     for (let i = 2; i <= number; i++) {
//         febo[i] = febo[i-1] + febo[i-2];
//     }
//    return febo;
// }

// const fibonacciArray = findFibonacciNumbers(6);
// console.log(fibonacciArray);

// function add(a, b){
//     return a + b;
//   }
//   console.log(add("adam" + "eve"))

var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for(var i = 0; i < sentence.length; i++){
  var letter = sentence[i];
  if(letter == 'a'){
    count++;
  }
}
console.log(count)