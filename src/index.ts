/**
 * @description
 * Return monthName by month index
 *
 * @param {number} monthIndex
 * @param {string[]} arrayOfMonthNames
 * @returns {string}
 *
 * @throws If monthNames has not key === monthIndex
 *
 * @example
 * const monthIndex = 1
 * const monthNamesArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
 * getMonthNameByMonthIndex(monthIndex, monthNamesArray)
 * // => 'February'
 */
const getMonthNameByMonthIndex = (monthIndex: number, arrayOfMonthNames: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']):string => {
    let monthName = ''

    if (arrayOfMonthNames[monthIndex]) {
        monthName = arrayOfMonthNames[monthIndex]
    } else {
        console.error(`month index: ${monthIndex}, not founded in monthNames: ${arrayOfMonthNames}`);
    }

    return monthName
}

/**
 * @description
 * Return day of week number for selected date
 * (0 - Sunday, 6 - Saturday)
 *
 * @param {Date} date
 * @returns {number}
 *
 * @example
 * getDayOfWeekNumber(new Date("2017-01-26")) //Thursday
 * // => 4
 */
const getDayOfWeekNumber = (date: Date): number => {
    return date.getDay()
}

/**
 * @description
 * Return day of month number for selected date
 *
 * @param {Date} date
 * @returns {number}
 *
 * @example
 * getDayOfMonthNumber(new Date("2017-01-26")) //Thursday
 * // => 26
 */
const getDayOfMonthNumber = (date: Date): number => {
    return Number(new Date(date).getDate())
}

/**
 * @description
 * Return Date by day of month number for selected date
 *
 * @param {Date} date
 * @param {Date} dayOfMontNumber
 * @returns {Date}
 *
 * @example
 * getDateByDayOfMonthNumber(new Date("2017-01-26"), 2)
 * // => new Date("2017-01-2")
 */
const getDateByDayOfMonthNumber = (monthDate: Date, dayOfMontNumber: number):Date => {
    const needMonthDate = new Date(new Date(monthDate).setDate(dayOfMontNumber))

    return needMonthDate
}

/**
 * @description
 * Return next month Date of selected date
 *
 * @param {Date} date
 * @returns {Date}
 *
 * @example
 * getNextMonth(new Date("2017-01-26"))
 * // => new Date("2017-02-26")
 */
const getNextMonth = (date: Date):Date => {
    const nextMonth = new Date(date).setMonth(date.getMonth() + 1)
    return new Date(nextMonth)
}

/**
 * @description
 * Return prev month Date of selected date
 *
 * @param {Date} date
 * @returns {Date}
 *
 * @example
 * getPrevMonth(new Date("2017-02-26"))
 * // => new Date("2017-01-26")
 */
const getPrevMonth = (date: Date):Date => {
    const prevMonth = new Date(date).setMonth(date.getMonth() - 1)
    return new Date(prevMonth)
}

/**
 * @description
 * Return first day of month from selected date
 *
 * @param {Date} date
 * @returns {Date}
 *
 * @example
 * getFirstDateOfMonth(new Date("2017-01-26"))
 * // => new Date("2017-01-01")
 */
const getFirstDateOfMonth = (date: Date):Date => {
    const firstDayOfMonth = new Date(date).setDate(1)
    return new Date(firstDayOfMonth)
}

/**
 * @description
 * Return last day of month from selected date
 *
 * @param {Date} date
 * @returns {Date}
 *
 * @example
 * getLastDateOfMonth(new Date("2017-01-26"))
 * // => new Date("2017-01-31")
 */
const getLastDateOfMonth = (date: Date):Date => {
    const nextMonth = getNextMonth(date),
          lastDayOfMonth = nextMonth.setDate(0)

    return new Date(lastDayOfMonth)
}

/**
 * @description
 * Return result of comparing two dates
 *
 * @param {Date} firstDate
 * @param {Date} secondDate
 * @param {boolean} shouldCompareTime
 * @returns {Date}
 *
 * @example
 * isDatesEqual(new Date("2017-01-26"), new Date("2017-01-26"))
 * // => true
 *
 * isDatesEqual(new Date("2017-01-26"), new Date("2017-01-27"))
 * // => false
 *
 * isDatesEqual(new Date("2017-01-26 15:15:16"), new Date("2017-01-26 15:15:15"), true)
 * // => false
 */
const isDatesEqual = (firstDate: Date, secondDate: Date, shouldCompareTime = false):boolean => {
    const first = shouldCompareTime ? new Date(firstDate) : new Date(new Date(firstDate).setUTCHours(0, 0 , 0, 0)),
          second = shouldCompareTime ? new Date(secondDate) : new Date(new Date(secondDate).setUTCHours(0, 0 , 0, 0)),
          isEqual = first.getTime() === second.getTime()

    return isEqual
}

export {
    getMonthNameByMonthIndex,
    getDayOfWeekNumber,
    getDayOfMonthNumber,
    getDateByDayOfMonthNumber,
    getPrevMonth,
    getFirstDateOfMonth,
    getLastDateOfMonth,
    isDatesEqual
}