import React, {Component} from 'react'
import axios from 'axios'

import {Spinner} from './component/Spinner'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import {APP_SITE_URL,REG_EXP_VEHICLE_NO} from './constants'

import './css/style.css'



class GetVehicle extends Component {
    constructor(props){
       super(props) 
       this.state = {
        vehicle: null,
        searchVehicleStr: '',
        request: false,
        message: '',
        dataValid: false,
        loaded:false,
       } 
       this.handleInputVehicleChange = this.handleInputVehicleChange.bind(this)
    }

    validInputData(){
        //let regex = /^[a-zA-Zа-яА-ЯїЇіІ0-9./]{0,15}$/
       // let checkStr = this.searchVehicleStr
        //const isValid = checkStr.match(REG_EXP_VEHICLE_NO)
        //const isValid = regex.test(checkStr)
      //  let checkStr = 'AAAA'
      //  console.log('isValid: ', regex.test(checkStr))
        this.setState({dataValid:true})
        return true
    }

    handleVehicleKeyDown(e){
        if(e.keyCode === 13){
          e.preventDefault()
          this.handleButtonVehicleClick()
        }
    }
    
    handleInputVehicleChange(e){
        this.setState({searchVehicleStr: e.currentTarget.value})
        //console.log(this.state.searchVehicleSt)
    }

    handleVehicleClick(){
       // this.setState({searchVehicleStr:''})
    }  

    handleButtonVehicleClick(){
        if(this.validInputData()){
           
        this.setState({request: true, loaded: false})
        axios.get(`http://larareact/public/vehicle?num=${this.state.searchVehicleStr}`,)
            .then(response => {console.log('response: ', response.data.result, ' searching:',this.state.searching)
                this.setState({vehicle: response.data.result, message:'',loaded:true})
                console.log(this.state.vehicle)
                }
            )
            .catch(error => {console.log('some error: ',error) 
            this.setState({vehicle: null, message:'ошибка',loaded:true})
            })
            .finally(this.setState({request:false,loaded:true}))
        }
    }
      


    render(){
        return(
        <div>   
        <div className='search-form app-form'>
        <div className="form-input-item">
        <input             
            type="text" 
            required 
            onClick={this.handleVehicleClick.bind(this)} 
            onKeyDown={this.handleVehicleKeyDown.bind(this)}
            value={this.state.searchVehicleStr} 
            placeholder="гос номер тс..." 
            onChange={this.handleInputVehicleChange} />
             <span>
          <FontAwesomeIcon icon={faSearch} onClick={this.handleButtonVehicleClick.bind(this)} />
        </span>
        </div>    
          
       
      </div>
            <div className="form-message">{this.state.message}</div>
            <div className="form-result">
                {(this.state.loaded)?(this.state.vehicle)?<h1>{this.state.vehicle.AutoDescr}</h1>:<span>not found</span>:<span>loading..</span>
                }
            </div>    
            
        </div>
        )
    }
}

export default GetVehicle