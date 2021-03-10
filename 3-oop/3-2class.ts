{
	//타입을 미리 지정
	type CoffeeCup = {
		shots: number
		hasMilk: boolean
		residue: number
	}

	class CoffeeMaker {
		// static을 붙면 class level
		static BEANS_GRAMM_PER_SHOT: number = 20

		// 붙이지 않으면 instance level
		coffeeBeans: number = 0

		constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans
		}

		// static 메소드
		static makeMachine(coffeBeans: number): CoffeeMaker {
			return new CoffeeMaker(coffeBeans)
		}
		//파라미터와 반환값 설정 해주기
		makeCoffe(shots: number): CoffeeCup {
			//에러처리
			if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
				//static을 붙여 class level이 되어서 this 대신에 클래스 이름인 CoffeeMaker을 붙여준다
				throw new Error('Not enought coffee benas!')
			}
			this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT //static을 붙여 class level이 되어서 this 대신에 클래스 이름인 CoffeeMaker을 붙여준다
			return {
				// 최신문법으로
				// shots, 만 입력해도 가능하다.
				shots: shots,
				hasMilk: false,
				residue: shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT, //static을 붙여 class level이 되어서 this 대신에 클래스 이름인 CoffeeMaker을 붙여준다
			}
		}
	}

	const maker = new CoffeeMaker(32)
	console.log(maker)
	maker.makeCoffe
	const maker2 = new CoffeeMaker(14)
	console.log(maker2)
	// BEANS_GRAMM_PER_SHOT은 class level이 되어서 이제 출력되지 않는다
	const maker3 = CoffeeMaker.makeMachine(3)
}
