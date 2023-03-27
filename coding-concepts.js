// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Bravo 2023"
// console.log(cohort.split(""))

// a) Your answer: I think that th output will be an array, with each character, including the space, being at its own index
// b) Verify and explain: I was correct, this is because .split turns a string into an array, and the argument "" means it will be split between every character.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: This will log "Hello, LEARN Student"
// b) Verify and explain: I was wrong, because I did not see that the greeter function did not actually return the interpolated string. Because there is no return statement, the console logs undefinded

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: This will log the array [8, 10, 12, 14, 16]
// b) Verify and explain: I was correct, because the map function takes in the anonymous function which multiplies a value by 2, and applies that to each value in the array, outputting an array of the same size. It doesnt need a return because it has one statement, with no curly braces.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: This will log [11, 13, 15]
// b) Verify and explain: I was correct, because the filter function takes in an array, and filters out any values where the given anonymous function is not true. Since that function looks for if a number is Not strictly equal to 0 when mod 2 is applied, this returns only the odd numbers.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: This will log "Javascript"
// b) Verify and explain: I was correct, because the dot notation is used to access the value at a given key in an object, and the languages key corresponds to an array value. Then, it is given the index 0, so the oth index in the array is returned, which is the string Javascript

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Bravo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: This will log the new Learn object instance called learnStudent, and I believe that the format will be [student:"George", cohort:"Bravo, year:2023]
// b) Verify and explain: I was correct that the Learn object would be logged, but the formatting I guessed was incorrect. It logs this because learnStudent is an object created of the Learn class, and "George" is the input argument that is assigned to the student key. THe actual output looks like:
// Learn { student: 'George', cohort: 'Bravo', year: 2023 }
