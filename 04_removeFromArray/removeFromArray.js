const removeFromArray = function(arr,...remove) {
let newArr = arr.filter(entry =>
    !remove.includes(entry)
)
return newArr;
};


// Do not edit below this line
module.exports = removeFromArray;
