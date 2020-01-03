// функции загального призначення
export const checkIpn  = (value,length=10) => {
    return ((value.length <= length)&&((value.match(/^\d+$/) !== null) || value.length == 0))
}

export const checkVehicleNo = () => {
    return
}

export const dateFormatApi = date => {
    return (date)?date.toLocaleDateString('en-CA'):new Date().toLocaleDateString('en-CA')    
}


