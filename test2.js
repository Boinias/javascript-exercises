const sumAll = function(a,b) {
    let answer = 0
    if (a < b) {
    for (let i = a; i <= b; i++) {
    answer += i
    }
    } else if (a > b) {
    for (let i = b; i <= a;i++) {
        answer += i
    }
    }
    return answer
};