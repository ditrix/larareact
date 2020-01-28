import {dataK1} from '../../data/dataK1'
import {MSG} from '../../constants/messages'
import {_I18N} from '../../lib/i18n'


export const getTypeDocumentContent = (valueStr, lang='ua') => {
    switch(valueStr){
        case '1': return _I18N(MSG.DOC_DRIVER,lang)
        case '2': return _I18N(MSG.DOC_PASSPORT,lang)//'паспорт'
        case '3': return _I18N(MSG.DOC_ID_PASSPORT,lang)//'id-паспорт громaдянина України'
        case '4': return _I18N(MSG.DOC_FOREIGN_PASSPORT,lang)//'Паспорт іноземного громaдянина'
        case '6': return _I18N(MSG.DOC_INVALID,lang)//'Посвідчення інваліда'
        case '7': return _I18N(MSG.DOC_CHORNOBYL,lang)//'Чорнобильске посвідчення'
        case '8': return _I18N(MSG.DOC_PARTICIPANT_WAR,lang)//'Посвідчення учасника війни'
        case '9': return _I18N(MSG.DOC_PENSION,lang)//'Пенсійне посвідчення'
        default:
            return _I18N(MSG.DOC_PASSPORT,lang)
    }	
}



export const getDiscountContent = (valueStr, lang='ua') => {
    switch(valueStr){
        case '0': return _I18N(MSG.DISCOUNT_NONE,lang)
        case '1': return _I18N(MSG.DISCOUNT_WAR,lang)
        case '2': return _I18N(MSG.DISCOUNT_INVAL,lang)
        case '3': return _I18N(MSG.DISCOUNT_CHORNOBYL,lang)
        case '4': return _I18N(MSG.DISCOUNT_PENSION,lang)
        default:  return _I18N(MSG.DISCOUNT_NONE,lang)
    }
}



export const getVehicleTypeNameContent = (type,lang='ua') => {
    return (lang === 'ua')?dataK1.filter(item => item.KO === type)[0].nameUA:dataK1.filter(item => item.KO === type)[0].nameRU
}

export const getVehicleCityContent = (city,lang='ua') => {
    return (lang === 'ua')?city.nameUa:city.nameRu
}


export const getBoolTextContent = (val, lang='ua') => {
    // eslint-disable-next-line
    return (lang='ua')?(val==='0')?'ні':'так':(val==='0')?'нет':'да'
}