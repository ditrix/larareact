// функции загального призначення

export const checkIntegerStr = (value,length=10) => {
    return ((value.length <= length)&&((value.match(/^\d+$/) !== null) || value.length === 0))
}

export const checkIpn = (value) => {
    return checkIntegerStr(value,10)
}

export const checkVehicleNo = () => {
    return
}

export const dateFormatApi = date => {
    return (date)?date.toLocaleDateString('en-CA'):new Date().toLocaleDateString('en-CA')    
}

export const getCurrentDate = () => {
    return new Date().toLocaleDateString('en-CA')    
}

export const getCurrentYear = () => {
    const today =  new Date();
    return today.getFullYear();   // TODO 
}

export const getDateUaStr = (dtStr) => {
    return dtStr[8]+dtStr[9]+'.'+dtStr[5]+dtStr[6]+'.'+dtStr[0]+dtStr[1]+dtStr[2]+dtStr[3]
}
