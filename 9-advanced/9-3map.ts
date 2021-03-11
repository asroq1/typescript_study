{
	type Video = {
		title: string
		author: string
	}

	type Optional<T> = {
		[P in keyof T]?: T[P] //for...in
	}

	type Readonly<T> = {
		readonly [P in keyof T]: T[P]
	}

	type VideoOptional = Optional<Video>

	type Animal = {
		name: string
		age: number
	}

	const animal: Optional<Animal> = {
		name: 'dog',
	}

	const video: Readonly<Video> = {
		title: 'hi',
		author: 'jung',
	}

	// 재사용성이 낮은 방법

	// type VideoOptional = {
	// 	title?: string
	// 	author?: string
	// 	description?: string
	// }

	// type VideoReadOnly = {
	// 	readonly title: string
	// 	readonly author: string
	// }

	type Nullable<T> = { [P in keyof T]: T[P] | null }

	const obj2: Nullable<Video> = {
		title: 'hi',
		author: null,
	}
	obj2
	type Proxy<T> = {
		get(): T
		set(value: T): void
	}

	type Proxify<T> = {
		[P in keyof T]: Proxy<T[P]>
	}
}
