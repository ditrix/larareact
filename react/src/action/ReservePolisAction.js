import {ACTION_COMMIT_DATA,APP_DEV_REGIM} from '../constants'
import axios from 'axios'
// eslint-disable-next-line
import {APP_SITE_URL,REG_EXP_VEHICLE_NO} from '../constants'
// eslint-disable-next-line
import {getCurrentDate, getTomorrow} from '../lib/functions'

const DEV_REGIM = 'get'
//`${APP_SITE_URL}public/vehicle?num=${this.state.searchVehicleStr}`

const reserveData = data => {

    const apiData = JSON.stringify(data)

    let url = ''
    //const url = `http://epol/public/reserve?data="${apiData}"`
   
     console.log('APP_DEV_REGIM',DEV_REGIM)   
    {
        if(DEV_REGIM === 'get'){
            console.log('is GET')
            url = `http://epol/public/reserve?data=${apiData}`
            axios(url)
                .then(response => console.log(response))
                .catch(error => console.log(error))      
        } else {
            console.log('is POST')
            console.log('POSTDATA',data)
            url = `http://epol/public/reservesend`
            axios.post(url,{'data':'value'})
                .then(response => console.log(response))
                .catch(error => console.log(error))
        }
    }

}

const isResident = typeDocumentValue => {
    if(typeDocumentValue === '4'){ 
        return 2
    }
    return 1
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

const getDSphereUseID = valueK3 => {
    if(valueK3 === "3"){
        return 2
    }
    return 1
}

const getPhone = valuePhone => {
    return '+380'+ valuePhone
}

const getReserveData = data => {

    const calculate = data.calculate.par
    const calcValues = data.calculate.calcValues 

    calculate.resultPl = data.calculate.resultPl
    calculate.valueDiscount = data.calculate.valueDiscount
    const client = data.client.client
    const city = data.parameters.city

    const parameters = data.parameters

    const dgo = data.dgo
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
        DPrivelegeID: parseInt(parameters.valueDiscount),
        Franchise: parseInt(calculate.k12),
        InsPremium: calculate.resultPl,
        DCitizenStatusID: isResident(client.doc.type),
        IdentCode: client.ipn,
        Surname: client.lname,
        Name: client.fname,
        PName: client.sname,
        BirthDate: client.dob,
        Address: client.addr,
        DCityID: parseInt(city.id),
        RegNo: vehicle.RegNo,
        VIN: vehicle.VIN,
        DVehicleTypeID: getDVehicleTypeID(calculate.k1),
        DMarkID: parseInt(vehicle.DMarkID),
        DModelID: parseInt(vehicle.DModelID),
        DSphereUseID: getDSphereUseID(calculate.k3),
        ProdYear: parseInt(vehicle.ProdYear),
        DExpLimitID: 1,
        contractId: "0",
        Phone: getPhone(client.phone),
        Email: client.email,
        DocumentType: getApiDocumentType(client.doc.type),
        DocNumber: client.doc.no,
        dgoInsurSum: dgo.dgoInsurSum,
        dgoPaySum: dgo.dgoPaySum,  
        dgoType: dgo.dgoType,
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

    if(vehicle.AutoDescr !== ''){
        reserveData.AutoDescr = vehicle.AutoDescr
    }
    


    return reserveData
}




export function actionReservePolis(data){
    // TODO send itog data to server
    const confdata = getReserveData(data)

    reserveData(confdata)

    console.log(confdata)
    return {
        type: ACTION_COMMIT_DATA,
        payload: {data,resutl:false}
    }
}


/*
example

{\"StartDate\":\"2020-02-21T00:00:00Z\",\"DPeriodID\":1,\"DBonusMalusID\":0,\"k1\":0.68,\"k2\":3.5,\"k3\":1,\"k4\":1.6,\"k5\":1,\"k6\":1.05,\"k7\":1,\"DPrivelegeID\":0,\"Franchise\":2600,\"InsPremium\":720,\"DCitizenStatusID\":1,\"IdentCode\":\"1234567890\",\"Surname\":\"иванов\",\"Name\":\"иван\",\"PName\":\"иванович\",\"BirthDate\":\"2020-02-20\",\"Address\":\"харьковская 12\",\"DCityID\":31,\"RegNo\":\"2\",\"VIN\":\"1\",\"DVehicleTypeID\":6,\"DMarkID\":3,\"DModelID\":659,\"DSphereUseID\":1,\"ProdYear\":1980,\"DExpLimitID\":1,\"contractId\":\"0\",\"Phone\":\"+380551234567\",\"Email\":\"ivan@mail.com\",\"DocumentType\":\"1\",\"DocNumber\":\"221\",\"dgoInsurSum\":100000,\"dgoPaySum\":\"100500\",\"dgoType\":1,\"k8\":1,\"DocSeries\":\"seria\",\"issued\":\"кивским ровд\"}


*/