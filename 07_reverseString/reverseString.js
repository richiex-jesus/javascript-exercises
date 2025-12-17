const reverseString = function(str) {
    let newString = str.split('');
    newString.reverse();
    let newStringFinal = newString.join('');
    console.log(newStringFinal);
    return newStringFinal;
    
};

reverseString(str);

// Do not edit below this line
module.exports = reverseString; 
