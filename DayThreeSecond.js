// --- Part Two ---
//
// The next year, to speed up the process, Santa creates a robot version of himself, Robo-Santa, to deliver presents with him.
//
// Santa and Robo-Santa start at the same location (delivering two presents to the same starting house), then take turns moving based on instructions from the elf, who is eggnoggedly reading from the same script as the previous year.
//
// This year, how many houses receive at least one present?
//
// For example:
//
// ^v delivers presents to 3 houses, because Santa goes north, and then Robo-Santa goes south.
// ^>v< now delivers presents to 3 houses, and Santa and Robo-Santa end up back where they started.
// ^v^v^v^v^v now delivers presents to 11 houses, with Santa going one direction and Robo-Santa going the other.

const dayThreeInput = require('./DataInput').dayThreeInput

mapHouseVisitsWithRobo = (movements) => {
  movements = movements.split('')
  const [north, south, east, west] = ['^', 'v', '>', '<']
  let moveObj = { 0: ['0,0'], 1: ['0,0'] }

  for(let i = 0; i < movements.length; i++) {
    let index = i % 2 === 0 ? 0 : 1
    let [x, y] = moveObj[index][moveObj[index].length - 1].split(',')
    x = parseInt(x)
    y = parseInt(y)
    let move = movements[i]

    if (move === north){
      y = y + 1
      moveObj[index].push([x, y++].toString())
    } else if (move === south) {
      y = y - 1
      moveObj[index].push([x, y--].toString())
    } else if (move === east) {
      x = x + 1
      moveObj[index].push([x++, y].toString())
    } else {
      x = x - 1
      moveObj[index].push([x--, y].toString())
    }
  }

  let santaHouse = Array.from(new Set(moveObj[0]))
  let robitHouse = Array.from(new Set(moveObj[1]))


  let totalVisited = Array.from(new Set(santaHouse.concat(robitHouse)))
  console.log(`${santaHouse.length} lucky houses will receive a visit from Sandy Claws ${robitHouse.length} lucky houses will receive a visit from ROBIT for a Total of ${totalVisited.length} houses visited.`)
}

mapHouseVisitsWithRobo(dayThreeInput)
