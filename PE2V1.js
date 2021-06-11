let array1 = [0, 1, 2];

/*for (let i = 0; i < array1.length; i++) {
    let counter = () => {
        let addLastTwo = (array1[array1.length - 1] + array1[array1.length - 2]);
    }
    let addBackIn = () => array1.push(addLastTwo);
}
console.log(array1);*/


function addDigit(arr) {
    arr.push(array1[array1.length - 1] + array1[array1.length - 2]);
}


for (let i = 0; i < array1.length; i++) {
    if ((array1.length - 1) < 10) {
        addDigit(array1);
    } else {
        break;
    }
}

console.log(array1);