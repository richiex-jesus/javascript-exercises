const palindromes = function (someString) {
    const cleanedString = someString.toLowerCase().replace(/[^a-z0-9]/g, '')
    const reversedString = cleanedString.split("").reverse().join("");
    return cleanedString === reversedString;
};

// SUPER IMPORTANT learning point: use the regex /[^a-z0-9]/g and replace it when I do not want any punctuation.

// Do not edit below this line
module.exports = palindromes;
