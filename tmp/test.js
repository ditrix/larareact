
const dataDGO2 = [
    {   
        dgoInsurSum:'100000',
        paysMatrix:[
            {zone:'1', dgoPaySum:'422'},
            {zone:'2', dgoPaySum:'320'},
            {zone:'3', dgoPaySum:'290'},
            {zone:'4', dgoPaySum:'200'},
            {zone:'5', dgoPaySum:'150'},
            {zone:'6', dgoPaySum:'470'},
        ]
    },
    {   
        dgoInsurSum:'200000',
        paysMatrix:[
            {zone:'1', dgoPaySum:'600'},
            {zone:'2', dgoPaySum:'490'},
            {zone:'3', dgoPaySum:'440'},
            {zone:'4', dgoPaySum:'340'},
            {zone:'5', dgoPaySum:'230'},
            {zone:'6', dgoPaySum:'670'},
        ]
    },
    {   
        dgoInsurSum:'300000',
        paysMatrix:[
            {zone:'1', dgoPaySum:'760'},
            {zone:'2', dgoPaySum:'620'},
            {zone:'3', dgoPaySum:'560'},
            {zone:'4', dgoPaySum:'430'},
            {zone:'5', dgoPaySum:'285'},
            {zone:'6', dgoPaySum:'840'},
        ]
    },
    {   
        dgoInsurSum:'400000',
        paysMatrix:[
            {zone:'1', dgoPaySum:'900'},
            {zone:'2', dgoPaySum:'720'},
            {zone:'3', dgoPaySum:'660'},
            {zone:'4', dgoPaySum:'500'},
            {zone:'5', dgoPaySum:'320'},
            {zone:'6', dgoPaySum:'980'},
        ]
    },
    {   
        dgoInsurSum:'500000',
        paysMatrix:[
            {zone:'1', dgoPaySum:'1000'},
            {zone:'2', dgoPaySum:'800'},
            {zone:'3', dgoPaySum:'725'},
            {zone:'4', dgoPaySum:'550'},
            {zone:'5', dgoPaySum:'350'},
            {zone:'6', dgoPaySum:'1100'},
        ]
    },
]
const dataDGO1 = [
    {   
        dgoInsurSum:'100000',
        paysMatrix:[
            {zone:'1', dgoPaySum:'180'},
            {zone:'2', dgoPaySum:'140'},
            {zone:'3', dgoPaySum:'130'},
            {zone:'4', dgoPaySum:'100'},
            {zone:'5', dgoPaySum:'90'},
            {zone:'6', dgoPaySum:'200'},
        ]
    },
    {   
        dgoInsurSum:'200000',
        paysMatrix:[
            {zone:'1', dgoPaySum:'290'},
            {zone:'2', dgoPaySum:'230'},
            {zone:'3', dgoPaySum:'210'},
            {zone:'4', dgoPaySum:'170'},
            {zone:'5', dgoPaySum:'150'},
            {zone:'6', dgoPaySum:'320'},
        ]
    },
    {   
        dgoInsurSum:'300000',
        paysMatrix:[
            {zone:'1', dgoPaySum:'390'},
            {zone:'2', dgoPaySum:'310'},
            {zone:'3', dgoPaySum:'280'},
            {zone:'4', dgoPaySum:'230'},
            {zone:'5', dgoPaySum:'200'},
            {zone:'6', dgoPaySum:'420'},
        ]
    },
    {   
        dgoInsurSum:'400000',
        paysMatrix:[
            {zone:'1', dgoPaySum:'472'},
            {zone:'2', dgoPaySum:'372'},
            {zone:'3', dgoPaySum:'340'},
            {zone:'4', dgoPaySum:'270'},
            {zone:'5', dgoPaySum:'240'},
            {zone:'6', dgoPaySum:'500'},
        ]
    },
    {   
        dgoInsurSum:'500000',
        paysMatrix:[
            {zone:'1', dgoPaySum:'540'},
            {zone:'2', dgoPaySum:'420'},
            {zone:'3', dgoPaySum:'390'},
            {zone:'4', dgoPaySum:'300'},
            {zone:'5', dgoPaySum:'270'},
            {zone:'6', dgoPaySum:'550'},
        ]
    },
]

const insurSumm = '400000'

const getDgoPaySum = (dgoType = 0, dgoInsurSum = 0, zone = 0) =>
{
    let result = 0
    const wrkMatrix = (dgoType === 1)?dataDGO1:dataDGO2
       
    const slave = wrkMatrix.find(element => element.dgoInsurSum === '200000')
    if(slave){
       
         result = slave.paysMatrix.find(element => element.zone === zone.toString())
     }
     if(result){
         return result.dgoPaySum
     }
     return 0
}


const getDgoPaySum = (dgoType = 0, dgoInsurSum = 0, zone = 0) =>{
    let result = 0
    const wrkMatrix = (dgoType === 1)?dataDGO1:dataDGO2
       
    const slave = wrkMatrix.find(element => element.dgoInsurSum === dgoInsurSum.toString())
  
    if(slave){
        
         result = slave.paysMatrix.find(element => element.zone === zone.toString())
     }
     if(result){
         
         return result.dgoPaySum
     }
     return 0
}

console.log(getDgoPaySum(1,200000,4))

console.log('Ok')
