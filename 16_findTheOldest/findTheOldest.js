const people = [
    {   name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {   name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {   name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

const findTheOldest = function(people) {
    
    let peopleSorted = people.sort((a, b) => {

        if (a.yearOfDeath == undefined) {
            let currentYear = (new Date()).getFullYear();
            let aAge = currentYear - a.yearOfBirth;
            let bAge = b.yearOfDeath - b.yearOfBirth;
            return aAge > bAge ? -1 : 1;
        } else if (b.yearOfDeath == undefined) {
            let currentYear = (new Date()).getFullYear();
            let bAge = currentYear - b.yearOfBirth;
            let aAge = a.yearOfDeath - a.yearOfBirth;
            return aAge > bAge ? -1 : 1;
        } else {
            let aAge = a.yearOfDeath - a.yearOfBirth;
            let bAge = b.yearOfDeath - b.yearOfBirth;
            return aAge > bAge ? -1 : 1;
        }
    })

    return peopleSorted[0];

    // let newPeople = people.sort((a, b) => {
    //     console.log(a.yearOfDeath - a.yearOfBirth);
    //     console.log(b.yearOfDeath - b.yearOfBirth);
    //     (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1 : 1;   
    // })
    // console.log(newPeople);
};

// Do not edit below this line
module.exports = findTheOldest;
