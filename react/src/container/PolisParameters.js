import React, {Component} from 'react'
import {connect} from 'react-redux'
import GetK1 from '../component/GetK1'
import {GetK2} from '../component/GetK2'
import GetTaxi from '../component/GetTaxi'
import GetDiscount from '../component/GetDiscount'

//import GetOtk from '../component/GetOtk'

//import GetDateOtk from './component/GetDateOtk'

import SearchVehicle from './SearchVehicle'
import {PaySumm} from '../component/PaySumm'
import GetCity from '../component/GetCity'

import {SearchResultTemplate} from '../component/SearchResultTemplate'

import {ACTION_SEARCH_VEHICLE,ACTION_GET_VEHICLE} from '../action'

import {actionSavePolisParameters} from '../action/PolisParametersAction'


import {dateFormatApi} from '../lib/functions'


import { exists } from 'fs';


import {emptyVehical} from '../data/emptyVehical'

import IsOtk from '../component/IsOtk'
import GetDateOtk from '../component/GetDateOtk'

// TODO: set state according values

class PolisParameters extends Component{
    constructor(props){
        super(props)
        this.state = this.props.parameters
        this.setDiscount = this.setDiscount.bind(this)
    }


    parametersVehicleClick(e){
        e.preventDefault()
        const newState = this.state
        newState.action  = ACTION_GET_VEHICLE  
        newState.valueK1 = '00'
        this.setState(newState)
     }
   
     searchVehicleClick(e){
        e.preventDefault()  
        const newState = this.state
        newState.action = ACTION_SEARCH_VEHICLE
        newState.valueK1 = '00'
        this.setState(newState,)
     }
   

    setDiscount(){
        return (['A1','A2','B1','B2','B3'].indexOf(this.state.valueK1) !== -1)
    }

    getK1Value(value){
        const newState = this.state
        newState.valueK1 = value
        this.setState(newState)
    }

    getDiscount(value){    
        this.setState({valueDiscount:value})
    }

    getOtk(value){
        this.setState({isOtk:value})
    }

    getTaxi(value){
        this.setState({valueTaxi:value})
    }

    nextPage(data){
        const parameters= this.state
        this.props.saveParameters(parameters)
        this.props.nextTab()
    }
 
    getCity(value){    
        if(value !== null){    
            const newState = this.state
            newState.city = value
            this.setState(newState)

        }
    }

    getVehicle(value){
        const vehicle = (value !== null)?value:emptyVehical
        const newState = this.state
        newState.valueK1 = vehicle.DVehicleTypeType
        newState.vehicle = vehicle
        this.setState(newState)
    }

    getDateOtk(value){
        const newState = this.state
        newState.dateOtk = (value !== undefined)?value:dateFormatApi(new Date())
        this.setState(newState)
    }

render(){
  
    return(
        <div className="make-polis-dialog">
            <header>
                <div className="title"><h3>Розрахунок</h3></div>
                <div className="result">{PaySumm(100500,'ru')}</div>
            </header>   
            <form>    
                <div className="vehicle-parameters">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <button 
                                className={(this.state.action === ACTION_SEARCH_VEHICLE)?"parameters-link-active":"parameters-link-passive"} 
                                onClick={this.searchVehicleClick.bind(this)}>пошук за держ номером
                            </button>
                        </li>
                        <li className="nav-item">
                            <button 
                                className={(this.state.action === ACTION_GET_VEHICLE)?"parameters-link-active":"parameters-link-passive"}  
                                onClick={this.parametersVehicleClick.bind(this)}>внести параметри авто
                            </button>
                        </li>
                    </ul>
                    <div className="vehicle-result">
                    {(this.state.action === ACTION_SEARCH_VEHICLE)?
                        <div>
                            <SearchVehicle dataVehicle={this.state.vehicle}  getVehicle={this.getVehicle.bind(this)} />
                            {SearchResultTemplate(this.state.vehicle)}
                        </div>    
                       :<GetK1 dataK1={this.state.valueK1} getK1={this.getK1Value.bind(this)} /> 
                     }
                    </div>               
                </div>

                <div className="city-parameters">
                    <GetCity city={this.props.parameters.city} setCity={this.getCity.bind(this)} />                    
                </div>
                    
                <div className="addition-parameters">   
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
                    {((this.state.valueTaxi === "1")||((['C1','C2','D1','D2','E','F'].indexOf(this.state.valueK1) !== -1)))?
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
            </footer>
        </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        parameters: store.parameters,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveParameters: (parameters) => dispatch(actionSavePolisParameters(parameters)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PolisParameters)
