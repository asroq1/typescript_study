const x = {}
const y = {}

console.log(x)
console.log(y)
console.log(x.toString())
console.log(x.__proto__ === y.__proto__) //true 같은 object를 상속하기 떄문에

const array = []
console.log(array) // 상속도 array => Array => Object

function CoffeeMachine(beans) {
	this.beans = beans
	// instance Member level
	this.makeCoffee = shots => {
		console.log('making ...')
	}
}
//prototype member level
// CoffeeMachine.prototype.makeCoffe = shots => {
// 	console.log('making ...')
// }
const machine1 = new CoffeeMachine(10)
const machine2 = new CoffeeMachine(20)

console.log(machine1)
console.log(machine2)

function LatteMachine(milk) {
	this.milk = milk
}
const latteMachine = new LatteMachine(123)
LatteMachine.prototype = Object.create(CoffeeMachine.prototype)
console.log(latteMachine)
latteMachine.makeCoffee()
