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
declare const getMonthNameByMonthIndex: (monthIndex: number, arrayOfMonthNames?: string[]) => string;
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
declare const getDayOfWeekNumber: (date: Date) => number;
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
declare const getDayOfMonthNumber: (date: Date) => number;
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
declare const getDateByDayOfMonthNumber: (monthDate: Date, dayOfMontNumber: number) => Date;
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
declare const getNextMonth: (date: Date) => Date;
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
declare const getPrevMonth: (date: Date) => Date;
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
declare const getFirstDateOfMonth: (date: Date) => Date;
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
declare const getLastDateOfMonth: (date: Date) => Date;
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
declare const isDatesEqual: (firstDate: Date, secondDate: Date, shouldCompareTime?: boolean) => boolean;
export { getMonthNameByMonthIndex, getDayOfWeekNumber, getDayOfMonthNumber, getDateByDayOfMonthNumber, getNextMonth, getPrevMonth, getFirstDateOfMonth, getLastDateOfMonth, isDatesEqual };
