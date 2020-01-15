import {ACTION_SAVE_INSOBJECT} from '../constants'


export function actionSaveInsObject(insobject){
    return {
        type: ACTION_SAVE_INSOBJECT,
        payload: insobject
    }
}
