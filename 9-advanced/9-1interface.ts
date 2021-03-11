type PositionType = {
	x: number
	y: number
}

interface PositionInterface {
	x: number
	y: number
}
interface PositionInterface {
	z: number
}
// obj
const ojb1: PositionType = {
	x: 1,
	y: 1,
}
const ojb2: PositionInterface = {
	x: 1,
	y: 1,
}

// class
class Pos1 implements PositionType {
	x: number
	y: number
}
class Pos2 implements PositionInterface {
	x: number
	y: number
	z: number
}

interface ZpositionInterface extends PositionInterface {
	z: number
}

type ZpositionType = PositionType & { z: number }

//인터페이스만 머지가 가능하다 !
interface PositionInterface {
	z: number
}

// 타입만 가능한 것은 computed properties가 사용가능
type Person = {
	name: string
	age: number
}

type Name = Person['name']

//이런 것은 오직 타입에서만 구현이 가능하다
type NumberType = number
type Direction = 'left' | 'right'
