{
	type CoffeeCup = {
		shots: number
		hasMilk: boolean
		residue: number
	}

	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup
	}

	class CoffeeMachine implements CoffeeMaker {
		private static BEANS_GRAMM_PER_SHOT: number = 20
		private coffeeBeans: number = 0

		constructor(coffeeBeans: number) {
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
	class CaffeLatteMachine extends CoffeeMachine {
		constructor(beans: number, public serialNumber: string) {
			super(beans)
		}

		private steamMilk(): void {
			console.log('steaming some milk .... 🥕')
		}
		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots)
			this.steamMilk()
			return {
				...coffee,
				hasMilk: true,
			}
		}
	}
	const machine = new CoffeeMachine(23)
	const latteMachine = new CaffeLatteMachine(23, 'speciality')
	const latte = latteMachine.makeCoffee(1)
	console.log(latte)
	console.log(latteMachine.serialNumber)
}
