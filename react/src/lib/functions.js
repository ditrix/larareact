// функции загального призначення
export const checkInn  = () => {
    return false
}

export const checkVehicleNo = () => {
    return
}

export const dateFormatApi = date => {
    return (date)?date.toLocaleDateString('en-CA'):new Date().toLocaleDateString('en-CA')    
}