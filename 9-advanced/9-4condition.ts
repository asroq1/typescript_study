type Check<T> = T extends string ? boolean : number
type Type = Check<string>

type TypeName<T> = T extends string
	? 'string'
	: T extends number
	? 'number'
	: T extends boolean
	? 'boolean'
	: T extends undefined
	? 'undefined'
	: T extends Function
	? ' funtion'
	: 'object'

type T0 = TypeName<string>
;('string')
type T1 = TypeName<'a'>
;('string')
type T2 = TypeName<() => void>
;('funtion')
type T3 = TypeName<true>
type T4 = TypeName<undefined>
