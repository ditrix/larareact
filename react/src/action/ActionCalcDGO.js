// eslint-disable-next-line
import {ACTION_CALC_DGO, ACTION_GET_DGO, ACTION_GET_ZONE_DGO} from '../constants'
import {dataDGO1, dataDGO2} from '../data/calcMarix'

const getDgoPaySum = (dgoType = 0, dgoInsurSum = 0, zone = 0) =>{
    let result = 0
    const wrkMatrix = (dgoType === 1)?dataDGO1:dataDGO2
       
    const slave = wrkMatrix.find(element => element.dgoInsurSum === dgoInsurSum.toString())
  
    if(slave){
        
         result = slave.paysMatrix.find(element => element.zone === zone.toString())
         
     }
     if(result){
      //  console.log('getDgoPaySum:', result.dgoPaySum)
         return result.dgoPaySum
     }
     return 0
}

// const getDgoResult = (type = 0, insurSum = 0, zone = 0) => {
//     return 500100
// }

export const actionGetZoneDGO = zone => {

        return {
            type: ACTION_GET_ZONE_DGO,
            payload: zone
        }
}

export const actionGetDGO = data => {
    console.log(data)
    data.dgoPaySum = getDgoPaySum(data.dgoType,data.dgoInsurSum,data.zone)
    console.log(data)
    return {
        type: ACTION_GET_DGO,
        payload: data
    }
}