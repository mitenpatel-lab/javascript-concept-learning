
function numbers(num) {

    let count = 0;
    let arr = [];

    for (let i = 0; i < num.length; i++) {
        if (num[i] == 0) {
            count++;
        }
        else {
            arr.push(num[i]);
        }

    }
    if (count > 0) {
        for (let i = 1; i <= count; i++) {
            arr[arr.length].push(0);
        }
    }
}


console.log(numbers[5, 6, 9, 7, 0, 8]);