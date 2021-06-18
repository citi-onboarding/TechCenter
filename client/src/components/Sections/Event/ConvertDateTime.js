const dateFormat = require('dateformat');

const referenceOfMounths = {
    "Jan" : "Janeiro",
    "Feb" : "Fevereiro",
    "Mar" : "Março", 
    "Apr" : "Abril",
    "May" : "Maio",
    "Jun": "Junho",
    "Jul": "Julho",
    "Aug": "Agosto",
    "Sep": "Setembro",
    "Oct": "Outubro",
    "Nov": "Novembro",
    "Dec": "Dezembro" 
}
export const ConvertDateTime = (dateTime, reference = referenceOfMounths) => {
    const date = dateFormat(dateTime).toString();
    const [dayOfWeek, mounth, day, year, time] = date.split(' ');
    let timeSplitted = time.split(':');
    timeSplitted = timeSplitted.slice(0,2)
    return `${day} de ${reference[mounth]} às ${timeSplitted.join(':')}`
}

