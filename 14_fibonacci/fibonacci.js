const fibonacci = function(num) {
    const fib = [0, 1, 1]
    if (num < 0) return "OOPS";

    for (let i = 2; i < num; i++) {
        fib.push(fib[i] + fib[i-1] )
    }

    return fib[num]

};

console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(4))
console.log(fibonacci(6))

// Do not edit below this line
module.exports = fibonacci;
