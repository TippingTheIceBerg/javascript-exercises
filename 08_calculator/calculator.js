const add = function(number1,number2) {
	return number1+number2
};

const subtract = function(num1,num2) {
	return num1-num2
};

const sum = function(arr) {
  return arr.reduce((num,totalSum)=>  num + totalSum,0) };

const multiply = function(arr) {
  return arr.reduce((num,multTotal)=>  num*multTotal)};

const power = function(num1,num2) {
let powerNum = 1;
for(let i = 0; i < num2; i++ ){
 powerNum = powerNum * num1;
}
return powerNum;

	
};
const factorial = function(num) {
if(num == 0){
  return 1;
}
return num*factorial(num-1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
