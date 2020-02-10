import React, {Component} from 'react'
import {connect} from 'react-redux'
import GetK1 from '../component/GetK1'
import GetTaxi from '../component/GetTaxi'
import GetDiscount from '../component/GetDiscount'
import SearchVehicle from './SearchVehicle'

import GetCity from '../component/GetCity'

import {SearchResultTemplate} from '../component/SearchResultTemplate'

import {ACTION_SEARCH_VEHICLE} from '../action'

import {actionSavePolisParameters,actionOptionValuesChange} from '../action/PolisParametersAction'
import {dateFormatApi} from '../lib/functions'

import {emptyVehical} from '../data/emptyVehical'

import IsOtk from '../component/IsOtk'
import GetDateOtk from '../component/GetDateOtk'

import ParametersNav from '../component/ParametersNav'

import {MSG} from '../constants/messages'
import {_I18N} from '../lib/i18n'

// TODO: set state according values
// TODO валидатор
//  мин тип и город д.б. определены.

class PolisParameters extends Component{
    constructor(props){
        super(props)
        this.state = this.props.parameters

        this.setDiscount = this.setDiscount.bind(this)
        this.validateForm = this.validateForm.bind(this) 
    }

    validateForm(){        
        return (this.state.valueK1 !== '00') && (this.state.city.id !== '0')
    }

    setParameterAction(value){
        const tmpState = this.state
        tmpState.action  = value  
        tmpState.valueK1 = '00'
        tmpState.vehicle.AutoDescr = ''
        tmpState.vehicle.DMarkName = ''
        tmpState.vehicle.DModelName = ''
        tmpState.vehicle.RegNo = ''
        tmpState.vehicle.VIN = ''
        this.setState(tmpState)
        const calculate = this.props.calculate
        calculate.valueK1= '00'
        calculate.par.k1 = '00' 
        this.props.calculatePl(calculate)
    }

    setDiscount(){
        return (['A1','A2','B1','B2','B3'].indexOf(this.state.valueK1) !== -1)
    }

    getK1Value(value){
        const tmpState = this.state
        tmpState.valueK1 = value
        tmpState.validateMess = ''
        this.setState(tmpState)
        if(value !== null){
            const calculate = this.props.calculate
            calculate.valueK1 = value  // TODO erase
            calculate.par.k1 = value
            this.props.calculatePl(calculate)
        }
    }


    getSearchResult(value){
        const vehicle = (value !== null)?value:emptyVehical
        const calculate = this.props.calculate
        calculate.par.k1 = vehicle.DVehicleTypeType 
        calculate.valueK1 = vehicle.DVehicleTypeType
        this.props.calculatePl(calculate)
        const tmpState = this.state 
        tmpState.valueK1 = value.DVehicleTypeType
        tmpState.vehicle = value
        this.setState(tmpState)
    }    

    getDiscount(value){    
        this.setState({valueDiscount:value,validateMess:''})
        const calculate = this.props.calculate
        calculate.valueDiscount= value
        calculate.par.k10 = value
        calculate.par.k3 = '0'
        this.props.calculatePl(calculate)
        this.setState({valueTaxi:(value ==='')?'0':'1',isOtk:(value!=='0')? value:'0',validateMess:''})
        this.props.saveParameters(this.state)
    }

    getTaxi(value){
        this.setState({valueTaxi:value,isOtk:(value==='0')? value:'1',validateMess:''})
        const calculate = this.props.calculate
        calculate.valueK3= value
        calculate.par.k3 = value
        this.props.calculatePl(calculate)
    }


    getOtk(value){
        this.setState({isOtk:value,validateMess:''})
        this.props.saveParameters(this.state)
    }


    getDateOtk(value){
        const tmpState = this.state
        tmpState.dateOtk = (value !== undefined)?value:dateFormatApi(new Date())
        tmpState.validateMess = ''
        this.setState(tmpState)
    }



    nextPage(data){
        if(this.validateForm()){
            this.setState({validateMess:''})
            const parameters= this.state
            this.props.saveParameters(parameters)
            this.props.nextTab()
    
        } else {
            this.setState({validateMess:MSG.ERROR_PARAMETERS_DATA})
        }
    }
 
    getCity(value){    
        if(value !== null){    
            const tmpState = this.state
            tmpState.city = value
            tmpState.validateMess = ''
            this.setState(tmpState)
            const calculate = this.props.calculate
            calculate.valueK2 = value.zone
            calculate.par.k2 = value.zone
            this.props.calculatePl(calculate)
        }

    }

render(){
    return(
        <div className="make-polis-dialog">
            <ParametersNav  
                    lang={this.props.lang}
                    action={this.state.action} 
                    setParameterAction={this.setParameterAction.bind(this)} 
            />
            <form className="tab-form">    
                <div className="vehicle-parameters">
 
                    <div className="vehicle-result">
                    {(this.state.action === ACTION_SEARCH_VEHICLE)?
                        <div>
                            <SearchVehicle 
                                dataVehicle={this.state.vehicle}  
                                getVehicle={this.getSearchResult.bind(this)} 
                                lang={this.props.lang}
                            />
                            {SearchResultTemplate(this.state.vehicle,this.props.lang)}
                        </div>    
                       :<div className='form-input-row'>
                            <GetK1 
                                lang={this.props.lang} 
                                dataK1={this.state.valueK1} 
                                getK1={this.getK1Value.bind(this)} 
                            />
                        </div>
                     }
                    </div>               
                </div>
                <div className="city-parameters form-input-row">
                    <GetCity 
                        lang={this.props.lang} 
                        city={this.props.parameters.city} 
                        setCity={this.getCity.bind(this)} 
                    />
                </div>
                    
                <div className="addition-parameters form-input-row">   
                    <div className="discount-block">
                    {/*  если мото,  легков -> покажем выбор льгот */}
                    
                    {(this.setDiscount(this.state.valueK1))&&<GetDiscount 
                            lang={this.props.lang}
                            discount={this.props.parameters.valueDiscount} 
                            isDiscount={this.getDiscount.bind(this)} 
                        />
                    }
                    </div>
                    <div className="check-select-block">
                    {/* если нет льгот и легковой или автобус до 20 мест -> покажем выбор такси */}
                     {(((this.props.calculate.par.k10 === "0")&&(['B1','B2','B3','B4','B5'].indexOf(this.props.calculate.par.k1) !== -1))
                        ||(['D1'].indexOf(this.props.calculate.par.k1) !== -1))?
                        <GetTaxi 
                            lang={this.props.lang} 
                            getTaxi={this.getTaxi.bind(this)} 
                            valueTaxi={this.props.parameters.valueTaxi} 
                        />
                        :<></>} 
                    </div>
                    {/* TODO OTK!!!! */}
                    <div className="check-select-block">
                    {/* если такси или грузовик автобус прицепы -> покажем выбор техосмотра */}
                    {((this.props.calculate.par.k3 === "3")||((['C1','C2','D1','D2','E','F'].indexOf(this.state.valueK1) !== -1)))?
                        <IsOtk 
                            lang={this.props.lang} 
                            isOtk={this.props.parameters.isOtk} 
                            getOtk={this.getOtk.bind(this)} />    
                        :<></>
                    }

                    </div>

                    <div className="check-select-block">
                      {
                          (this.state.isOtk === '1')?<GetDateOtk 
                            dateOtk={this.state.dateOtk} 
                            getDateOtk={this.getDateOtk.bind(this)}

                          />:<></>
                      }
                    </div>
                </div>

            </form>       
            
            <footer>
            
            <nav  className="clearfix  form-parameters-nav">
                <button 
                    className="btn-main-form-navigate" 
                    onClick={this.nextPage.bind(this)} >{_I18N(MSG.NEXT,this.props.lang)}
                </button> 
            </nav>
            <span className="input-error-message">{_I18N(this.state.validateMess,this.props.lang)}</span>
            </footer>
        </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        parameters: store.parameters,
        calculate: store.calculate,
        lang: store.appstate.lang,
    }
}

const mapDispatchToProps = dispatch => {

    return {
        saveParameters: (parameters) => dispatch(actionSavePolisParameters(parameters)),
        calculatePl:(valuesKo) => dispatch(actionOptionValuesChange(valuesKo))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PolisParameters)
