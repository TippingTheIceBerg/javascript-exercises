// [°C] = ([°F] − 32) × 5⁄9
// [°F] = [°C] × 9⁄5 + 32
const ftoc = function(temp) {
  let conversion = ""
  conversion = (temp - 32) * (5/9);
  return +conversion.toFixed(1)
};

const ctof = function(temp) {
let conversion = "";
conversion = temp * (9/5) + 32;

return +conversion.toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
