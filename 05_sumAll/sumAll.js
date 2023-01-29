const sumAll = function(a,b) {
    let answer;
    if (a < b) {
    for (let i = a; a < b; i++) {
    answer += i
    }
    return answer
    } else if (a > b) {
    for (let i = b; b < a;i++) {
        answer += i
    }
    }
};

// Do not edit below this line
module.exports = sumAll;
