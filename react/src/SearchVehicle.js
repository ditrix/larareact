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
            {    
            (data.VIN)&&<span>VIN:{data.VIN}</span>}<br />
            {
            (data.AutoDescr)&&<span>Авто:{data.AutoDescr}</span>
            }
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
        //console.log(this.state.searchVehicleSt)
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
                    //console.log('vehicle info: ',this.state.vehicle)
                } else {
                    this.setState({message:'системная ошибка, воспользуйтесь вводом параметров авто'})
                }                
                this.setState({request:false,loaded:true})
            })
            .catch(error => {
                this.setState({loaded:true,request:false, message:'не найдено, воспользуйтесь вводом параметров авто'})
            })
        }
    }
      
    render(){
        return(
        <div>
            <div className='search-form'>
                <div className="input-group">
                    <input type="text" className="form-control" 
                        required 
                        onClick={this.handleVehicleClick.bind(this)} 
                        onKeyDown={this.handleVehicleKeyDown.bind(this)}
                        value={this.state.searchVehicleStr} 
                        placeholder="гос номер тс..." 
                        onChange={this.handleInputVehicleChange} />
                    <div className="input-group-append">
                        <span className="input-group-text">
                            <FontAwesomeIcon icon={faSearch} onClick={this.handleButtonVehicleClick.bind(this)} />
                        </span>
                    </div>
                </div>
            </div>
            <div className="_form-message">
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