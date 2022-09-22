//Multiplication table
function multiplicationTable(number) {
    for (let i = 1; i <= 121; i++) {
        console.log(`${number} * ${i} =${number * i}`);
    }
}

multiplicationTable(8);