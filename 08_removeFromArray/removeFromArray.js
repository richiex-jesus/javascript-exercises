// pesudocode:

// make a function called removeFromArray with two parameters, arr and ...items.
// currently, I am considering one option:
    // - check whether every item in arr is also an item in ...items. if this returns true, then splice it.

// how am I going to execute this?
// For loop! put every item of arr in a variable x. unfortunately, there is no way that I will be able to remove x from a specifc index.
// for every x such that ...items.include(x) returns true, remove that particlar item in x from arr.
// repeat until end of arr. 
// return arr.





const removeFromArray = function(arr, ...items) {

    // attempt 2:
    isTrue:
    for (i = 0; i < arr.length; i++) {
        let x = arr[i]
        if ([...items].includes(x)){
            arr.splice(i, 1);
            i--;
        } else continue isTrue;
    }

    return arr;

    // attempt 1:
    // isTrue:
    // for (i = 0; i < arr.length; i++) {
    //     let num = arr[i];
    //     if (num == items) {
    //         arr.splice(i, 1);
    //         i--;
    //     } else continue isTrue;
    // }

    return arr;
}

removeFromArray([1, 2, 3, 4], 3, 4); // [1, 2]

// Do not edit below this line
module.exports = removeFromArray;
