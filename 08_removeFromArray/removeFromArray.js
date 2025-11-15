const removeFromArray = function(arr, ...toRemove) {
    
    for (let item of toRemove) {
        const newArray = arr.filter(value => value !== item)
        arr = newArray;
    }

    return arr
};

console.log(removeFromArray([1, 2, 3, 4], 3, 4, 5))
// Do not edit below this line
module.exports = removeFromArray;
