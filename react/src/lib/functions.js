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


