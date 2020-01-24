import React,{Component} from 'react'

import {ACTION_SEARCH_VEHICLE,ACTION_GET_VEHICLE} from '../action'

class ParametersNav extends Component {
    searchVehicleClick(){
        this.props.setParameterAction(ACTION_SEARCH_VEHICLE)    
    }

    parametersVehicleClick(){
        this.props.setParameterAction(ACTION_GET_VEHICLE)
    }

    render(){
        return(
            <ul className="nav parameters-nav">
            <li className="parameters-nav-item">
                <button 
                    className={(this.props.action === ACTION_SEARCH_VEHICLE)?"parameters-link-active":"parameters-link-passive"} 
                    onClick={this.searchVehicleClick.bind(this)}>Пошук за держ номером
                </button>
            </li>
            <li className="parameters-nav-item">
                <button 
                    className={(this.props.action === ACTION_GET_VEHICLE)?"parameters-link-active":"parameters-link-passive"}  
                    onClick={this.parametersVehicleClick.bind(this)}>Внести параметри авто
                </button>
            </li>
        </ul>           
        )
    }
}

export default ParametersNav