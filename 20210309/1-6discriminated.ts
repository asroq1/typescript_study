{
	type SuccessState = {
		result: 'success'
		response: {
			body: string
		}
	}

	type FailState = {
		result: 'fails'
		reason: string
	}

	type LoginState = SuccessState | FailState

	function login(): LoginState {
		return {
			result: 'success',
			response: {
				body: 'logged in',
			},
		}

		function printLoginState(state: LoginState) {
			state.result

			if (state.reuslt === 'success') {
				console.log('welcome')
			} else {
				console.log('bye')
			}
		}
	}
}
