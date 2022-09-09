function addNumbers() {
    let sum = 0;
    for (const num of arguments) {
        // console.log(num);
        sum += num;
    }
     return sum;
}
console.log(addNumbers(1,2,3,4));