function fiboEvenSum(n) {
    let a = 1;
    let b = 1;
    let sum = 0;
    while (b < n) {
        let temp = a
        a = b;
        b += temp;
        if (b % 2 === 0) {
            sum += b;
        };
    }
    return sum;
  }
  
  fiboEvenSum(34)
