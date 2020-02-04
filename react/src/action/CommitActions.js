import {ACTION_COMMIT_DATA} from '../constants'

const getConfirmData = data => {

    const calculate = data.calculate.par
    calculate.resultPl = data.calculate.resultPl
    const client = data.client.client
    const city = data.parameters.city
    const vehicle = data.insobject

    console.log('calculate: ',calculate)
    console.log('client: ',client)
    console.log('city: ',city)
    console.log('vehicle: ',vehicle)

    return {
        StartDate: "2020-02-04T08:22:19Z",
        DPeriodID: 1,
        DBonusMalusID: 0,
        k1: 0.01,
        k2: 1.3,
        k3: 0.01,
        k4: 0.01,
        k5: 0.01,
        k6: 1,
        k7: 0.01,
        DPrivelegeID: 0,
        Franchise: 0,
        InsPremium: 0,
        DCitizenStatusID: 1,
        IdentCode: "string",
        Surname: "string",
        Name: "string",
        PName: "string",
        BirthDate: "2020-02-04",
        Address: "string",
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
        Phone: "string",
        Email: "user@example.com",
        DocumentType: "1",
        DocSeries: "string",
        DocNumber: "string",
        issued: "string",
        issueDate: "2020-02-04",
        dgoInsurSum: 100000,
        dgoPaySum: "string",
        dgoType: 1,
        k8: 0.9
    }
}


export function actionCommitPolisData(data){
    // TODO send itog data to server
    const confdata = getConfirmData(data)
    console.log(data)
    return {
        type: ACTION_COMMIT_DATA,
        payload: {data,resutl:false}
    }
}
