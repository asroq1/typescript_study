{
	const obj = {
		name: 'jung',
	}

	obj.name
	obj['name']

	type Animal = {
		name: string
		age: number
		gender: 'male' | 'female'
	}

	// 이렇게 string으로 할당해줄 수 있다.

	type Name = Animal['name'] //strig
	const text: Name = 'wow'

	type Gender = Animal['gender'] // 'male' | 'female'

	type keys = keyof Animal // 'name' | 'age' | 'gender'

	type Person = {
		name: string
		gender: Animal['gender'] // 젠더 key의 value를 할당
	}

	const person: Person = {
		name: 'jung',
		gender: 'female', // male | female 중 선택이 가능하다.
	}
}
