let fibonacciArray = []
let num = parseInt(prompt("Type a number: "))


for (i = 0; i < 10; i++) {
    if (i === 0) {
        fibonacciArray[i] = num - 1
    } else if (i === 1) {
        fibonacciArray[i] = num
    } else {
        fibonacciArray[i] = fibonacciArray[i - 2] + fibonacciArray[i - 1]
    }
    

}

console.log(fibonacciArray)