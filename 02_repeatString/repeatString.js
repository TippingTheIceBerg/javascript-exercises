const repeatString = function(string,num) {
let container = "";
for(let i = 0; i < num; i++){
    container += string
}
if(num < 0){
    container = "ERROR"
}
return container;
};

// Do not edit below this line
module.exports = repeatString;
