//Имя месяца по номеру
export const getMonthNameByMonthIndex = (monthIndex: number, monthNames: string[] = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']):string => {
    let monthName = ''

    if (monthNames[monthIndex]) {
        monthName = monthNames[monthIndex]
    } else {
        console.error(`month index: ${monthIndex}, not founded in monthNames: ${monthNames}`);
    }

    return monthName
}

//Номер дня недели по указанной дате
export const getDayOfWeekNumber = (date: Date): number => {
    return date.getDay()
}

//Получить число месяца, тип число
export const getDateNumber = (date: Date): number => {
    return Number(new Date(date).getDate())
}

//Получить дату указанного месяца, по номеру даты
export const getMonthDateByDateNumber = (monthDate: Date, monthDateNumber: number):Date => {
    const needMonthDate = new Date(new Date(monthDate).setDate(monthDateNumber))

    return needMonthDate
}

//Следующий месяц
export const getNextMonth = (date: Date):Date => {
    const nextMonth = new Date(date).setMonth(date.getMonth() + 1)
    return new Date(nextMonth)
}

//Предыдущий месяц
export const getPrevMonth = (date: Date):Date => {
    const prevMonth = new Date(date).setMonth(date.getMonth() - 1)
    return new Date(prevMonth)
}

//Первый день месяца
export const getFirstDateOfMonth = (date: Date):Date => {
    const firstDayOfMonth = new Date(date).setDate(1)
    return new Date(firstDayOfMonth)
}

//Последний день месяца
export const getLastDateOfMonth = (date: Date):Date => {
    const nextMonth = getNextMonth(date),
          lastDayOfMonth = nextMonth.setDate(0)

    return new Date(lastDayOfMonth)
}

//Равны ли две даты
export const isDatesEqual = (firstDate: Date, secondDate: Date, shouldCompareTime = false):boolean => {
    const first = shouldCompareTime ? new Date(firstDate) : new Date(new Date(firstDate).setUTCHours(0, 0 , 0, 0)),
          second = shouldCompareTime ? new Date(secondDate) : new Date(new Date(secondDate).setUTCHours(0, 0 , 0, 0)),
          isEqual = first.getTime() === second.getTime()

    return isEqual
}