import React, {Component} from 'react'
import axios from 'axios'

import {Spinner} from '../component/Spinner'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// eslint-disable-next-line
import {APP_SITE_URL,REG_EXP_VEHICLE_NO} from '../constants'

//import './css/style.css'

import {initialVehicle} from '../reducers/vehicle'

function SearchResultTemplate(data){
    
        if(data){
            return(
            <div className="vehicle-info">
            <ul className="vehicle-info-search-result">
            {(data.VIN)&&<li><label>VIN:</label><span>{data.VIN}</span></li>}
            {(data.DMarkName !== "")&&<li><label>марка:</label><span>{data.DMarkName}</span></li>}
            {(data.DModelName !== "")&&<li><label>модель:</label><span>{data.DModelName}</span></li>}
            {(data.AutoDescr !=="")&&<li><label>опис:</label><span>{data.AutoDescr}</span></li>}
            </ul>
            </div>
            )
        }

    return(<span>no VIN</span>)
}


class SearchVehicle extends Component {
    constructor(props){
       super(props) 
       this.state = {
        vehicle: initialVehicle(),
        searchVehicleStr: '',
        loaded:false,
        request:false,
        message:'',
       } 
       this.handleInputVehicleChange = this.handleInputVehicleChange.bind(this)
    }

    validInputData(){
        // eslint-disable-next-line
        let regex = /^[a-zA-Zа-яА-ЯїЇіІ0-9./]{0,15}$/
        // ...
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
    }

    handleVehicleClick(){
        this.setState({searchVehicleStr:'',loaded:false,message:'',request:false})
    }  

    handleButtonVehicleClick(){
        if(this.state.searchVehicleStr === ''){
            return;
        }
        const url = `${APP_SITE_URL}public/vehicle?num=${this.state.searchVehicleStr}`
        if(this.validInputData()){
            this.setState({loaded: true, vehicle:initialVehicle(),request:true})
            axios.get(url)
                .then(response => {
                    console.log(response)
                    if(response.status === 200){
                        console.log(response.data.result)
                        this.setState({vehicle:response.data.result})
                        this.props.getVehicle(response.data.result)
                    } else {
                        this.setState({message:'не знайдено, воспользуйтесь вводом параметров ТЗ'})
                        this.setState({vehicle:initialVehicle()})
                        this.props.getVehicle(initialVehicle())
                    }                
                    this.setState({request:false,loaded:true})
                })
                .catch(error => {
                    this.setState({loaded:true,request:false, message:'не знайдено, скористайтеся введенням параметрів ТЗ'})
                    this.setState({vehicle:initialVehicle()})
                    this.props.getVehicle(initialVehicle())
                })
        }
    }
      
    render(){
        return(
        <div className="search-vehicle-wrapper">
            <div className='search-form'>
                <label className="block-label">держ номер транспортного засобу</label>
                <div className="input-group">
                    <input type="text" className="form-control" 
                        required 
                        onClick={this.handleVehicleClick.bind(this)} 
                        onKeyDown={this.handleVehicleKeyDown.bind(this)}
                        value={this.state.searchVehicleStr} 
                        placeholder="держ номер..." 
                        onChange={this.handleInputVehicleChange} />
                    <div className="input-group-append">
                        <span className="input-group-text">
                            <FontAwesomeIcon icon={faSearch} onClick={this.handleButtonVehicleClick.bind(this)} />
                        </span>
                    </div>
                </div>
            </div>
            <div className="form-message">
                {(this.state.request)&&<Spinner />}
                {(this.state.loaded)?
                    <>{
                        (this.state.vehicle)?<span>{SearchResultTemplate(this.state.vehicle)}</span>
                        :<span>{this.state.message}</span>
                    }</>
                :<></>}
            </div>
        </div>
    )}
}

export default SearchVehicle
// BH3003CM
 