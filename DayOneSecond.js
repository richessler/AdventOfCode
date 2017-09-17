// Now, given the same instructions, find the position of the first character that causes him to enter the basement (floor -1). The first character in the instructions has position 1, the second character has position 2, and so on.

// For example:

// ) causes him to enter the basement at character position 1.
// ()()) causes him to enter the basement at character position 5.
// What is the position of the character that causes Santa to first enter the basement?
const dayOneInput = require('./DataInput').dayOneInput

const findBasementEntrance = (input) => {
	let floors = 0
	let basement = 0
	let inputArray = input.split('')

	while(floors >= 0) {
		inputArray[basement] === '(' ? floors++ : floors--
		basement++
	}
	console.log(`Santa will head to the basement on move ${basement}.`)
}

findBasementEntrance(dayOneInput)
