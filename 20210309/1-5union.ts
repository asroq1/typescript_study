{
	// Union Types : or

	type Direction = 'left ' | 'right' | 'up' | 'down'
	function move(direction: Direction) {
		console.log(direction)
	}
	move('left ')

	type TileSize = 8 | 16 | 32 | 64
	const title: TileSize = 16

	// fintion : login => succ or fail

	type succ = {
		response: {
			body: string
		}
	}
	type fail = {
		response: string
	}
	type LoginState = succ | fail
	function login(id : string , pwd : string):  Promise<LoginState> {
        return{
            response{
                body: 'login'
            }
        }
    }

    // printLoginState(state : LoginState)
    //  success ->  body
    // fail -> reason
    
    // ellies's

    function printLoginState(state : LoginState){ 
        if('response' in state){
            console.log(state.response.body);
        }else{
            console.log(state.reason.);
            
        }
    }
}
