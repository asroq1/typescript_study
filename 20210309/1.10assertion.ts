{
	// Type Assertions

	function jsStrFunc(): any {
		return 'hey'
	}

	const res = jsStrFunc()
	console.log((res as string).length)
	console.log(((<string>res) as string).length)

	const wrong: any = 5
	console.log((wrong as Array<number>).push(1)) // horrible things

	function findNumbers(): number[] | undefined {
		return undefined
	}

	const numbers = findNumbers()
	numbers!.push(2)

	const btn = document.querySelector('class')
	if (btn) {
		btn.nodeValue
	}
}
