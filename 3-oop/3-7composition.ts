{
	type CoffeeCup = {
		shots: number
		hasMilk: boolean
		hasSugar?: boolean
		residue: number
	}

	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup
	}

	class CoffeeMachine implements CoffeeMaker {
		private static BEANS_GRAMM_PER_SHOT: number = 20
		private coffeeBeans: number = 0

		constructor(
			private beans: number,
			private milk: MilkFrother,
			private sugar: SugarProvider
		) {
			this.coffeeBeans = this.coffeeBeans
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
			const coffee = this.extarct(shots)
			const sugarAdded = this.sugar.addSugar(coffee)
			return this.milk.makeMilk(sugarAdded)
		}
		clean() {
			console.log('cleaing the machine ....')
		}
	}

	interface MilkFrother {
		makeMilk(cup: CoffeeCup): CoffeeCup
	}

	interface SugarProvider {
		addSugar(cup: CoffeeCup): CoffeeCup
	}

	//싸구려 우유 거품기
	class CheapMilkSteamer implements MilkFrother {
		private steamMilk(): void {
			console.log('stemaing some milk ...')
		}
		makeMilk(cup: CoffeeCup): CoffeeCup {
			this.steamMilk()
			return {
				...cup,
				hasMilk: true,
			}
		}
	}
	class FancyMilkSteamer implements MilkFrother {
		private steamMilk(): void {
			console.log('Fancy stemaing some milk ...')
		}
		makeMilk(cup: CoffeeCup): CoffeeCup {
			this.steamMilk()
			return {
				...cup,
				hasMilk: true,
			}
		}
	}

	class ColdMilkSteamer implements MilkFrother {
		private steamMilk(): void {
			console.log('Cold stemaing some milk ...')
		}
		makeMilk(cup: CoffeeCup): CoffeeCup {
			this.steamMilk()
			return {
				...cup,
				hasMilk: true,
			}
		}
	}

	class NoMilk implements MilkFrother {
		makeMilk(cup: CoffeeCup): CoffeeCup {
			return cup
		}
	}
	//설탕 제조기
	class CandySugarMaker implements SugarProvider {
		private getSugar() {
			console.log('getting some sugar from jar')
			return true
		}
		addSugar(cup: CoffeeCup): CoffeeCup {
			const sugar = this.getSugar()
			return {
				...cup,
				hasSugar: sugar,
			}
		}
	}
	class SugarMixer implements SugarProvider {
		private getSugar() {
			console.log('getting some sugar from jar')
			return true
		}
		addSugar(cup: CoffeeCup): CoffeeCup {
			const sugar = this.getSugar()
			return {
				...cup,
				hasSugar: sugar,
			}
		}
	}
	class NoSugar implements SugarProvider {
		addSugar(cup: CoffeeCup): CoffeeCup {
			return cup
		}
	}

	// Milk
	const cheapMilkMaker = new CheapMilkSteamer()
	const fancyMilkMaker = new CheapMilkSteamer()
	const coldMilkMaker = new CheapMilkSteamer()
	const noMilk = new NoMilk()
	// Sugar
	const candySugar = new CandySugarMaker()
	const sugar = new CandySugarMaker()
	const noSugar = new NoSugar()

	const sweetCandyMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar)
	const sweetMachine = new CoffeeMachine(12, noMilk, sugar)

	const latterMachine = new CoffeeMachine(12, fancyMilkMaker, noSugar)
	const coldLatterMachine = new CoffeeMachine(12, fancyMilkMaker, sugar)
	const sweetLatteMachine = new CoffeeMachine(12, fancyMilkMaker, sugar)
}
