import React, {Component} from 'react'
import axios from 'axios'

import {Spinner} from '../component/Spinner'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// eslint-disable-next-line
import {APP_SITE_URL,REG_EXP_VEHICLE_NO} from '../constants'
import {emptyVehical} from '../data/emptyVehical'
import {filterInputVehickleNo} from '../lib/functions'

import {MSG} from '../constants/messages'
import {_I18N} from '../lib/i18n'

class SearchVehicle extends Component {
    constructor(props){
       super(props) 
       this.state = {
        vehicle: emptyVehical,
        searchVehicleStr: '',
        loaded:false,
        request:false,
        message:'',
       } 
       this.handleInputVehicleChange = this.handleInputVehicleChange.bind(this)
    }

    
    handleVehicleKeyDown(e){
        if(e.keyCode === 13){
          e.preventDefault()
          this.handleButtonVehicleClick()
        }
    }
    
    handleInputVehicleChange(e){
        const tmpState = this.state
        tmpState.searchVehicleStr = filterInputVehickleNo(e.currentTarget.value)
        this.setState(tmpState)
    }

    handleVehicleClick(){
        this.setState({searchVehicleStr:'',loaded:false,message:'',request:false})
    }  

    validInputData(){ 
        return true;   // TODO! regular expressions
    }
        

    handleButtonVehicleClick(){
        if(this.state.searchVehicleStr === ''){
            return;
        }
        const tmpState = this.state;
        tmpState.message = ''        
        this.setState(tmpState)
        const url = `${APP_SITE_URL}public/vehicle?num=${this.state.searchVehicleStr}`
        if(this.validInputData()){
            this.setState({loaded: true, vehicle:emptyVehical,request:true})

            //  fetch(url)
            //  .then(response => console.log('fetch response ',response.json())); 


            axios.get(url)
                .then(response => {
                    
                    if(response.status === 200){
                        if(response.data.result.DMarkID !== ''){
                        this.setState({vehicle:response.data.result})
                        this.props.getVehicle(response.data.result)
                        } else {
                            this.setState({message:MSG.SEARCH_NOT_FOUND})
                            this.setState({vehicle:emptyVehical})
                            this.props.getVehicle(emptyVehical)
                        }
                    } else {
                        this.setState({message:MSG.SEARCH_NOT_FOUND})
                        this.setState({vehicle:emptyVehical})
                        this.props.getVehicle(emptyVehical)
                    }                
                    this.setState({request:false,loaded:true})
                })
                .catch(error => {
                    this.setState({loaded:true,request:false, message:MSG.SEARCH_NOT_FOUND})
                    this.setState({emptyVehical})
                    this.props.getVehicle(emptyVehical)
                  //  console.log('CATCH: ',error)
                })
        }
    }
      
    render(){
        return(
        <div className="search-vehicle-wrapper">
            <div className='search-form'>
                {/* <label className="block-label">{_I18N(MSG.SEARCH_LABEL,this.props.lang)}</label> */}
                <div className="input-group">
                    <input type="text" className="form-control" 
                        required 
                        onClick={this.handleVehicleClick.bind(this)} 
                        onKeyDown={this.handleVehicleKeyDown.bind(this)}
                        value={this.state.searchVehicleStr} 
                        placeholder={_I18N(MSG.SEARCH_PLACEHOLDER,this.props.lang)}
                        onChange={this.handleInputVehicleChange} />
                    <div className="input-group-append">
                        <span className="input-group-text">
                            <FontAwesomeIcon icon={faSearch} onClick={this.handleButtonVehicleClick.bind(this)} />
                        </span>
                    </div>
                </div>
            </div>
            <div className="form-message">
                {(this.state.request)?<Spinner />:
                (this.state.loaded)?<span>{_I18N(this.state.message,this.props.lang)}</span>:<span></span>}
            </div>
        </div>
    )}
}

export default SearchVehicle
// 
 /* 
АН5339НЕ 
АН7142СК 
АН3900МА 
BH3003CM
05663OK
------------------------- shop
Jtl237      -
ВВ7419Сх    -     
AP5636AI    +
ВН8686АЕ    +
АЕ6575ВК    -
АТ8513СН    -
USCAR777    -
АІ6728ХК    +
ВН8092НТ    -
AM8227AM    +
AI2661CI    +
ВХ0741СЕ    -
АР4353ЕІ    -
АІ1496НМ    -




*/