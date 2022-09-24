//Sort an array of strings in alphabetical order
function sortStringArray(stringArray) {
    let newArr = [];
    const sorted = stringArray.sort();
    for (let i = 0; i < stringArray.length; i++) {
        newArr.push(stringArray[i].toLowerCase());
    }
    return newArr.sort();
}

console.log(sortStringArray(['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'July']));

//N.B. You can combine sort and reverse to change the order of sorting