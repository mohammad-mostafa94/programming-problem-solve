let names = ['ashiq','Ali','ashiq','Ali','tanmay','siyam'];

function getUniqueNames(names){
    let uniqueNames = [];
    for (const element of names) {
        if (uniqueNames.indexOf(element) == -1){
            uniqueNames.push(element);
        }
    }
    return uniqueNames;
}
const uniqueValues = getUniqueNames(names);
console.log(uniqueValues);