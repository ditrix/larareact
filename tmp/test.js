// библиотека переводов сообщений
const messagesRUS = [
    { 'PARAMETERS': 'Расчет' },
    { 'CLIENT' :'Страхователь' },
    {'hello':'привет'},
]

const messagesUA = [
    { 'PARAMETERS' : 'Розрахунок' },
    { 'CLIENT' : 'Страхователь' },
    { 'hello':'привіт'},
]



const strI18N = (str,lang='ua') => {
    // switch(lang){
    //         case: 'rus'
    //     default:
    //         return str
    // }
    const mess = messagesUA.filter( 

    return str
}

console.log(strI18N('hello'))
