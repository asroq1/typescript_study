{
	// Array
	const friuts: string[] = ['tomato', 'banana']
	const friuts: Array<number> = [1, 2]

	function printArray(friuts: readonly string[]) {}

	//Tuple (권장하지 않음)
	let student = [string, number]
	student = ['name', 123]
	student[0] //name
	student[1] //123
	const [name, age] = student
    
}
