import {VALIDATE_POLIS_PARAMETERS, SAVE_POLIS_PARAMETERS, CALCULTATE_POLIS} from '../constants'

export function actionValidatePolisParameters(parameters){
    return {
        type: VALIDATE_POLIS_PARAMETERS,
        payload: parameters
    }
}

export function actionSavePolisParameters(parameters){
    return {
        type: SAVE_POLIS_PARAMETERS,
        payload: parameters
    }
}
// 
// TODO
export function actionSearchVehicle(parameters){
    return {
        type: SAVE_POLIS_PARAMETERS,
        payload: parameters
    }
}


 const calculateOSGPO = (options) => {
     let calcValueK1 = 0
     console.log(options)
     switch(options.valueK1){
         case "B1": calcValueK1 = 1; break;
         case "B2": calcValueK1 = 1.14; break;
         case "B3": calcValueK1 = 1.18; break;
         case "B4": calcValueK1 = 1.82; break;
         case "B5": calcValueK1 = 0.9; break;


         case "A1": calcValueK1 = 1; break;
         case "A3": calcValueK1 = 1; break;
         
         case "D1": calcValueK1 = 1; break;
         case "D2": calcValueK1 = 1; break;

         case "E": calcValueK1 = 1; break;
         case "F": calcValueK1 = 1; break;
     default:    
        calcValueK1 = 0
     }

//     console.log('calcValueK1 =',calcValueK1)

     let calcValueK2 = 0;
     switch(options.valueK2){
         case '1': calcValueK2 = 4.8; break; 
         case '2': calcValueK2 = 3.5; break;
         case '3': calcValueK2 = 2.8; break;
         case '4': calcValueK2 = 2.5; break;
         case '5': calcValueK2 = 1.5; break;
         case '6': calcValueK2 = 5; break;
         default:
            calcValueK2 = 0;    
     }

    let calcDiscountValue = (options.valueDiscount === '1')?0.5:1

//    console.log('calcValueK2 =',calcValueK2)

    let calcValueK3 = 1
     switch(options.valueK3){
         case 0: calcValueK3 = 1; break;
         case 1: calcValueK3 = 1.4; break;
         default:
             calcValueK3 = 1
     }

    let calcValueK4 = 1.6
    let calcValueK5 = 1
    let calcValueK6 = 1
    let calcValueK7 = 1
    let calcValueK8 = 0.95


    const result = 180* calcValueK1 * calcValueK2 * calcDiscountValue * calcValueK3 * calcValueK4 * calcValueK5 * calcValueK6 * calcValueK7 * calcValueK8  
    // TODO: проверка параметров на существование
//    console.log('place for calculate', valuesKO)
    return Math.ceil(result);
}

export function actionOptionValuesChange(values){
    // расчет значений
    const result = calculateOSGPO(values)
    values.resultPl = result

    return {
        type: CALCULTATE_POLIS,
        payload: values
    }
}