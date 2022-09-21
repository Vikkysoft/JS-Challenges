//Sort an array of strings in alphabetical order
function sortStringArray(stringArrary) {
    let newArr = [];
    const sorted = stringArray.sort();
    for (let i = 0; i < stringArrary.length; i++) {
        newArr.push(stringArrary[i].toLowerCase());
    }
    return newArr.sort();
}

console.log(sortStringArray(['Jan', 'Feb', 'March', 'Apr', 'May']));

//N.B. You can combine sort and reverse to change the order of sorting