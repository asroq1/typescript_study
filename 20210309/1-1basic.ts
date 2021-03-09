{
	// JavaScript

	// old:var
	var age = 5
	age = 1

	// let (변수)
	let name = 'hello'
	name = 'hi'

	// const (상수)
	const age = 5
	age = 5

    // JavaScript

    Primitive; number, string , boolean, bigin, symbol , null, undefined
    Object: function, Array....

    // TypeScript

    // number
    const num:number = 1
    
    //string
    const str:string = 'hello';
    
    //boolean
    const boal: boolean = false;
    
    // undefined
    let name: undefined; //shit
    let age: number | undefined //usually
    age = undefined;
    age = 1;

    function find(): number | undefined{
        return undefined;
    }

    // null
    let person: null; //shit
    let person2: string | null;

    //unknow shit
    let notSure : unknown = 0;
    notSure = 'he';
    notSure = true;

    //any  shits
    let anything : any = 0;
    anything = 'elllel';
    anything = 22;

    //void
    function print(): void {
        console.log('hey');
        return;
    }

    let unsable : void = undefined; 

    //never
    function throwError(message: string) : never{
       // message -> server (log)
        throw new Error(message);
        
    while(true){}
    }
    let neverEnding: never; //shit

    //Object shit
    let obj:object;
    function acceptSomeObj(obj: object){

    }

    acceptSomeObj({name : 'marsoon'});
    acceptSomeObj({marsoon : 'human' });

}
