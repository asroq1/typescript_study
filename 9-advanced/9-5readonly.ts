{
	type ToDo = {
		title: string
		description: string
	}

	function display(todo: Readonly<ToDo> //이렇게Readonly를 선언하면 실수로 타이틀을 변경할 수 없다.) {
		todo.title = 'jaja'
	}
}
