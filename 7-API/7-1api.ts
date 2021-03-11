type Student = {
	passed: boolean
}

const students: Student[] = [
	{ passed: true },
	{ passed: true },
	{ passed: true },
]

const res = students.every(students => {
	return students.passed
})

console.log(res)

class Animal {}
class Cat extends Animal {
	isCat: boolean = true
}
class Dog extends Animal {
	isCat: boolean = false
}

const animals: Animal[] = [new Cat(), new Cat(), new Dog()]

function isCat(animal: Animal): animal is Cat {
	return (animal as Cat).isCat !== undefined
}
console.log(animals.every<Cat>(isCat))
