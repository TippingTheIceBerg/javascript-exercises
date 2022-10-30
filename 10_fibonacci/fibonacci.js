// we start at one, add one to it, now we take that one, and add two to it.
// a = 1, b = 1, c = a + b, now I want  a = b, b = c,

const fibonacci = function(num) {
    let a = 1; 
    let b = 1;
    let c = 0;
    let arr = [a,b]

for(let i = 0; i < num; i++){
   
     c = a + b;
     arr.push(c)
     a = b;
     b = c;
     
}
if(num < 0){
    return "OOPS"
}

return arr[num-1]
};

// Do not edit below this line
module.exports = fibonacci;
