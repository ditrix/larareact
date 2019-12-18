import React, {Component} from 'react'
import SearchVehicle from './SearchVehicle'
import {GetK1} from './component/GetK1'
import {GetK2} from './component/GetK2'
import {GetK3} from './component/GetK3'


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
          <hr />
          <div className="city-paraqmeters">
            <GetK2 />
          </div>
          <hr />
          <div className="k3-parameter">
          {/* подымается только для K1 in ("B1","B2","B3","B4","B5","D1")  */}
             <GetK3 />
          </div>
          </div> 
    )}


   



}

export default Main