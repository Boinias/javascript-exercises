const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]



const findTheOldest = function() {
let oldest;
let oldestAge = 0

for (i=0; i<people.length;i++) {
  if (people[i].hasOwnProperty("yearOfDeath") === false) {
    oldest = people[i].name;
  } else if (people[i].hasOwnProperty("yearOfDeath") === true && (people[i].yearOfDeath)-(people[i].yearOfBirth) > oldestAge) {
    oldestAge = (people[i].yearOfDeath-people[i].yearOfBirth)
    oldest = people[i].name
  }
}


console.log (oldestAge)
console.log (oldest)

}

findTheOldest()

// Do not edit below this line
module.exports = findTheOldest;
