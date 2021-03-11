interface Stack<T> {
	readonly size: number
	push(value: T): void
	pop(): T
}
type StackNode<T> = {
	readonly value: T
	readonly next?: StackNode<T>
}
class StackImpl<T> implements Stack<T> {
	private _size: number = 0
	private head?: StackNode<T>
	constructor(private capacity: number) {}
	get size() {
		return this.size
	}
	push(value: T) {
		const node: StackNode<T> = { value, next: this.head }
		this.head = node
		this._size++
	}
	pop(): T {
		if (this.head == null) {
			throw new Error('Stack is empty')
		}
		const node = this.head
		this.head = node.next
		this._size--
		return node?.value
	}
}

const stack = new StackImpl<string>(200)
stack.push('123')
stack.push('456')
stack.push('789')
while (stack.size !== 0) {
	console.log(stack.pop())
}
const stack1 = new StackImpl<number>(2100)
stack1.push(123)
stack1.push(456)
stack1.push(789)

while (stack.size !== 0) {
	console.log(stack.pop())
}
