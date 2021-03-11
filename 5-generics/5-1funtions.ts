{
	//기존의 함수
	function checkNotNull(arg: number | null): number {
		if (arg == null) {
			throw new Error('not valid error')
		}
		return arg
	}
	const res = checkNotNull(123)
	console.log(res)
	console.log(null)

	//제네릭 사용 이후
	// 수 많은 경우의 수를 커버할 수 있는 방법이다
	function checkNotNull<T>(arg: T | null): T {
		if (arg == null) {
			throw new Error('not valid error')
		}
		return arg
	}
	const number = checkNotNull(123)
	const boal: boolean = checkNotNull(true)
}
