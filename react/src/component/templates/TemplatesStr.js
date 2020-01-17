import {dataK1} from '../../data/dataK1'

export const getTypeDocumentContent = (valueStr, lang='ua') => {
    switch(valueStr){
        case '1': return 'Водійське посвідчення'
        case '2': return 'паспорт'
        case '3': return 'id-паспорт громaдянина України'
        case '4': return 'Паспорт іноземного громaдянина'
        case '6': return 'Посвідчення інваліда'
        case '7': return 'Чорнобильске посвідчення'
        case '8': return 'Посвідчення учасника війни'
        case '9': return 'Пенсійне посвідчення'
        default:
            return 'паспорт'
    }	
}



export const getDiscountContent = (valueStr, lang='ua') => {
    switch(valueStr){
        case '1': return 'без пільг'
        case '1': return 'Учасник війни'
        case '2': return 'Інвалід'
        case '3': return 'Чорнобилець'
        case '4': return 'Пенсіонер'
        default:  return 'без пільг'
    }
}



export const getVehicleTypeNameContent = (type,lang='ua') => {
    return (lang === 'ua')?dataK1.filter(item => item.KO === type)[0].nameUA:dataK1.filter(item => item.KO === type)[0].nameRU
}

export const getVehicleCityContent = (city,lang='ua') => {
    return (lang === 'ua')?city.nameUa:city.nameRu

}


export const getBoolTextContent = (val, lang='ua') => {
    return (lang='ua')?(val==='0')?'ні':'так':(val==='0')?'нет':'да'
}