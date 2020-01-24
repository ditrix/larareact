import React, {Component} from 'react'
import {connect} from 'react-redux'
import GetK1 from '../component/GetK1'
import GetTaxi from '../component/GetTaxi'
import GetDiscount from '../component/GetDiscount'
import SearchVehicle from './SearchVehicle'

import GetCity from '../component/GetCity'

import {SearchResultTemplate} from '../component/SearchResultTemplate'

import {ACTION_SEARCH_VEHICLE,ACTION_GET_VEHICLE} from '../action'

import {actionSavePolisParameters,actionOptionValuesChange} from '../action/PolisParametersAction'
import {dateFormatApi} from '../lib/functions'

import {emptyVehical} from '../data/emptyVehical'

import IsOtk from '../component/IsOtk'
import GetDateOtk from '../component/GetDateOtk'
import FormHeader from './FormHeader'
import ParametersNav from '../component/ParametersNav'

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
        console.log('setDiscount => ',this.state.valueK1)
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
        this.props.calculatePl(calculate)
    }

    getOtk(value){
        this.setState({isOtk:value,validateMess:''})
    }

    getTaxi(value){
        this.setState({valueTaxi:value,validateMess:''})
        const calculate = this.props.calculate
        calculate.valueK3= value
        calculate.par.k3 = value
        this.props.calculatePl(calculate)
    }

    nextPage(data){
        if(this.validateForm()){
            this.setState({validateMess:''})
            const parameters= this.state
            this.props.saveParameters(parameters)
            this.props.nextTab()
    
        } else {
            this.setState({validateMess:'відсутні данні стасовно типу ТЗ або міста реєстрації'})
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



    getDateOtk(value){
        const tmpState = this.state
        tmpState.dateOtk = (value !== undefined)?value:dateFormatApi(new Date())
        tmpState.validateMess = ''
        this.setState(tmpState)
    }


render(){
    console.log(this.state.valueK1)
    return(
        <div className="make-polis-dialog">
            <header>
                <FormHeader title='' /> 
                <ParametersNav  action={this.state.action} setParameterAction={this.setParameterAction.bind(this)} />
            </header>   
            <form className="tab-form">    
                <div className="vehicle-parameters">
 
                    <div className="vehicle-result">
                    {(this.state.action === ACTION_SEARCH_VEHICLE)?
                        <div>
                            <SearchVehicle dataVehicle={this.state.vehicle}  getVehicle={this.getSearchResult.bind(this)} />
                            {SearchResultTemplate(this.state.vehicle)}
                        </div>    
                       :<div className='form-input-row'>
                            <GetK1 dataK1={this.state.valueK1} getK1={this.getK1Value.bind(this)} />
                        </div>
                     }
                    </div>               
                </div>
                <div className="city-parameters form-input-row">
                    <GetCity city={this.props.parameters.city} setCity={this.getCity.bind(this)} />                    
                </div>
                    
                <div className="addition-parameters form-input-row">   
                    <div className="discount-block">
                    {/*  если мото,  легков -> покажем выбор льгот */}
                    
                    {(this.setDiscount(this.state.valueK1))&&<GetDiscount 
                            discount={this.props.parameters.valueDiscount} 
                            isDiscount={this.getDiscount.bind(this)} 
                        />
                    }
                    </div>
                    <div className="check-select-block">
                    {/* если нет льгот и легковой или автобус до 20 мест -> покажем выбор такси */}
                    {(((this.state.valueDiscount === "0")&&(['B1','B2','B3','B4','B5'].indexOf(this.state.valueK1) !== -1))
                        ||(['D1'].indexOf(this.state.valueK1) !== -1))?
                        <GetTaxi 
                            getTaxi={this.getTaxi.bind(this)} 
                            valueTaxi={this.props.parameters.valueTaxi} 
                        />
                        :<></>}
                    </div>
                    <div className="check-select-block">
                    {/* если такси или грузовик автобус прицепы -> покажем выбор техосмотра */}
                    {((this.state.valueTaxi === "3")||((['C1','C2','D1','D2','E','F'].indexOf(this.state.valueK1) !== -1)))?
                        <IsOtk isOtk={this.props.parameters.isOtk} getOtk={this.getOtk.bind(this)} />    
                        :<></>}
                    </div>
                    <div className="check-select-block">
                      {
                          (this.state.isOtk === '1')&&<GetDateOtk 
                            dateOtk={this.state.dateOtk} 
                            getDateOtk={this.getDateOtk.bind(this)}

                          />
                      }
                    </div>
                </div>

            </form>       
            
            <footer>
            
            <nav  className="clearfix">
                <button 
                    className="btn-main-form-navigate btn-next" 
                    onClick={this.nextPage.bind(this)} >наступна</button> 
            </nav>
            <span className="input-error-message">{this.state.validateMess}</span>
            </footer>
        </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        parameters: store.parameters,
        calculate: store.calculate
    }
}

const mapDispatchToProps = dispatch => {

    return {
        saveParameters: (parameters) => dispatch(actionSavePolisParameters(parameters)),
        calculatePl:(valuesKo) => dispatch(actionOptionValuesChange(valuesKo))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PolisParameters)
