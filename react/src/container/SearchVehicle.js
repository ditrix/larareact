import React, {Component} from 'react'
import axios from 'axios'

import {Spinner} from '../component/Spinner'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// eslint-disable-next-line
import {APP_SITE_URL,REG_EXP_VEHICLE_NO} from '../constants'

import {emptyVehical} from '../data/emptyVehical'



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
        this.setState({message:''})
        const url = `${APP_SITE_URL}public/vehicle?num=${this.state.searchVehicleStr}`
        if(this.validInputData()){
            this.setState({loaded: true, vehicle:emptyVehical,request:true})
            axios.get(url)
                .then(response => {
                    if(response.status === 200){
                        if(response.data.result.DMarkID !== ''){
                        this.setState({vehicle:response.data.result})
                        this.props.getVehicle(response.data.result)
                        } else {
                            this.setState({message:'не знайдено, воспользуйтесь вводом параметров ТЗ'})
                            this.setState({vehicle:emptyVehical})
                            this.props.getVehicle(emptyVehical)
                        }
                    } else {
                        this.setState({message:'не знайдено, воспользуйтесь вводом параметров ТЗ'})
                        this.setState({vehicle:emptyVehical})
                        this.props.getVehicle(emptyVehical)
                    }                
                    this.setState({request:false,loaded:true})
                })
                .catch(error => {
                    this.setState({loaded:true,request:false, message:'не знайдено, скористайтеся введенням параметрів ТЗ'})
                    this.setState({emptyVehical})
                    this.props.getVehicle(emptyVehical)
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
                {(this.state.loaded)&&<span>{this.state.message}</span>}
            </div>
        </div>
    )}
}

export default SearchVehicle
// BH3003CM
 