const leapYears = function(year) {
    if (year%4==0 && year%100==0 && year%400!=0) {
        return false
    } else if (year%4==0) {
        return true
    } else {
        return false
    }
};

console.log (leapYears(1996))

// Do not edit below this line
// module.exports = leapYears;


// if dividing by 4 is 0 then its a leap year