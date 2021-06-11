

/*for (let i = 0; i < array1.length; i++) {
    let counter = () => {
        let addLastTwo = (array1[array1.length - 1] + array1[array1.length - 2]);
    }
    let addBackIn = () => array1.push(addLastTwo);
}
console.log(array1);*/


/*function addDigit(arr) {
    arr.push(array1[array1.length - 1] + array1[array1.length - 2]);
}*/

let array1 = [1, 2];

for (let i = 1; i <= array1.length; i++) {
    function addDigit(arr) {
        arr.push(array1[array1.length - 1] + array1[array1.length - 2]);
    } if ((array1[array1.length - 1]) < 4000000) {
        addDigit(array1);
    } else {
        break;
    }
}

let evenNums = array1.filter(num => num % 2 === 0);
let sum = evenNums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
});

console.log(sum);