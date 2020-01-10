import React, {Component} from 'react'
import GetK1 from '../component/GetK1'
import {GetK2} from '../component/GetK2'
import GetTaxi from '../component/GetTaxi'
import GetDiscount from '../component/GetDiscount'
import GetOtk from '../component/GetOtk'
import SearchVehicle from './SearchVehicle'
import {PaySumm} from '../component/PaySumm'
import GetCity,{defaultCityInfo} from '../component/GetCity'

import {ACTION_SEARCH_VEHICLE,ACTION_GET_VEHICLE} from '../action'



import { exists } from 'fs';




class PolisParameters extends Component{
    constructor(props){
        super(props)

        this.state = {
            valueK1: this.props.data.valueK1,
            valueDiscount: '0',
            valueTaxi: '0',
            isOtk: false,
            searchVehicle: true,
            city: this.props.data.city,
            action: this.props.data.action
        }
        
        this.getK1Value = this.getK1Value.bind(this)
        this.setDiscount = this.setDiscount.bind(this)
        this.getDiscount = this.getDiscount.bind(this)
        this.getTaxi = this.getTaxi.bind(this)
        this.getCity = this.getCity.bind(this)
    }


    parametersVehicleClick(e){
        e.preventDefault()

        //this.setState({...this.state,action: ACTION_GET_VEHICLE})
        const newState = this.state
        newState.action  = ACTION_GET_VEHICLE  
        console.log('PolisParameters.parametersVehicleClick: ',newState.action)
        this.setState(newState)
        this.props.getParam(newState)
     }
   
     searchVehicleClick(e){
        e.preventDefault()  
        //const newState = {...this.state,action: ACTION_SEARCH_VEHICLE}
        const newState = this.state
        newState.action = ACTION_SEARCH_VEHICLE
        this.setState(newState,)
        this.props.getParam(newState)
        
     }
   

    setDiscount(){
        return (['A1','A2','B1','B2','B3'].indexOf(this.state.valueK1) !== -1)
    }

    getK1Value(value){
        console.log('PolisParameters.getK1Value: ',value)
        const newState = this.state
        newState.valueK1 = value
        this.setState(newState)
        this.props.getParam(this.state)

    }

    getDiscount(value){
        this.setState({valueDiscount:value})
    }

    getTaxi(value){
        this.setState({valueTaxi:value})
    }

    nextPage(){
        this.props.nextTab()
    }
 
    getCity(value){    
        if(value !== null){    
            const newState = this.state
            newState.city = value
            this.setState(newState)
            //console.log(this.state.city)
            this.props.getParam(this.state)
        }
    }

render(){

//    console.log('PolisParameters.state.city',this.state.city)    
//    console.log('PolisParameters.props.data.city',this.props.data.city)    

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
            {(this.state.action === ACTION_SEARCH_VEHICLE)?<SearchVehicle />:<GetK1 dataK1={this.state.valueK1} getK1={this.getK1Value} />  }
                    </div>               
                </div>
                <div className="city-parameters">
                   <GetCity city={this.state.city} setCity={this.getCity} /> 
                </div>
                    
                <div className="addition-parameters">   
                    <div className="discount-block">
                    {/*  если мото,  легков -> покажем выбор льгот */}
                    {(this.setDiscount(this.state.valueK1))?
                        <GetDiscount isDiscount={this.getDiscount} />:<></>}
                    </div>
                    <div className="check-select-block">
                    {/* если нет льгот и легковой или автобус до 20 мест -> покажем выбор такси */}
                    {(((this.state.valueDiscount === "0")&&(['B1','B2','B3','B4','B5'].indexOf(this.state.valueK1) !== -1))
                        ||(['D1'].indexOf(this.state.valueK1) !== -1))?
                        <GetTaxi isTaxi={this.getTaxi} />:<></>}
                    </div>
                    <div className="check-select-block">
                    {/* если такси или грузовик автобус прицепы -> покажем выбор техосмотра */}
                    {((this.state.valueTaxi === "1")||((['C1','C2','D1','D2','E','F'].indexOf(this.state.valueK1) !== -1)))?
                        <GetOtk />:<></>}
                    </div>
                </div>
            </form>       
            <footer>
            <nav  className="clearfix">
                <button 
                    className="btn-main-form-navigate btn-next" 
                    onClick={this.props.nextTab} >наступна</button> 
            </nav>
            </footer>
        </div>
        )
    }
}

export default PolisParameters
