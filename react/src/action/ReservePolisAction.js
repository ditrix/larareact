import {ACTION_COMMIT_DATA} from '../constants'

// eslint-disable-next-line
import {getCurrentDate, getTomorrow} from '../lib/functions'

const isResident = typeDocumentValue => {
    return (typeDocumentValue !== '4')
}

const getApiDocumentType = valueId => {
    switch(valueId){
        case "1":   return "1"  // Посвiдчення водiя
        case "2":               // Паспорт громадянина України
        case "3":   return "3"  // id-паспорт громадянина України
        case "4":   return "13" // Нацiональний паспорт iноземця
        case "6":   return "4"  // Посвiдчення iнвалiда
        case "7":   return "7"  // Посвiдчення особи постр ЧАЭС
        case "8":   return "6"  // Посвiдчення учасника ВВВ
        case "9":   return "2"  
            default: return "3"
                
    }
}

const getDVehicleTypeID = valueK1 => {
    switch(valueK1){
        case 'A1': return 5
        case 'A2': return 6
        case 'B1': return 1
        case 'B2': return 2
        case 'B3': return 3
        case 'B4': return 4
        case 'B5': return 17
        case 'C1': return 7
        case 'C2': return 8
        case 'D1': return 9
        case 'D2': return 10
        case 'F': return 11
        case 'E': return 12
        default: 
            return 0;

    }
}


const getReserveData = data => {

    const calculate = data.calculate.par
    const calcValues = data.calculate.calcValues 

    calculate.resultPl = data.calculate.resultPl
    calculate.valueDiscount = data.calculate.valueDiscount
    const client = data.client.client
    const city = data.parameters.city

    const parameters = data.parameters


    const vehicle = data.insobject



    const reserveData = {
        StartDate: parameters.valueStartDate,
        DPeriodID: 1,
        DBonusMalusID: 0,
        k1: calcValues.k1,
        k2: calcValues.k2,
        k3: calcValues.k3,
        k4: calcValues.k4,
        k5: calcValues.k5,
        k6: calcValues.k6,
        k7: calcValues.k7,
        DPrivelegeID: calculate.valueDiscount,
        Franchise: calcValues.k12,
        InsPremium: calculate.resultPl,
        DCitizenStatusID: isResident(client.doc.type),
        IdentCode: client.ipn,
        Surname: client.lname,
        Name: client.fname,
        PName: client.sname,
        BirthDate: client.dob,
        Address: client.addr,
        DCityID: city.id,
        RegNo: vehicle.RegNo,
        VIN: vehicle.VIN,
        DVehicleTypeID: getDVehicleTypeID(calculate.k1),
        DMarkID: vehicle.DMarkID,
        DModelID: vehicle.DModelID,
        AutoDescr: vehicle.AutoDescr,
        DSphereUseID: 1,
        ProdYear: vehicle.ProdYear,
        DExpLimitID: 1,
        contractId: "0",
        Phone: client.phone,
        Email: client.email,
        DocumentType: getApiDocumentType(client.doc.type),
        DocNumber: client.doc.no,
        dgoInsurSum: 100000,
        dgoPaySum: "100500",  
        dgoType: 1,
        k8: calcValues.k8,
    }

     if(parameters.valueK3 === '3'){
        reserveData.DateNextTO = parameters.dateOtk 
     }

    if(client.doc.seria !== ''){
        reserveData.DocSeries = client.doc.seria
    }

    if(client.doc.source !== ''){
        reserveData.issued = client.doc.source
    }
    if(client.doc.dtget !== getCurrentDate()){
        reserveData.issueDate = client.doc.dtget
    }

    return reserveData
}


export function actionReservePolis(data){
    // TODO send itog data to server
    const confdata = getReserveData(data)
    console.log(confdata)
    return {
        type: ACTION_COMMIT_DATA,
        payload: {data,resutl:false}
    }
}
