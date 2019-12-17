import React, {Component} from 'react'
import GetVehicle from './GetVehicle'
import {GetK1} from './component/GetK1'
import {GetK2} from './component/GetK2'

class Main extends Component {

  constructor(props){
    super(props)
    this.state = {
      searchVehicle: true,
    }

  }



    render(){

        return(
          <div>
          <nav className="navbar navbar-expand-sm">
 <ul className="navbar-nav nav-tabs">
  <li className="nav-item active">
      <span className="nav-link" href="#">пошук за держ номером</span>
  </li>
  <li className="nav-item">
      <span className="nav-link disabled" href="#">внести параметри авто</span>
  </li>
</ul>
</nav>
          {(this.state.searchVehicle)?<GetVehicle />:<GetK1  />}
          <GetK2 />
          </div> 
    )}


   



}

export default Main