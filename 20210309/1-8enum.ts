{
	// Enum
    
    ES5 WAYS
	const MAX_NUM = 6
	const MAX_STUDENTS_PER_CLASS = 10
    const MONDAY = 0;
    const TUESDAY = 1;
    const WENDESDAY = 2;
    const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESEDAY": 1, "WENDESDAY": 2 })
    const dayOfToday = DAYS_ENUM.MONDAY;

    TS WAYS
    type DaysOfWeek = 'MON' | 'TUE' | 'WED'
    enum Days{
        Mon,
        Tues,
        Wend,
    }
    console.log(Days.Mon)
    const day:Days = Days.Mon
    day = Days.Mon
    console.log(day)

    let dayOfWeek : DaysOfWeek = 'MON'; 
    dayOfWeek = 'TUE'
}
