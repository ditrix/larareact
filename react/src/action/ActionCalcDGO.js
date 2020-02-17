// eslint-disable-next-line
import {ACTION_CALC_DGO, ACTION_GET_DGO, ACTION_GET_ZONE_DGO} from '../constants'
import {dataDGO1, dataDGO2} from '../data/calcMarix'
import {inArray} from '../lib/functions'

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



export const inDGO = (valueK1,valueK3) => {

    if(!inArray(valueK1,['B1','B2','B3','B4','B5'])){
        return false;
    }
    if(valueK3 === '3'){
        return false
    }
    return true 
}

const getResultDgo = data => {
    const dataResult = data
    if(data.active){
        dataResult.dgoPaySum = getDgoPaySum(data.dgoType,data.dgoInsurSum,data.zone)
    }else{
        dataResult.dgoPaySum = 0
        dataResult.dgoType = 0
        dataResult.dgoInsurSum = 0
    }
   
    return dataResult
}


export const actionGetDGO = data => {
    // console.log(data)
    // data.dgoPaySum = getDgoPaySum(data.dgoType,data.dgoInsurSum,data.zone)
    // console.log(data)
    return {
        type: ACTION_GET_DGO,
        payload: getResultDgo(data)
    }
}