const findTheOldest = function(peopleArr) {
    let oldest = peopleArr[0]

    peopleArr.forEach(
        (person) => {
            if (getAge(person) > getAge(oldest)) {
                oldest = person
            }
        }
    )

    return oldest
};

const getAge = function(person) {
    if (person.yearOfDeath != null) {
        return person.yearOfDeath - person.yearOfBirth
    } else {
        //create Date object and then get year
        var today = new Date()
        var year = today.getFullYear()

        return year - person.yearOfBirth
    }
}


// Do not edit below this line
module.exports = findTheOldest;
