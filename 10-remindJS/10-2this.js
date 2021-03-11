console.log(this)

function simpleFunc() {
	console.log(this)
}

simpleFunc()

class Counter {
	count = 0

	//혹은 arrow Funtion을 이용하면 bind를 사용하지 않아도 된다.
	increase = () => {
		console.log(this)
	}
}

const counter = new Counter()
counter.increase()
// const caller = counter.increase

//bind를 활용해서 묶어줘야 한다
const caller = counter.increase.bind(counter)
caller()

class Bob {}
const bob = new Bob()
bob.run = counter.increase
bob.run()
// const , let같은 변수는 window의 객체가 아니라 undefinded이 나옴
// but ! var은 예외이다. window에 등록되어 있어 접근이 가능하다
