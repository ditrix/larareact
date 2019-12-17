import React, {Component} from 'react'
import SearchVehicle from './SearchVehicle'
import {GetK1} from './component/GetK1'
import {GetK2} from './component/GetK2'

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
          <div>

          <div className="debug vehicle-parameters">
           <ul className="nav nav-pills">
              <li className="nav-item">
                <span className={(this.state.searchVehicle)?"nav-link active":"nav-link"} onClick={this.searchVehicleClick.bind(this)}>пошук за держ номером</span>
              </li>
              <li className="nav-item">
                <span className={(this.state.searchVehicle)?"nav-link":"nav-link active"}  onClick={this.parametersVehicleClick.bind(this)}>внести параметри авто</span>
              </li>
            </ul>
          

          {(this.state.searchVehicle)?<SearchVehicle />:<GetK1  />}
          
          </div>
          <div className="city-paraqmeters">
            <GetK2 />
          </div>
          
          </div> 
    )}


   



}

export default Main