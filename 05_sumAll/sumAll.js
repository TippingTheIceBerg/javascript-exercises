const sumAll = function(num1,num2) {
    let startNum = 0;
    let endNum = 0;
    let sumNum = 0;
    num1 > num2? endNum = num1:endNum = num2;

for(let i = 0; i <= endNum; i++){
    sumNum += i
  
}
if(isNaN(num1) || isNaN(num2)){
    sumNum = "ERROR"
}
if(typeof(num1) === "string" || typeof(num2) == "string"){
    sumNum = "ERROR"
}
if(num1 < 0 || num2 < 0){
    sumNum = "ERROR"
}
return sumNum;
};

// Do not edit below this line
module.exports = sumAll;
