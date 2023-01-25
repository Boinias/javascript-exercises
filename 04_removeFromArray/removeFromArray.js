const removeFromArray = function(array, ...args) {
    const filtered = array.filter(forRemoval);
    function forRemoval (value) {
        return value != args;
    }
    return filtered
};

// Do not edit below this line
module.exports = removeFromArray;
