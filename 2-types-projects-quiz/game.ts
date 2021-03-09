/**
 * Let's make a game 🕹
 */

// mine
// let position: { x: number; y: number } = {
// 	x: 0,
// 	y: 0,
// }

// type Commands = 'up' | 'down' | 'left' | 'right'

// function move(command: Commands): number {
// 	switch (command) {
// 		case 'up':
// 			return (position.y = position.y + 1)
// 		case 'down':
// 			return (position.y = position.y - 1)
// 		case 'left':
// 			return (position.x = position.x - 1)
// 		case 'right':
// 			return (position.x = position.x + 1)
// 	}
// }

// ellie's

const position = { x: 0, y: 0 }

function move(direction: 'up' | 'down' | 'left' | 'right') {
	switch (direction) {
		case 'up':
			position.y += 1
			break
		case 'down':
			position.y -= 1
			break
		case 'left':
			position.x += 1
			break
		case 'right':
			position.x -= 1
			break

		default:
			throw new Error('get back ! ')
	}
}
console.log(position) // { x: 0, y: 0}
move('up')
console.log(position) // { x: 0, y: 1}
move('down')
console.log(position) // { x: 0, y: 0}
move('left')
console.log(position) // { x: -1, y: 0}
move('right')
console.log(position) // { x: 0, y: 0}
