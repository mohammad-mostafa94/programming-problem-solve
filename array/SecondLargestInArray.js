/* let numbers = [2,33,5,3,27,11];
    let test = Math.sort();
    let x = test(numbers);
    console.log(x);
 */



/* 
    let numbers = [2,33,5,3,27,11];
    let largestNumber = numbers[0];
    let secondLargestNumber = 0;

    for (let i = 1; i <numbers.length; i++){
        console.log("i =",i, "number",numbers[i]);
        console.log("\n");
        if(numbers[i] > largestNumber){
            largestNumber = numbers[i];
            console.log("largest number",numbers[i]);
        }
        else if(numbers[i] !== largestNumber && numbers[i] > secondLargestNumber){
            secondLargestNumber = numbers[i];
        }
    }
    console.log("max =",largestNumber);
    console.log("second largest number =",secondLargestNumber);
*/


/* Explanation: 
    1) Initialize the largestNum as index of arr[0] element
    2) Start traversing the array from array[1],
    a) If the current element in array say arr[i] is greater
        than largestNum. Then update largestNum and secondLargestNum as,
        secondLargestNum = largestNum
        largestNum = arr[i]
    b) If the current element is in between largestNum and secondLargestNum,
        then update secondLargestNum to store the value of current variable as
        secondLargestNum = arr[i]
    3) Return the value stored in secondLargestNum.
*/





/* 
    var secondLargestInArray = ['20','120','111','215','54','78'].sort(function (a, b) { 
        return b-a;
    })[1];

    console.log(secondLargestInArray);
*/
