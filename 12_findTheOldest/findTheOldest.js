// First, we need to find the ages of the people.
// With the ages of the people, find the person who's the oldest.
//      A. If person is alive, use todays date
// Return oldest person.
// map it to find all ages, sort it to find the oldest, find to find.

const findTheOldest = function(people) {

people
.map(e => {if(!e['yearOfDeath']){
    e['yearOfDeath'] = new Date().getFullYear();
}
})

let ageList = people
.map(e=> e.age = e.yearOfDeath - e.yearOfBirth)
.sort((a,b)=> a > b? 1:-1);

let findOldest = people.find(name => (name.yearOfDeath-name.yearOfBirth) === ageList[ageList.length-1]);

return findOldest;






};

// Do not edit below this line
module.exports = findTheOldest;
