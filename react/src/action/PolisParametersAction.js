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
    const calcValues = {
        valueK1: 0,
        valueK2: 0,
        valueK3: 1,
        valueK4: 1,
        valueK5: 1,
        valueK6: 1,
        valueK7: 1,
        valueK8: 1,
        valueDiscount: 1,   
    }
     
    switch(options.valueK1){
        case "B1": calcValues.valueK1 = 1; break;
        case "B2": calcValues.valueK1 = 1.14; break;
        case "B3": calcValues.valueK1 = 1.18; break;
        case "B4": calcValues.valueK1 = 1.82; break;
        case "B5": calcValues.valueK1 = 0.9; break;
        case "A1": calcValues.valueK1 = 1; break;
        case "A3": calcValues.valueK1 = 1; break;
         
        case "D1": calcValues.valueK1 = 1; break;
        case "D2": calcValues.valueK1 = 1; break;

        case "E": calcValues.valueK1 = 1; break;
        case "F": calcValues.valueK1 = 1; break;
        default:    
            calcValues.valueK1 = 0
    }


     switch(options.valueK2){
         case '1': calcValues.valueK2 = 4.8; break; 
         case '2': calcValues.valueK2 = 3.5; break;
         case '3': calcValues.valueK2 = 2.8; break;
         case '4': calcValues.valueK2 = 2.5; break;
         case '5': calcValues.valueK2 = 1.5; break;
         case '6': calcValues.valueK2 = 5; break;
         default:
            calcValues.valueK2 = 0;    
     }

    if(options.valueDiscount === '1'){
        calcValues.valueDiscount = 0.5
        options.valueK3 = 0 // для льготников, такси не катит   
    } else {
        calcValues.valueDiscount = 1
    } 

     
    switch(options.valueK3){
        case '0': calcValues.valueK3 = 1; break;
        case '1': calcValues.valueK3 = 1.4; break;
        default:
            calcValues.valueK3 = 1
    }

    calcValues.valueK4 = 1.6
    calcValues.valueK5 = 1
    calcValues.valueK6 = 1
    calcValues.valueK7 = 1
    calcValues.valueK8 = 0.95


     console.log('calcValues: ',calcValues)

    const result = 180* 
        calcValues.valueK1 * 
        calcValues.valueK2 * 
        calcValues.valueK3 * 
        calcValues.valueK4 * 
        calcValues.valueK5 * 
        calcValues.valueK6 * 
        calcValues.valueK7 * 
        calcValues.valueK8 * 
        calcValues.valueDiscount

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