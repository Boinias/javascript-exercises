

const palindromes = function (text) {

    for (let i = 0; i < text.length; i++)
    {

    if (text[i] < 'A' || text[i] > 'Z' &&
    text[i] < 'a' || text[i] > 'z')
    {
           
    text = text.substring(0, i) + text.substring(i + 1);
    i--;
    }
}
let splitString = text.split("");
let reversedString = splitString.reverse();
let joinedArray = reversedString.join("")


if (text === joinedArray) {
    return true
} else {
    return false
}
};


console.log(palindromes('ZZZZ car, a man, a maracaz.'))

// Do not edit below this line
module.exports = palindromes;



