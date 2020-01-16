import React, {Component} from 'react'
import {connect} from 'react-redux' 
import {PaySumm} from '../component/PaySumm'
import {dataK1} from '../data/dataK1'
import GetFranshize from '../component/GetFranshize'

class CommitPage extends Component {

    handleButtonCommitClick(){
        console.log('DOIT!')
    }


    getVehicleTypeName(type){
        return dataK1.filter(item => item.KO === type)[0]
    }

    getBoolText(val){
        return (val==='0')?'ні':'так'
    }

    render(){


    const data= {
        parameters:{
            valueDiscount:"0",
            valueTaxi:"1",
            isOtk:"1",
            dateOtk:"2020-01-17",
            valueK1:"B2",
            city:{
                id:"24",
                nameRu:"Борисполь",
                nameUa:"Бориспіль",
                zone:"2",
                zone_dgo:"2",
                action:"ACTION_GET_VEHICLE",
            },
        },
        client: {
            client: { 
                lname:"иванов",
                sname:"иванович",
                fname:"иван",
                ipn:"3525555555",
                dob:"1996-07-10",
                doc:{
                    type:"1",
                    seria:"СС",
                    no:"12321",
                    dtget:"2000-01-01",
                    source:"Винницким отделом",
                },
                addr:"Ленина 122 - 221",
                phone:"+3808080800808",
                email:"ivan@mail.com",
            },
        },
        insobject: {
            auto: {
                VIN:"SJWFBAJ10U1347057 ",
                RegNo:"111 ",
                DMarkID:"386",
                DMarkName:"NISSAN",
                DModelID:"10471",
                DModelName:"QASHQAI",
                AutoDescr:"NISSAN QASHQAI 111 ",
                DVehicleTypeType:"B2",
                FContractID:"676424",
                ProdYear:"1960",
            }
        },
    }
           const autoType = this.getVehicleTypeName(data.parameters.valueK1)

       return(


            <div className="make-polis-dialog">
                <header>
                    <div className="title"><h3>Оформлення</h3></div>
                    <div className="result"><GetFranshize /></div>
                    <div className="result">{PaySumm(100500,'ru')}</div>                    
                </header>
                <form  className="tab-form"> 
                     <main>
                        <div className="tab-form-row">
                            <h5>Параметри</h5>
                            <div className="parameters-data">
                                <label>тип транспортного засобу</label>
                                <span><h6>{autoType.nameUA}</h6></span>
                            </div>

                            <div className="parameters-data">
                                <label>пільги</label>
                                <span>{(data.parameters.valueDiscount===0)?<h6>немає пільг</h6>:<h6>TODO значение</h6>
                                }</span>
                            </div>

                            <div className="parameters-data">
                                <label>таксі</label>
                                <span><h6>{this.getBoolText(data.parameters.valueTaxi)}</h6></span>
                            </div>

                            <div className="parameters-data">
                                <label>отк</label>
                                <span><h6>{this.getBoolText(data.parameters.isOtk)}</h6></span>
                            </div>

                            <div className="parameters-data">
                                <label>дата отк</label>
                                <span><h6>TODO!{data.parameters.dateOtk}</h6></span>
                            </div>



                        </div>
                        <div className="tab-form-row">
                            <h5>Страхувальник</h5>
                        </div>
                        <div className="tab-form-row">
                            <h5>Об'єкт страхування</h5>
                        </div>
                    </main> 
                </form>
                <footer>
                    <button className="btn-main-form-navigate btn-next" 
                        onClick={this.handleButtonCommitClick.bind(this)} >Надіслати дані
                    </button>
                </footer>
            </div>    
        )
    }
}

export default CommitPage

/*
valueDiscount:"0"
valueTaxi:"1"
isOtk:"1"
dateOtk:"2020-01-17"
valueK1:"B2"
------------------------------------------------------------------------

VIN:"SJWFBAJ10U1347057 "
RegNo:"111 "
DMarkID:"386"
DMarkName:"NISSAN"
DModelID:"10471"
DModelName:"QASHQAI"
AutoDescr:"NISSAN QASHQAI 111 "
DVehicleTypeType:"B2"
FContractID:"676424"
validateMess:""
validateMes:""

data: {
    parameters:{
        valueDiscount:"0",
        valueTaxi:"1",
        isOtk:"1",
        dateOtk:"2020-01-17",
        valueK1:"B2",
    },
    client {
        client { 
            lname:"иванов",
            sname:"иванович",
            fname:"иван",
            ipn:"3525555555",
            dob:"1996-07-10",
            doc:{
                type:"1",
                seria:"СС",
                no:"12321",
                dtget:"2000-01-01",
                source:"Винницким отделом",
            }
            addr:"Ленина 122 - 221",
            phone:"+3808080800808",
            email:"ivan@mail.com",
        },
    },
    insobject {
        auto {
            VIN:"SJWFBAJ10U1347057 ",
            RegNo:"111 ",
            DMarkID:"386",
            DMarkName:"NISSAN",
            DModelID:"10471",
            DModelName:"QASHQAI",
            AutoDescr:"NISSAN QASHQAI 111 ",
            DVehicleTypeType:"B2",
            FContractID:"676424",
            ProdYear:"1960",
        }
    },
}



*/ 