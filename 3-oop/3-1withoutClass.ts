{
	//타입을 미리 지정
	type CoffeeCup = {
		shots: number
		hasMilk: boolean
		residue: number
	}

	const BEANS_GRAMM_PER_SHOT: number = 20

	let coffeeBeans: number = 0

	//파라미터와 반환값 설정 해주기
	function makeCoffe(shots: number): CoffeeCup {
		//에러처리
		if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
			throw new Error('Not enought coffee benas!')
		}
		coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT
		return {
			// 최신문법으로
			// shots, 만 입력해도 가능하다.
			shots: shots,
			hasMilk: false,
			residue: shots * BEANS_GRAMM_PER_SHOT,
		}
	}

	coffeeBeans += 4 * BEANS_GRAMM_PER_SHOT
	const coffee = makeCoffe(4)
	console.log(coffee)
}
