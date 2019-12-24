import React, {Component} from 'react'
import {GetK1} from '../component/GetK1'
import {GetTaxi} from '../component/GetTaxi'
import GetDiscount from '../component/GetDiscount'
import GetOtk from '../component/GetOtk'

import {dataK1} from '../data/dataK1'


import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';


class PolisParameters extends Component{
    constructor(props){
        super(props)
        this.state = {
            valueK1: 'B1',
            isTaxi: false,
            isDiscount:true,
            isOtk: false,
        }
        
        this.getK1Value = this.getK1Value.bind(this)
        this.setDiscount = this.setDiscount.bind(this)
    }

    setTaxi(value){
        this.setState({isTaxi:value})
        return
    }

    
    setDiscount(){
        return (['A1','A2','B1','B2','B3','D1'].indexOf(this.state.valueK1) !== -1)
    }

    getK1Value(e){

        this.setState({valueK1:e.currentTarget.value})
        console.log('getK1Value', this.state.valueK1)
    }

    render(){
        const k1 = dataK1
        console.log(this.state)
        return(
            <div className="container polis-parameters">
               <div className="row">
                <div className="col-sm-5">{/*
                    <div className="form-input-item">
                        <label className="block-label">тип транспортного засобу</label>
                        <select placeholder="параметри авто" onChange={this.getK1Value} >
                        {(k1)&&k1.map((data,index) => 
                            <option key={index} value={data.KO}>{data.nameUA}</option>
                        )}
                        </select>
                    </div> */}
                    {GetK1(this.getK1Value)}  
               </div>
               <div className="col-sm-2">
                    {(this.setDiscount(this.state.valueK1))?
                        <GetDiscount isDiscount={this.setTaxi.bind(this)} />:<></>}
               </div>
               <div className="col-sm-1">
                    {(this.state.isTaxi)?<GetTaxi />:<></>}
                </div>
               <div className="col-sm-4">
               <GetOtk />
               </div>
              

               </div>
               </div>   
        )
    }
}

export default PolisParameters
