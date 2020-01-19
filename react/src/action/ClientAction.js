import {ACTION_SAVE_CLIENT} from '../constants'


export function actionSaveClient(client){
    return {
        type: ACTION_SAVE_CLIENT,
        payload: client
    }
}
