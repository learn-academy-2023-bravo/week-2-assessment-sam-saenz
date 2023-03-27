// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.
// First, I will create a Jest testing statement using describe, taking in my functions name, "divisibleByThree", and an anonymous function with an it statement. That statement will describe my function's purpose, and have another anonymous function with an expect statement. That expect statement will take in a function call, and use .toEqual() with my expected test results inside. I will also have two more expect statements for the other two cases.

describe("divisibleByThree", () => {
    it("This function will take in an object as an argument, and use modulo to determine if the number inside of the object is evenly divisible by three", () => {
        const object1 = { number: 15 }
        // Expected output: "15 is divisible by three"
        const object2 = { number: 0 }
        // Expected output: "0 is divisible by three"
        const object3 = { number: -7 }
        // Expected output: "-7 is not divisible by three"
        expect(divisibleByThree(object1)).toEqual("15 is divisible by three")
        expect(divisibleByThree(object2)).toEqual("0 is divisible by three")
        expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three")
    })
})

// b) Create the function that makes the test pass.

// Now, to create the function, I will call it divisibleByThree, and have it take in an object as a parameter.
// I will use dot notation to extract the value from the number key in the object, and then use a modulo operator within a conditional statement to check if the number is divisible by three. If it is, I will use string interpolation to return a statement confirming it is divisible by three, and an opposite result if it is not. I also have a catch all error case after those.

const divisibleByThree = (object) => {
    if(object.number % 3 === 0) {
        return(`${object.number} is divisible by three`)
    } else if(object.number % 3 !== 0) {
        return(`${object.number} is not divisible by three`)
    } else {
        return "error"
    }
}

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
// First, I will create a Jest testing statement using describe, taking in my functions name, "allToCaps", and an anonymous function with an it statement. That statement will describe my function's purpose, and have another anonymous function with an expect statement. That expect statement will take in a function call, and use .toEqual() with my expected test results inside. I will also have one more expect statements for the other case.

describe("allToCaps", () => {
    it("This function will have an array of words as a parameter, and then for each entry in the array, capitalize all the words first letters", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
        expect(allToCaps(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(allToCaps(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})

// b) Create the function that makes the test pass.

// I will create a function called alltoCaps, which will take an array as an argument. Then I will use the map higher order function to make every index in the array capitalized. I will do this by first taking the  0th index character of the string, using.toUpperCase on it, then adding the rest of the string by slicing the 1st index forward. I then return the new mapped array.

const allToCaps = (array) => {
    return array.map(value => value[0].toUpperCase() + value.slice(1))
}


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
// First, I will create a Jest testing statement using describe, taking in my functions name, "firstVowel", and an anonymous function with an it statement. That statement will describe my function's purpose, and have another anonymous function with an expect statement. That expect statement will take in a function call, and use .toEqual() with my expected test results inside. I will also have two more expect statements for the other cases.

describe("firstVowel", () => {
    it("This function will take in a single string as an argument, and then iterate through the string until a vowel is found, and return the index thtat the vowel was found at.", () => {
        const vowelTester1 = "learn"
        // Expected output: 1
        const vowelTester2 = "academy"
        // Expected output: 0
        const vowelTester3 = "challenges"
        // Expected output: 2
        expect(firstVowel(vowelTester1)).toEqual(1)
        expect(firstVowel(vowelTester2)).toEqual(0)
        expect(firstVowel(vowelTester3)).toEqual(2)
    })
})

// b) Create the function that makes the test pass.

// I will create a function called firstVowel that will take in a string as an argument. Next, I will create a for loop that will iterate through each index of the string, until a vowel is found or the string ends, and take the index of the first vowel found and save it to a variable. Then if an index was found, return it, otherwise return a string saying no vowel was found.

const firstVowel = (string) => {
    vowelIndex = -1
    for(let i = 0; i < string.length; i++) {
        if((string[i].toLowerCase() === "e" || string[i].toLowerCase() === "a" || string[i].toLowerCase() === "i" || string[i].toLowerCase() === "o" || string[i].toLowerCase() === "u") && vowelIndex === -1) {
            vowelIndex = i
        }
    }
    if (vowelIndex !== -1) {
        return vowelIndex
    } else {
        return "There are no vowels"
    }
  }