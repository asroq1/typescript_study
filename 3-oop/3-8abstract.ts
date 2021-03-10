{
	type CoffeeCup = {
		shots: number
		hasMilk: boolean
		hasSugar?: boolean
	}

	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup
	}

	abstract class CoffeeMachine implements CoffeeMaker {
		private static BEANS_GRAMM_PER_SHOT: number = 20
		private coffeeBeans: number = 0

		constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans
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

		protected abstract extarct(shots: number): CoffeeCup

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

		protected extarct(shots: number): CoffeeCup {
			this.steamMilk()
			return {
				shots,
				hasMilk: true,
			}
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
	class SweetCoffeeMaker extends CoffeeMachine {
		private sugarSyrup(): void {
			console.log(' add sugar .... 🧂')
		}

		protected extarct(shots: number): CoffeeCup {
			return {
				shots,
				hasMilk: true,
				hasSugar: true,
			}
		}
		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots)
			this.sugarSyrup()
			return {
				...coffee,
				hasSugar: true,
			}
		}
	}
	const machines: CoffeeMaker[] = [
		new CaffeLatteMachine(106, '1'),
		new SweetCoffeeMaker(160),
	]
	machines.forEach(machine => {
		console.log('-----------------')
		machine.makeCoffee(1)
	})
}
