import React, {Component} from 'react'
import SearchVehicle from './SearchVehicle'
import {GetK1} from './component/GetK1'
import {GetK2} from './component/GetK2'
import {GetTaxi} from './component/GetTaxi'
import {GetFranshise} from './component/GetFranshise'
import {GetTerm} from './component/GetTerm'
import {GetPrivilege} from './component/GetPrivilege'
import GetOtk from './component/GetOtk'

class Main extends Component {

  constructor(props){
    super(props)
    this.state = {
      searchVehicle: true,
    }
  }

  parametersVehicleClick(){
     this.setState({searchVehicle:false})
  }

  searchVehicleClick(){
    this.setState({searchVehicle:true})
  }

    render(){

        return(
          <div className="calc-home-page" >

          <div className="vehicle-parameters">
           <ul className="nav nav-pills">
              <li className="nav-item">
                <span className={(this.state.searchVehicle)?"nav-link active":"nav-link passive"} onClick={this.searchVehicleClick.bind(this)}>пошук за держ номером</span>
              </li>
              <li className="nav-item">
                <span className={(this.state.searchVehicle)?"nav-link  passive":"nav-link active"}  onClick={this.parametersVehicleClick.bind(this)}>внести параметри авто</span>
              </li>
            </ul>
          {(this.state.searchVehicle)?<SearchVehicle />:<GetK1  />}
          </div>
 
            <GetK2 />
             <GetTaxi />
             <GetOtk />
             <hr />
    

          <hr />
           <GetFranshise />
           <GetTerm /> 
           <GetPrivilege />
           <hr />
           
          </div> 
    )}


   



}

export default Main