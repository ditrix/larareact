import React, {Component} from 'react'
import {connect} from 'react-redux' 
import {dataK1} from '../data/dataK1'
// eslint-disable-next-line
import {getDateUaStr,getStrContent} from '../lib/functions'
import FormHeader from './FormHeader'
import {getTypeDocumentContent, 
        getDiscountContent, 
        getVehicleTypeNameContent, 
        getBoolTextContent,
        getVehicleCityContent
         } from '../component/templates/TemplatesStr'

import {actionCommitPolisData} from '../action/CommitActions'


import {MSG} from '../constants/messages'
import {_I18N} from '../lib/i18n'


class CommitPage extends Component {
    handleButtonCommitClick(){
        console.log('DOIT!')
    }


    getVehicleTypeName(type){
        return dataK1.filter(item => item.KO === type)[0]
    }

   

    render(){

        const data = {
                parameters: this.props.parameters,
                client: this.props.client,
                insobject:{
                    auto: this.props.insobject,
                }
            }
        return(
            <div className="make-polis-dialog">
                <header><FormHeader title="Оформлення" lang={this.props.lang} /></header>
                <form  className="tab-form"> 
                     <main>
 
                        <div className="tab-form-row">
                             {/* <h5>Параметри</h5>  */}
                            <div className="tab-form-block">
                                <div className="parameters-data">
                                    <label>тип транспортного засобу</label>
                                    <span><h6>{getVehicleTypeNameContent(data.parameters.valueK1)}</h6></span>
                                </div>

                                <div className="parameters-data">
                                    <label>місто реєстрації власника ТЗ</label>
                                    <span><h6>{getVehicleCityContent(data.parameters.city)}</h6></span>
                                </div>
                                <div className="parameters-data">
                                    <label>пільги</label>
                                    <span>
                                        <h6>{getDiscountContent(data.parameters.valueDiscount)}</h6>
                                    </span>
                                </div>

                                <div className="parameters-data">
                                    <label>таксі</label>
                                    <span><h6>{getBoolTextContent(data.parameters.valueTaxi)}</h6></span>
                                </div>

                                <div className="parameters-data">
                                    <label>отк</label>
                                    <span><h6>{getBoolTextContent(data.parameters.isOtk)}</h6></span>
                                </div>

                                <div className="parameters-data">
                                    <label>дата отк</label>
                                    <span><h6>{getDateUaStr(data.parameters.dateOtk)}</h6></span>
                                </div>
                            </div>
                        </div>        

                        <div className="tab-form-row">
                            <h5>Страхувальник</h5>
                            <div className="tab-form-block">
                                <div className="parameters-data">
                                <label>прізвище</label>
                                    <span><h6>{data.client.client.lname}</h6></span>
                                </div>
                                <div className="parameters-data">
                                <label>им'я</label>
                                    <span><h6>{data.client.client.fname}</h6></span>
                                </div>
                                <div className="parameters-data">
                                <label>по батькові</label>
                                    <span><h6>{data.client.client.sname}</h6></span>
                                </div>
                                <div className="parameters-data">
                                    <label>ипн</label>
                                    <span><h6>{data.client.client.ipn}</h6></span>
                                </div>
                                <div className="parameters-data">
                                    <label>дата народження</label>
                                    <span><h6>{getDateUaStr(data.client.client.dob)}</h6></span>
                                </div>

                            </div>    
                        </div>

                        <div className="tab-form-row">
                            <h5>Документ</h5>
                            <div className="tab-form-block">
                                <div className="parameters-data">
                                <label>тип документа</label>
                                    <span><h6>{getTypeDocumentContent(data.client.client.doc.type)}</h6></span>
                                </div>
                                <div className="parameters-data">
                                <label>серія</label>
                                    <span><h6>{data.client.client.doc.seria}</h6></span>
                                </div>
                                <div className="parameters-data">
                                <label>номер</label>
                                    <span><h6>{data.client.client.doc.no}</h6></span>
                                </div>
                                <div className="parameters-data">
                                    <label>дата видачі</label>
                                    <span><h6>{getDateUaStr(data.client.client.doc.dtget)}</h6></span>
                                </div>

                                <div className="parameters-data">
                                    <label>ким виданий</label>
                                    <span><h6>{data.client.client.doc.source}</h6></span>
                                </div>
                                    
                            </div>    
                        </div>
                        <div className="tab-form-row">
                            <h5>Контактна інформація:</h5>
                            <div className="tab-form-block">
                                <div className="parameters-data">
                                <label>Адреса:</label>
                                    <span><h6>{data.client.client.addr}</h6></span>
                                </div>
                                <div className="parameters-data">
                                <label>Телефон:</label>
                                    <span><h6>{data.client.client.phone}</h6></span>
                                </div>
                                <div className="parameters-data">
                                    <label>Eлектронна пошта:</label>
                                    <span><h6>{data.client.client.email}</h6></span>
                                </div>
                                    
                            </div>    
                        </div>

                        <div className="tab-form-row">
                            <h5>Об'єкт страхування</h5>
                            <div className="tab-form-block">
                                <div className="parameters-data">
                                <label>Марка:</label>
                                    <span><h6>{data.insobject.auto.DMarkName}</h6></span>
                                </div>
                                <div className="parameters-data">
                                <label>Модель:</label>
                                    <span><h6>{data.insobject.auto.DModelName}</h6></span>
                                </div>
                                <div className="parameters-data">
                                    <label>Рік випуску:</label>
                                    <span><h6>{data.insobject.auto.ProdYear}</h6></span>
                                </div>
                                <div className="parameters-data">
                                    <label>Держномер:</label>
                                    <span><h6>{data.insobject.auto.RegNo}</h6></span>
                                </div>

                                <div className="parameters-data">
                                    <label>VIN:</label>
                                    <span><h6>{data.insobject.auto.VIN}</h6></span>
                                </div>
                                    
                            </div>    
                        </div>
                    </main> 
                </form>            
                <footer>
                    <nav  className="clearfix form-nav">
                            <button className="btn-main-form-navigate btn-prev" 
                                onClick={this.props.prevTab} >{_I18N(MSG.PREV,this.props.lang)}
                            </button>
                            <button className="btn-main-form-navigate btn-next" 
                                onClick={this.props.nextTab} >{_I18N(MSG.COMMIT_POLIS_BUTTON,this.props.lang)}
                            </button>
                    </nav>
                </footer>
            </div>    
        )
    }
}

const mapStateToProps = store => {
    return {
        parameters: {
            valueDiscount: store.parameters.valueDiscount,
            valueTaxi: store.parameters.valueTaxi,
            isOtk: store.parameters.isOtk,
            dateOtk: store.parameters.dateOtk,
            valueK1: store.parameters.valueK1,
            city:store.parameters.city,
        },        
        insobject: store.parameters.vehicle,
        client: store.client,
        calculate: store.calculate,
        lang: store.appstate.lang,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        commitPolsData: () => dispatch(actionCommitPolisData()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommitPage)



