/**
 * Let's make a calculator 🧮
 */

//  mine

// function calculate(type: string, num1: number, num2: number): number {
// 	if (type === 'add') {
// 		return num1 + num2
// 	} else if (type === 'substract') {
// 		return num1 - num2
// 	} else if (type === 'multiply') {
// 		return num1 * num2
// 	} else if (type === 'divide') {
// 		return num1 / num2
// 	} else if (type === 'remainder') {
// 		return num1 % num2
// 	}
// }

// ellis's

type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder'
function calculate(command: Command, a: number, b: number): number {
	switch (command) {
		case 'add':
			return a + b

		case 'substract':
			return a - b

		case 'multiply':
			return a * b

		case 'divide':
			return a / b

        case 'remainder':
              return a % b
    
            default: 
            throw new Error('unknwon error')
}

console.log(calculate('add', 1, 3)) // 4
console.log(calculate('substract', 3, 1)) // 2
console.log(calculate('multiply', 4, 2)) // 8
console.log(calculate('divide', 4, 2)) // 2
console.log(calculate('remainder', 5, 2)) // 1
