import React, {Component} from 'react'
import GetK1 from '../component/GetK1'
import {GetK2} from '../component/GetK2'
import GetTaxi from '../component/GetTaxi'
import GetDiscount from '../component/GetDiscount'
import GetOtk from '../component/GetOtk'
import SearchVehicle from './SearchVehicle'

class PolisParameters extends Component{
    constructor(props){
        super(props)
        this.state = {
            valueK1: 'B1',
            valueDiscount: '0',
            valueTaxi: '0',
            isOtk: false,
            searchVehicle: true,

        }
        
        this.getK1Value = this.getK1Value.bind(this)
        this.setDiscount = this.setDiscount.bind(this)
        this.getDiscount = this.getDiscount.bind(this)
        this.getTaxi = this.getTaxi.bind(this)

    }

    parametersVehicleClick(e){
        e.preventDefault()
        this.setState({searchVehicle:false})
     }
   
     searchVehicleClick(e){
        e.preventDefault()  
       this.setState({searchVehicle:true})
     }
   

    setDiscount(){
        return (['A1','A2','B1','B2','B3'].indexOf(this.state.valueK1) !== -1)
    }

    getK1Value(value){
        this.setState({valueK1:value})
    }

    getDiscount(value){
        this.setState({valueDiscount:value})
    }

    getTaxi(value){
        this.setState({valueTaxi:value})
    }

    render(){
     
        return(
        <form className="parameters-form">    
            <div className="polis-parameters">

            <div className="vehicle-parameters">
           <ul className="nav nav-pills">
              <li className="nav-item">
                <button className={(this.state.searchVehicle)?"parameters-link-active":"parameters-link-passive"} onClick={this.searchVehicleClick.bind(this)}>пошук за держ номером</button>
              </li>
              <li className="nav-item">
                <button className={(this.state.searchVehicle)?"parameters-link-passive":"parameters-link-active"}  onClick={this.parametersVehicleClick.bind(this)}>внести параметри авто</button>
              </li>
            </ul>
           
          {(this.state.searchVehicle)?<SearchVehicle />:<GetK1 getK1={this.getK1Value} />  }
            </div>
              <GetK2 />  
                <div className="row_">   
                    <div className="col-polis-parameter">
                    {/*  если мото,  легков -> покажем выбор льгот */}
                    {(this.setDiscount(this.state.valueK1))?
                        <GetDiscount isDiscount={this.getDiscount} />:<></>}
                    </div>
                    <div className="col-polis-parameter">
                    {/* если нет льгот и легковой или автобус до 20 мест -> покажем выбор такси */}
                    {(((this.state.valueDiscount === "0")&&(['B1','B2','B3','B4','B5'].indexOf(this.state.valueK1) !== -1))
                        ||(['D1'].indexOf(this.state.valueK1) !== -1))?
                        <GetTaxi isTaxi={this.getTaxi} />:<></>}
                    </div>
                    <div className="col-polis-parameter">
                    {/* если такси или грузовик автобус прицепы -> покажем выбор техосмотра */}
                    {((this.state.valueTaxi === "1")||((['C1','C2','D1','D2','E','F'].indexOf(this.state.valueK1) !== -1)))?
                        <GetOtk />:<></>}
                    </div>
                </div>
            </div>
        </form>       
        )
    }
}

export default PolisParameters
