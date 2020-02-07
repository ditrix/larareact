import React,{Component} from 'react'

import {ACTION_SEARCH_VEHICLE,ACTION_GET_VEHICLE} from '../action'

import {MSG} from '../constants/messages'
import {_I18N} from '../lib/i18n'

class ParametersNav extends Component {
    searchVehicleClick(){
        this.props.setParameterAction(ACTION_SEARCH_VEHICLE)    
    }

    parametersVehicleClick(){
        this.props.setParameterAction(ACTION_GET_VEHICLE)
    }

    render(){
        return(
   
            <div className="container">
                {(this.props.action === ACTION_SEARCH_VEHICLE)?
                    <div className="row parameter-nav">

                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 active-parameter">
                        <div className="_debug" onClick={this.searchVehicleClick.bind(this)}>
                            <h5>{_I18N(MSG.SEARCH_VEHICLE,this.props.lang)}</h5>
                        </div>
                </div>


                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 passive-parameter">
                        <div className="_debug" onClick={this.parametersVehicleClick.bind(this)}>
                        <h5>{_I18N(MSG.INPUT_PARAMETERS,this.props.lang)}</h5>
                        </div>
                </div>
                </div>
                :
                <div className="row parameter-nav">

                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 passive-parameter">
                        <div className="_debug" onClick={this.searchVehicleClick.bind(this)}>
                            <h5>{_I18N(MSG.SEARCH_VEHICLE,this.props.lang)}</h5>
                        </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 active-parameter">
                        <div className="_debug" onClick={this.parametersVehicleClick.bind(this)}>
                        <h5>{_I18N(MSG.INPUT_PARAMETERS,this.props.lang)}</h5>
                        </div>
                </div>
                </div>
                }   

                </div>
         
  
        )
    }
}

export default ParametersNav