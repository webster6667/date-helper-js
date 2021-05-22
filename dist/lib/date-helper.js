(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.dateHelper = {}));
}(this, (function (exports) { 'use strict';

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
    var getMonthNameByMonthIndex = function getMonthNameByMonthIndex(monthIndex) {
      var arrayOfMonthNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var monthName = '';

      if (arrayOfMonthNames[monthIndex]) {
        monthName = arrayOfMonthNames[monthIndex];
      } else {
        console.error("month index: ".concat(monthIndex, ", not founded in monthNames: ").concat(arrayOfMonthNames));
      }

      return monthName;
    };
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


    var getDayOfWeekNumber = function getDayOfWeekNumber(date) {
      return date.getDay();
    };
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


    var getDayOfMonthNumber = function getDayOfMonthNumber(date) {
      return Number(new Date(date).getDate());
    };
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


    var getDateByDayOfMonthNumber = function getDateByDayOfMonthNumber(monthDate, dayOfMontNumber) {
      var needMonthDate = new Date(new Date(monthDate).setDate(dayOfMontNumber));
      return needMonthDate;
    };
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


    var getNextMonth = function getNextMonth(date) {
      var nextMonth = new Date(date).setMonth(date.getMonth() + 1);
      return new Date(nextMonth);
    };
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


    var getPrevMonth = function getPrevMonth(date) {
      var prevMonth = new Date(date).setMonth(date.getMonth() - 1);
      return new Date(prevMonth);
    };
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


    var getFirstDateOfMonth = function getFirstDateOfMonth(date) {
      var firstDayOfMonth = new Date(date).setDate(1);
      return new Date(firstDayOfMonth);
    };
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


    var getLastDateOfMonth = function getLastDateOfMonth(date) {
      var nextMonth = getNextMonth(date),
          lastDayOfMonth = nextMonth.setDate(0);
      return new Date(lastDayOfMonth);
    };
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


    var isDatesEqual = function isDatesEqual(firstDate, secondDate) {
      var shouldCompareTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var first = shouldCompareTime ? new Date(firstDate) : new Date(new Date(firstDate).setUTCHours(0, 0, 0, 0)),
          second = shouldCompareTime ? new Date(secondDate) : new Date(new Date(secondDate).setUTCHours(0, 0, 0, 0)),
          isEqual = first.getTime() === second.getTime();
      return isEqual;
    };

    exports.getDateByDayOfMonthNumber = getDateByDayOfMonthNumber;
    exports.getDayOfMonthNumber = getDayOfMonthNumber;
    exports.getDayOfWeekNumber = getDayOfWeekNumber;
    exports.getFirstDateOfMonth = getFirstDateOfMonth;
    exports.getLastDateOfMonth = getLastDateOfMonth;
    exports.getMonthNameByMonthIndex = getMonthNameByMonthIndex;
    exports.getPrevMonth = getPrevMonth;
    exports.isDatesEqual = isDatesEqual;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
