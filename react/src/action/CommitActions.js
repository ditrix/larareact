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



const getConfirmData = data => {

    const calculate = data.calculate.par
    calculate.resultPl = data.calculate.resultPl
    calculate.valueDiscount = data.calculate.valueDiscount
    const client = data.client.client
    const city = data.parameters.city
    const vehicle = data.insobject

    // console.log('calculate: ',calculate)
    // console.log('client: ',client)
    // console.log('city: ',city)
    // console.log('vehicle: ',vehicle)

    const apiData = {
        StartDate: "2020-02-04T08:22:19Z",
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
        DCityID: 0,
        RegNo: "string",
        VIN: "string",
        DateNextTO: "2020-02-04",
        DVehicleTypeID: 1,
        DMarkID: 0,
        DModelID: 0,
        AutoDescr: "string",
        DSphereUseID: 1,
        ProdYear: 2020,
        DExpLimitID: 1,
        VehicleUsage: "stringstring",
        contractId: "string",
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
