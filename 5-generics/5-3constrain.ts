interface Employee {
	pay(): void
}

class FullTime implements Employee {
	pay() {
		console.log('full time')
	}
	workFullTime() {}
}

class PartTime implements Employee {
	pay() {
		console.log('part time')
	}
	workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수는 shit
function payBad(Employee: Employee): Employee {
	Employee.pay()
	return Employee
}

// 구체적으로 Employee를 구현한 제네릭이라고 알려줘야 pay( )가 사용가능하다
function payGood<T extends Employee>(Employee: T): T {
	Employee.pay()
	return Employee
}

const jung = new FullTime()
const seop = new PartTime()
jung.workFullTime()
seop.workPartTime()

const obj = {
	name: 'jung',
	age: 20,
}

function getValue<T, S extends keyof T>(obj: T, something: S): T[S] {
	return obj[something]
}

console.log(getValue(obj, 'name'))
console.log(getValue(obj, 'age'))
console.log(getValue(obj, 'name'))
