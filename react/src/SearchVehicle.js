import React, {Component} from 'react'
import axios from 'axios'

import {Spinner} from './component/Spinner'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faLeaf } from '@fortawesome/free-solid-svg-icons'

import {APP_SITE_URL,REG_EXP_VEHICLE_NO} from './constants'

import './css/style.css'



function SearchResultTemplate(data){
    
        if(data){
            return(
            <div className="vehicle-info">
            <ul>
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
        vehicle: null,
        searchVehicleStr: '',
        loaded:false,
        request:false,
        message:'',
       } 
       this.handleInputVehicleChange = this.handleInputVehicleChange.bind(this)
    }

    validInputData(){
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
        if(this.validInputData()){
         console.log('search...')  
        this.setState({loaded: true, vehicle:null,request:true})
        axios.get(`http://larareact/public/vehicle?num=${this.state.searchVehicleStr}`,)
            .then(response => {
                console.log(response)
                if(response.status === 200){
                    console.log(response.data.result)
                    this.setState({vehicle:response.data.result})
                } else {
                    this.setState({message:'не знайдено, воспользуйтесь вводом параметров ТЗ'})
                }                
                this.setState({request:false,loaded:true})
            })
            .catch(error => {
                this.setState({loaded:true,request:false, message:'не знайдено, скористайтеся введенням параметрів ТЗ'})
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
{/*
BH3003CM
*/} 