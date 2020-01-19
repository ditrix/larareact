import {ACTION_COMMIT_DATA} from '../constants'


export function actionCommitPolisData(data){
    // TODO send itog data to server
    return {
        type: ACTION_COMMIT_DATA,
        payload: {data,resutl:false}
    }
}
