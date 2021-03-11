{
	//타입을 미리 지정
	type CoffeeCup = {
		shots: number
		hasMilk: boolean
		residue: number
	}

	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup
	}

	interface CommonCoffeeMaker {
		makeCoffee(shots: number): CoffeeCup
		clean(): void
	}

	class CoffeeMachine implements CoffeeMaker {
		private static BEANS_GRAMM_PER_SHOT: number = 20

		private coffeeBeans: number = 0

		private constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans
		}

		static makeMachine(coffeBeans: number): CoffeeMachine {
			return new CoffeeMachine(coffeBeans)
		}

		grindBeans(shots: number) {
			console.log(`grinding beans for ${shots}`)
			if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
				throw new Error('Not enought coffee benas!')
			}
			this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT
		}

		private preheat(): void {
			console.log('heating up ...')
		}

		private extarct(shots: number): CoffeeCup {
			console.log(`pulling ${shots} shots..`)
			return {
				shots,
				hasMilk: false,
				residue: shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT,
			}
		}
		makeCoffee(shots: number): CoffeeCup {
			this.grindBeans(shots)
			this.preheat()
			return this.extarct(shots)
		}
		clean() {
			console.log('cleaing the machine ....')
		}
        
	}
	class AmateurUser {
		constructor(private machine: CoffeeMaker) {}
		makeCoffee() {
			console.log('Im ama 🤑')
			const coffee = this.machine.makeCoffee(2)
			console.log(coffee)
			console.log('-----------------')
		}
	}

	class ProBarista {
		constructor(private machine: CommonCoffeeMaker) {}
		makeCoffe() {
			console.log('Im pro 😎')
			const coffee = this.machine.makeCoffee(2)
			console.log(coffee)
			this.machine.makeCoffee(10)
			this.machine.clean()
			console.log('-----------------')
		}
	}

	const maker: CoffeeMachine = CoffeeMachine.makeMachine(244)
	const amateur = new AmateurUser(maker)
	const pro = new ProBarista(maker)
	amateur.makeCoffee()
	pro.makeCoffe()
}
