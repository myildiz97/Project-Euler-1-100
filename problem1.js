function multiplesOf3and5(number) {
    let arr = [];
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
        arr.push(i);
        }
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

multiplesOf3and5(1000);