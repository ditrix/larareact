import React,{Component} from 'react'
import {dataK1} from '../data/dataK1'

class GetK1 extends Component {


  handleSelectK1Changed(event){
    console.log(event.currentTarget.value)
    const res = (event.currentTarget.value)?event.currentTarget.value:''
    this.props.getK1(res)
  }  

  render(){
    const k1 = dataK1
    return(
      <div className="form-input-item">
        <label className="block-label">тип транспортного засобу</label>
        <select placeholder="параметри авто" onChange={this.handleSelectK1Changed.bind(this)} >
        {(k1)&&k1.map((data,index) => 
            <option key={index} value={data.KO}>{data.nameUA}</option>
          )}
        </select>
      </div>  
    )
  }      
}

export default GetK1
