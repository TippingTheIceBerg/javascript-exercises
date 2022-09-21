// years that can be divided by 4 are leap years, if they can be divided by 400 and 100 they are also leaps years. Otherwise they are not. By default, most years are not going to be leap years, so the default value should be false.
const leapYears = function(year) {
let results = false;

if(year % 4 === 0){
    results = true
}
if(year % 100 === 0 && year % 400 === 0){
    results = true;
}
if(year % 100 === 0 && year % 400 !== 0){
    results = false;
}


};

// Do not edit below this line
module.exports = leapYears;
