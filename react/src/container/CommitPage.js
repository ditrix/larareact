import React, {Component} from 'react'
import {connect} from 'react-redux' 
import {dataK1} from '../data/dataK1'
import {getDateUaStr} from '../lib/functions'
import FormHeader from '../component/FormHeader'
import {getTypeDocumentContent, getDiscountContent, getVehicleTypeNameContent, getBoolTextContent } from '../component/templates/TemplatesStr'

import {commitData} from '../data/devcommitdata'


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


    const data=commitData
       return(
        <div className="make-polis-dialog">
                <header><FormHeader title="Оформлення" /></header>
                <form  className="tab-form"> 
                     <main>
 
                        <div className="tab-form-row">
                             <h5>Параметри</h5> 
                            <div className="tab-form-block">
                                <div className="parameters-data">
                                    <label>тип транспортного засобу</label>
                                    <span><h6>{getVehicleTypeNameContent(data.parameters.valueK1)}</h6></span>
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
                <nav  className="clearfix">
                        <button className="btn-main-form-navigate btn-prev" 
                            onClick={this.props.prevTab} >попередня
                        </button>
                        <button className="btn-main-form-navigate btn-next" 
                            onClick={this.props.nextTab} >надіслати заявку
                        </button>
                    </nav>
                </footer>
            </div>    
        )
    }
}

export default CommitPage
