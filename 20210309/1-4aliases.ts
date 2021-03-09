{
	// Type Aliases (awesome !)

	type Text = string
	const name: Text = 'Jung'
	const adress: Text = 'daegu'
	type Num = number

	type Student = {
		name: string
		age: number
	}

	const student: Student = {
		name: 'Jung',
		age: 12,
	}

	// String Literal types

	type Name = 'name'
	let jungName: Name
	jungName = 'name'
	type JSON = 'json'
	const json: JSON = 'json'

	type Boal = true
	const isCat: Boal = true
}
