{
	// ES5
	function jsAd(num1, num2) {
		return num1 + num2
	}

	// TS
	function add(num1: number, num2: number): number {
		return num1 + num2
	}

	// ES5
	function jsFetchNum(id) {
		// code..
		// code..
		// code..
		return new Promise((resolve, reject) => {
			resolve(200)
		})
	}

	// TS
	function jsFetchNum(id: string): Promise<number> {
		// code ..
		// code ..
		// code ..

		return new Promise((resolve, reject) => {
			resolve(100)
		})
	}

	// ES5 => TS
	// Optional parameter
	function printName(firstName: string, lastName?: string) {
		console.log(firstName)
		console.log(lastName)
	}
	printName('steve', 'jobs')
	printName('jordan') //optional이 된다 !
	printName('jason', undefined)

	// Default parameter
	function printMessage(message: string = ' default message ') {
		console.log(message)
	}
	printMessage()

	//Rest parameter
	function addNumbers(...numbers: number[]): number {
		return numbers.reduce((a, b) => a + b)
	}
	console.log(addNumbers(1, 2))
	console.log(addNumbers(1, 2, 3, 4))
	console.log(addNumbers(1, 4, 2, 4, 5))
}
