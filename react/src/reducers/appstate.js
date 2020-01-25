import {ACTION_SWITCH_LANG} from '../constants'

const initialState = {
    lang:'ru',
}
export const reducerAppState = (state = initialState, actioin ) => {
    switch(actioin.type){
        case ACTION_SWITCH_LANG:
            const lang = (state.lang === 'ua')?'ru':'ua'
            return {...state,lang}
        default:
            return state    
    }
    
}