//
import {ACTION_SWITCH_LANG} from '../constants'

export const actionSwitchLang = (lang) =>  {
    return {
        type: ACTION_SWITCH_LANG,     
        payload: lang,
    }
}
