import React,{Component} from 'react'
import {dataK1} from '../data/dataK1'





class GetK1 extends Component {

  handleSelectK1Changed(event){
   // console.log(event.currentTarget.value)
    const res = (event.currentTarget.value)?event.currentTarget.value:''
    this.props.getK1(res)
  }  

  render(){
    const k1 = dataK1
    const currentK1 = (this.props.dataK1)?this.props.dataK1:'00'
    return(
      <div className="select-widget">
        <label className="block-label">тип транспортного засобу</label>
        <div className="select-input">
        <select placeholder="параметри авто" onChange={this.handleSelectK1Changed.bind(this)} defaultValue={currentK1} >
        {(k1)&&k1.map((data,index) => 
            <option key={index} value={data.KO}>{data.nameUA}</option>
          )}
        </select>
        </div>
      </div>  
    )
  }      
}

export default GetK1
