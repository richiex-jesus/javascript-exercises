const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    if (num == 0) return 0;
    if (num > 0) {
        const fibonacciSequence = [1, 1];
        for (i = 2; i < num; i++) {
            let newFibonacciNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
            fibonacciSequence[i] = newFibonacciNumber;
            // fibonacciSequence.splice(i - 1, 0, newFibonacciNumber); --> I realised I couldn't do this beacause it will add the number before the chosen index....
        };
        return fibonacciSequence[num - 1];
    }
}
    // QUESTION: WHY DOES THIS RETURN UNDEFINED??

    // VS: 

    // if (num < 0) {
    //     return 'ERROR!';
    // } else if (num == 0) {
    //     return 0;
    // } else {
    //     const fibonacciSequence = [1, 1];
    //     for (i = 2; i < num; i++) {
    //         let newFibonacciNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    //         fibonacciSequence[i] = newFibonacciNumber;
    //     }
    //     return fibonacciSequence[num - 1];
    // }
// }
    
    // VS: 

    // if (n == 0) {
    //     return 0
    // } else if (n < 0) {
    //     return "ERROR!"
    // } else {
    //     const fibonacciSequence = [1, 1];
    //     for (i = 2; i < n; i++) {
    //         fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
    //     };
    //     return fibonacciSequence[n - 1]
    // }

    // VS:

    // if (n == 0) {
    //     return 0
    // } else {
    //     const fibonacciSequence = [1, 1];
    //     for (i = 2; i < n; i++) {
    //         fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    //     };
    //     return fibonacciSequence[n - 1]
    // }


// Do not edit below this line
module.exports = fibonacci;
