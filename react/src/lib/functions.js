// функции загального призначення

export const checkIntegerStr = (value,length=10) => {
    return ((value.length <= length)&&((value.match(/^\d+$/) !== null) || value.length === 0))
}

export const filterInputVehickleNo = str => {
    return str.toUpperCase().match(/[a-zA-Zа-яА-ЯїЇіІ0-9./]{0,15}/)
}

export const checkIpn = (value) => {
    return checkIntegerStr(value,10)
}

export const dateFormatApi = date => {
    return (date)?date.toLocaleDateString('en-CA'):new Date().toLocaleDateString('en-CA')    
}

export const getCurrentDate = () => {
    return new Date().toLocaleDateString('en-CA')    
}

export const checkEmail = emailstr => {
    // eslint-disable-next-line 
    const pattern  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(emailstr)
}

export const checkPhone = (value) => {
    return checkIntegerStr(value,10)
}

export const getTomorrow = () => {
    let date = new Date();
    date.setDate(date.getDate() + 1);
    return date.toLocaleDateString('en-CA')+'T00:00:00Z'
}

export const getCurrentYear = () => {
    const today =  new Date();
    return today.getFullYear();   // TODO 
}

export const getDateUaStr = (dtStr) => {
   
   return ((!dtStr)||(dtStr.length !== 10))?'':`${dtStr[8]+ dtStr[9]}.${dtStr[5] + dtStr[6]}.${dtStr[0]+dtStr[1]+dtStr[2]+dtStr[3]}`
}

export const getStrContent = (str = '') => {
    return (!str)?'':str
    
}

export const inArray = (value,arrValues) => {
    return arrValues.indexOf(value) !== -1
}


export const getBoolTextContent = (val, lang='ua') => {
    if(typeof(val)==='boolean'){
        val = (val)?'1':'0'
    }
    if(typeof(val)==='number'){
        val = (val === 0)?'0':'1'
    }
 
    let res = ''
    if(lang ==='ua'){
        (val === '0')?res = 'ні':res='так'
    }else {
        (val === '0')?res = 'нет':res='да'
    }
   
    return res
}
