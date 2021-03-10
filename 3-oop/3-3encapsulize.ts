{
	//타입을 미리 지정
	type CoffeeCup = {
		shots: number
		hasMilk: boolean
		residue: number
	}

	class CoffeeMaker {
		// static을 붙면 class level
		//private으로 상태 변경
		private static BEANS_GRAMM_PER_SHOT: number = 20

		// 붙이지 않으면 instance level
		private coffeeBeans: number = 0

		private constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans
		}

		// static 메소드
		static makeMachine(coffeBeans: number): CoffeeMaker {
			return new CoffeeMaker(coffeBeans)
		}

		fillCoffeeBeans(beans: number) {
			if (beans < 0) {
				throw new Error('valuue for beans should bean greater than 0')
			}
			this.coffeeBeans += beans
		}

		withMilk(shots: number): CoffeeCup {
			if (!shots) {
				throw new Error('You need to drink milk !')
			} else {
				return {
					shots: shots,
					hasMilk: true,
					residue: shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT,
				}
			}
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

	const maker = CoffeeMaker.makeMachine(32)
	maker.fillCoffeeBeans(32)
	console.log(maker.withMilk(2))
	console.log(maker.makeCoffe(2))

	class User {
		private internalAge = 4

		// /getter  & setter 활용
		get fullName(): string {
			return `${this.firstName} ${this.lastName}`
		}

		get age(): number {
			return this.internalAge
		}
		set age(num: number) {
			if (num < 0) {
				throw new Error('NOT ALLOWED')
			}
			this.internalAge = num
		}

		constructor(private firstName: string, private lastName: string) {}
	}

	const user = new User('Hyunseop', 'Jung')
	user.age = 6
	console.log(user.age)
	console.log(user.fullName)
}
