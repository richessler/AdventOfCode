// --- Day 3: Perfectly Spherical Houses in a Vacuum ---
//
// Santa is delivering presents to an infinite two-dimensional grid of houses.
//
// He begins by delivering a present to the house at his starting location, and then an elf at the North Pole calls him via radio and tells him where to move next. Moves are always exactly one house to the north (^), south (v), east (>), or west (<). After each move, he delivers another present to the house at his new location.
//
// However, the elf back at the north pole has had a little too much eggnog, and so his directions are a little off, and Santa ends up visiting some houses more than once. How many houses receive at least one present?
//
// For example:
//
// > delivers presents to 2 houses: one at the starting location, and one to the east.
// ^>v< delivers presents to 4 houses in a square, including twice to the house at his starting/ending location.
// ^v^v^v^v^v delivers a bunch of presents to some very lucky children at only 2 houses.

const dayThreeInput = require('./DataInput').dayThreeInput

const mapHouseVisits = (movements) => {
  movements = movements.split('')
  const [north, south, east, west] = ['^', 'v', '>', '<']
  let x = 0
  let y = 0
  let movementArray = ['0,0']
  for(let i = 0; i < movements.length; i++) {
    let move = movements[i]

    if (move === north){
      movementArray.push([x, y++].toString())
    } else if (move === south) {
      movementArray.push([x, y--].toString())
    } else if (move === east) {
      movementArray.push([x++, y].toString())
    } else {
      movementArray.push([x--, y].toString())
    }
    }
    console.log(`${Array.from(new Set(movementArray)).length} lucky houses will receive a visit from Sandy Claws.`)
}

mapHouseVisits(dayThreeInput)
