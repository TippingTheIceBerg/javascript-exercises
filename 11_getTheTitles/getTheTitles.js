const getTheTitles = function(books) {
    let titleArr = []
books.map(e =>{
    titleArr.push(e.title)
    return titleArr;
})
};

// Do not edit below this line
module.exports = getTheTitles;
