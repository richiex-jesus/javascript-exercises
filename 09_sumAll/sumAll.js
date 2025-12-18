// requirement:
    // implement a function that takes two positive integers a and b (a > 0 and b > 0) and sum all numbers between a and b inclusive.
    // for negative values, return ERROR.
    // for non-integer values, return ERROR.
    // for non-integer parameters a/b, return ERROR.

// pseudocode:
    // 1. make a function called sumAll with two parameters a and b.
    // 2. PREVIOUSLY: make a FOR loop and obtain all numbers between a and b. unfortunately, i cannot do this yet because I did not consider the case that b is smaller than a. so like, function sumAll(4, 2)? 
    // 2. if a < b, then FOR loop from i = a to i = b. Increment with i++.
    // 3. if a > b, then FOR loop from i = b to i = a. Increment with i++.
    // 4. 

const sumAll = function(a, b) {
    
    if ((a < 0) || (b < 0)) return "ERROR";

    // if ((a % 1 != 0)||(b % 1 != 0)) return "ERROR"; --> comment: I did not actually need this line. I just needed to make sure that a and b are strictly integers, otherwise the function is not to be carried out.

    if ((Number.isInteger(a) == false) || (Number.isInteger(b) == false)) return "ERROR";

    if (a < b) {
        let result = 0;
        for (i = a; i <= b; i++) {
            result += i;
        }
        return result;
    }
    if (a > b) {
        let result = 0;
        for (i = b; i <= a; i++) {
            result += i;
        }
        return result;
    }

    console.log(result);
    

}

// attmept 2:
    


// attempt 1:
    // result == 0;
    // for (i = a; i < b + 1; i++) {
    //     if ((a < 0)||(b < 0)) {
    //         return "ERROR";
    //     } else if ((a))
    // }

// Do not edit below this line
module.exports = sumAll;
