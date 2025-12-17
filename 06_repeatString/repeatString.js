const repeatString = function(string, num) {

    let result = "";

    if (num < 0) {
        return 'ERROR'
    }

    for (i = 1; i <= num; i++) {
        result += string;
    }

    return result;
}


repeatString('hey', -1);

// Do not edit below this line
module.exports = repeatString;
