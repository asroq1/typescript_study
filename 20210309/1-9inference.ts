// Type inference

let text: string = 'hello'
function print(message = 'hello') {
	console.log(message)
}

print('hello')

function add(x: number, y: number): number {
	return x + y
}

const res = add(1, 2)
