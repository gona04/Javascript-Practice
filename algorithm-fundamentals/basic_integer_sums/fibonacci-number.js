// 0 1 1 2 3 5
function fib(num) {
    let prev = 0;
    let current = 1;
    let next;

    if(num < 2) return num;
    //2 <= 8 true | 3 <= 8 true | 4 <= 8 true | 5 <= 8 true | 6 <= 8 true | 7 <= 8 true | 8 <= 8 true | 9 <= 8 false
    for(let i = 2; i <= num; i++) {
        // 0 + 1 = 1 | 1 + 1 = 2 | 1 + 2 = 3 | 2 + 3 = 5 | 3 + 5 = 8 | 5 + 8 = 13 | 8 + 13 = 21
        next = prev + current;
        // 1 | 1 | 2 | 3 | 5 | 8 | 13
        prev = current;
        // 1 | 2 | 3 | 5 | 8 | 13 | 21
        current = next;
    }
    // 21
    return next;
}

console.log(fib(8))