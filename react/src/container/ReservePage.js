import React, {Component} from 'react'
import {connect} from 'react-redux' 
import {dataK1} from '../data/dataK1'
// eslint-disable-next-line
import {getDateUaStr} from '../lib/functions'
import {getTypeDocumentContent, 
        getVehicleTypeNameContent, 
        getBoolTextContent,
         } from '../component/templates/TemplatesStr'

import {actionReservePolis} from '../action/ReservePolisAction'


import {MSG} from '../constants/messages'
import {_I18N} from '../lib/i18n'



class ReservePage extends Component {
    handleButtonCommitClick(data){
  
        this.props.commitPolisData(
            {
                parameters: this.props.parameters,
                insobject: this.props.insobject,
                client:this.props.client,            
                calculate: this.props.calculate,
                dgo: this.props.dgo,
            }
        )
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
                <header><h1>{_I18N(MSG.COMMIT_SECTION,this.props.lang)}</h1></header>
                <form  className="tab-form"> 
                     <main>
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-left">
                                <label>{_I18N(MSG.VEHICLE_TYPE_LABEL,this.props.lang)}</label>
                                <span><h6>{getVehicleTypeNameContent(data.parameters.valueK1,this.props.lang)}</h6></span>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-left">
                                <label>{_I18N(MSG.CITY_NAME_LABEL,this.props.lang)}</label>
                                <span><h6>{(this.props.lang === 'ua')?data.parameters.city.nameUA:data.parameters.city.nameRU}</h6></span>
                            </div>
                        </div>

                        <div className="row">
                        
                            <div className="text-center col-4">
                                <div className="row">
                                    <div className="col-sm-4">{_I18N(MSG.DISCOUNT,this.props.lang)}</div>
                                    <div className="col-sm-3"><h6>{getBoolTextContent(data.parameters.valueDiscount,this.props.lang)}</h6></div>
                                </div>
                            </div>
                            <div className="text-center col-4">
                                <div className="row">
                                    <div className="col-sm-4">{_I18N(MSG.TAXI,this.props.lang)}</div>
                                    <div className="col-sm-3"><h6>{(this.props.calculate.par.k3 === "3")?_I18N(MSG.YES,this.props.lang):_I18N(MSG.NO,this.props.lang)}</h6></div>
                                </div>
                            </div>
                            <div className="text-center col-4">
                                <div className="row">
                                    <div className="col-sm-6"><label>{_I18N(MSG.DATE_OTK,this.props.lang)}</label></div>
                                    <div className="col-sm-3"><span><h6>{getDateUaStr(data.client.client.dob)}</h6></span></div>
                                </div>
                            </div>
                           
                        </div>

                        <div className="row">
                        <div className="tab-form-row">
                            <h5>{_I18N(MSG.INSURANT,this.props.lang)}</h5>
                            <div className="tab-form-block">
                                <div className="parameters-data">
                                <label>{_I18N(MSG.LAST_NAME,this.props.lang)}</label>
                                    <span><h6>{data.client.client.lname}</h6></span>
                                </div>
                                <div className="parameters-data">
                                <label>{_I18N(MSG.FIRST_NAME,this.props.lang)}</label>
                                    <span><h6>{data.client.client.fname}</h6></span>
                                </div>
                                <div className="parameters-data">
                                <label>{_I18N(MSG.SECOND_NAME,this.props.lang)}</label>
                                    <span><h6>{data.client.client.sname}</h6></span>
                                </div>
                                <div className="parameters-data">
                                    <label>{_I18N(MSG.INN,this.props.lang)}</label>
                                    <span><h6>{data.client.client.ipn}</h6></span>
                                </div>
                                <div className="parameters-data">
                                    <label>{_I18N(MSG.BIRTHDAY,this.props.lang)}</label>
                                    <span><h6>{getDateUaStr(data.client.client.dob)}</h6></span>
                                </div>

                            </div>    
                        </div>
                        </div>
                        <div className="row">
                        <div className="tab-form-row">
                            <h5>{_I18N(MSG.DOC_SECTION_TITLE,this.props.lang)}</h5>
                            <div className="tab-form-block">
                                <div className="parameters-data">
                                <label>{_I18N(MSG.DOC_TYPE,this.props.lang)}</label>
                                    <span><h6>{getTypeDocumentContent(data.client.client.doc.type,this.props.lang)}</h6></span>
                                </div>
                                <div className="parameters-data">
                                <label>{_I18N(MSG.DOC_SERIA,this.props.lang)}</label>
                                    <span><h6>{data.client.client.doc.seria}</h6></span>
                                </div>
                                <div className="parameters-data">
                                <label>{_I18N(MSG.DOC_NUMBER,this.props.lang)}</label>
                                    <span><h6>{data.client.client.doc.no}</h6></span>
                                </div>
                                <div className="parameters-data">
                                    <label>{_I18N(MSG.DOC_DATE_GET,this.props.lang)}</label>
                                    <span><h6>{getDateUaStr(data.client.client.doc.dtget)}</h6></span>
                                </div>

                                <div className="parameters-data">
                                    <label>{_I18N(MSG.DOC_SOURCE,this.props.lang)}</label>
                                    <span><h6>{data.client.client.doc.source}</h6></span>
                                </div>
                                    
                            </div>    
                        </div>
                        </div>
                        <div className="row">
                        <div className="tab-form-row">
                            <h5>{_I18N(MSG.CONTACTS_INFO,this.props.lang)}</h5>
                            <div className="tab-form-block">
                                <div className="parameters-data">
                                <label>{_I18N(MSG.ADDRESS,this.props.lang)}</label>
                                    <span><h6>{data.client.client.addr}</h6></span>
                                </div>
                                <div className="parameters-data">
                                <label>{_I18N(MSG.PHONE,this.props.lang)}</label>
                                    <span><h6>+380{data.client.client.phone}</h6></span>
                                </div>
                                <div className="parameters-data">
                                    <label>{_I18N(MSG.EMAIL,this.props.lang)}</label>
                                    <span><h6>{data.client.client.email}</h6></span>
                                </div>
                                    
                            </div>    
                        </div>
                        </div>

                        <div className="row">
                        <div className="tab-form-row">
                            <h5>{_I18N(MSG.TITLE_OBJECT_SECION,this.props.lang)}</h5>
                            <div className="tab-form-block">
                                <div className="parameters-data">
                                <label>{_I18N(MSG.VEHICLE_MARK,this.props.lang)}</label>
                                    <span><h6>{data.insobject.auto.DMarkName}</h6></span>
                                </div>
                                <div className="parameters-data">
                                <label>{_I18N(MSG.VEHICLE_MODEL,this.props.lang)}</label>
                                    <span><h6>{data.insobject.auto.DModelName}</h6></span>
                                </div>
                                <div className="parameters-data">
                                    <label>{_I18N(MSG.VEHICLE_YEAR,this.props.lang)}</label>
                                    <span><h6>{data.insobject.auto.ProdYear}</h6></span>
                                </div>
                                <div className="parameters-data">
                                    <label>{_I18N(MSG.VEHICLE_NO,this.props.lang)}</label>
                                    <span><h6>{data.insobject.auto.RegNo}</h6></span>
                                </div>

                                <div className="parameters-data">
                                    <label>{_I18N(MSG.VEHICLE_VIN,this.props.lang)}</label>
                                    <span><h6>{data.insobject.auto.VIN}</h6></span>
                                </div>
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
                                onClick={this.handleButtonCommitClick.bind(this)} >{_I18N(MSG.COMMIT_POLIS_BUTTON,this.props.lang)}
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
            valueStartDate:store.parameters.valueStartDate
        },        
        insobject: store.parameters.vehicle,
        client: store.client,
        calculate: store.calculate,
        lang: store.appstate.lang,
        dgo: store.dgo,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        commitPolisData: (data) => dispatch(actionReservePolis(data)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReservePage)



