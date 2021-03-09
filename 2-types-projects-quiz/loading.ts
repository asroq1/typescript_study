{
	/**
	 * Print Loading State
	 */
	type LoadingState = {
		state: 'loading'
	}

	type SuccessState = {
		state: 'success'
		response: {
			body: string
		}
	}

	type FailState = {
		state: 'fail'
		reason: string
	}

	type ResourceLoadState = LoadingState | SuccessState | FailState

	// mine
	// function printLoginState(Resource: ResourceLoadState) {
	// 	if (Resource.state === 'loading') {
	// 		console.log('loading ...🦘')
	// 	} else if (Resource.state === 'success') {
	// 		console.log(' 😃 loaded')
	// 	} else if (Resource.state === 'fail') {
	// 		console.log('😱 no network ')
	// 	}
	// }

	// ellie's
	function printLoginState(state: ResourceLoadState) {
		switch (state.state) {
			case 'loading':
				console.log('loading...!')
				break
			case 'success':
				console.log(' 😃 loaded')
				break
			case 'fail':
				console.log('😱 no network')
				break
		}
	}
	printLoginState({ state: 'loading' }) // 👀 loading...
	printLoginState({ state: 'success', response: { body: 'loaded' } }) // 😃 loaded
	printLoginState({ state: 'fail', reason: 'no network' }) // 😱 no network
}
