interface Either<L, R> {
	left: () => L
	right: () => R
}

class SimplEither<L, R> implements Either<L, R> {
	constructor(private leftVal: L, private rightVal: R) {}

	left(): L {
		return this.leftVal
	}

	right(): R {
		return this.rightVal
	}
}

const either = new SimplEither(4, 5)
console.log(either.left())
console.log(either.right())

const best = new SimplEither({ firstName: ' hyunseop ' }, 'jung')
console.log(best)
