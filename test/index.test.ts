import {getNextDay, getPrevDay} from '../src'

test('test function', () => {

    const prevDay = getPrevDay(new Date("2017-02-01"), 1)
    
    console.log(prevDay);


});