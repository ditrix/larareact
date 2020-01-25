
import {locales} from './locales'

export const _I18N = (str,lang='ua') => {
    const res = locales[lang][str]
    return (res !== undefined)?res:''
}