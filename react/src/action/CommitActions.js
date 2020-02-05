import {ACTION_COMMIT_DATA} from '../constants'


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

const getDPrivelegeID = valueId => {
    return 0;
}

const getConfirmData = data => {

    const calculate = data.calculate.par
    calculate.resultPl = data.calculate.resultPl
    calculate.valueDiscount = data.calculate.valueDiscount
    const client = data.client.client
    const city = data.parameters.city
    const valueStartDate = data.parameters.valueStartDate  
    const vehicle = data.insobject


    console.log('parameters: ',data)
    // console.log('calculate: ',calculate)
    // console.log('client: ',client)
    // console.log('city: ',city)
    // console.log('vehicle: ',vehicle)

    // FIXME: StartDate -> undefine


    const apiData = {
        StartDate: valueStartDate,
        DPeriodID: 1,
        DBonusMalusID: 0,
        k1: calculate.k1,
        k2: calculate.k2,
        k3: calculate.k3,
        k4: calculate.k4,
        k5: calculate.k5,
        k6: calculate.k6,
        k7: calculate.k7,
        DPrivelegeID: calculate.valueDiscount,
        Franchise: calculate.k12,
        InsPremium: calculate.resultPl,
        DCitizenStatusID: isResident(client.doc.type),
        IdentCode: client.ipn,
        Surname: client.lname,
        Name: client.fname,
        PName: client.sname,
        BirthDate: client.dob,
        Address: client.addr,
        DCityID: city.id,
        RegNo: "string",
        VIN: vehicle.VIN,
        DateNextTO: "2020-02-04",
        DVehicleTypeID: getDVehicleTypeID(calculate.k1),
        DMarkID: vehicle.DMarkID,
        DModelID: vehicle.DModelID,
        AutoDescr: vehicle.AutoDescr,
        DSphereUseID: 1,
        ProdYear: vehicle.ProdYear,
        DExpLimitID: 1,
        VehicleUsage: "stringstring",
        contractId: "0",
        Phone: client.phone,
        Email: client.email,
        DocumentType: getApiDocumentType(client.doc.type),
        DocSeries: "string",
        DocNumber: client.doc.no,
        issued: "string",
        issueDate: "2020-02-04",
        dgoInsurSum: 100000,
        dgoPaySum: "string",
        dgoType: 1,
        k8: calculate.k8,
    }

    return apiData
}


export function actionCommitPolisData(data){
    // TODO send itog data to server
    const confdata = getConfirmData(data)
    console.log(confdata)
    return {
        type: ACTION_COMMIT_DATA,
        payload: {data,resutl:false}
    }
}
