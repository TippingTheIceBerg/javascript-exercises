const palindromes = function (word) {
    let onlyLetters = word.replace(/\W/g,"").toLowerCase();
    let reverseLetters = onlyLetters.split("").reverse("").join("").toLowerCase();

  return reverseLetters === onlyLetters? true: false;
};

// Do not edit below this line
module.exports = palindromes;
