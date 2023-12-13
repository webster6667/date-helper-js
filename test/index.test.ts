import {getNextDay, getPrevDay} from '../src'

test('test function', () => {

    const prevDays = getPrevDay(new Date("2017-02-01"), 1)
    
    console.log(prevDays);


});