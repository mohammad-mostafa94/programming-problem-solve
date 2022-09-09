let arr = ['el1', 'el2', 'el3'];

arr.addedProp = 'arrProp';

// elKey are the property keys
for (let elKey in arr) {
  console.log(elKey); // "0", "1", "2",
}

// elValue are the property values
for (let elValue of arr) {
  console.log(elValue)
}

// let list = [4, 5, 6];

// for (let i in list) {
//    console.log("for in",i); // "0", "1", "2",
// }

// for (let i of list) {
//    console.log("for of",i); // "4", "5", "6"
// }