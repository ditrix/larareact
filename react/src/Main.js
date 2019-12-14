import React, {Component} from 'react'
import axios from 'axios'

import {Spinner} from './component/Spinner'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class Main extends Component {

  constructor(props){
    super(props)
    this.state = {
      searchVehicleStr: '',
      searching: false,
      mail:{
				emailTo : 'ditrix@mail.com',
			},
    }

  }



  testPostResponse(){
    

    axios.post('http://larareact/public/vehicleset',{'data':'value'})
        .then(response => console.log('response: ', response, ' searching:',this.state.searching))
        .catch(error => console.log('some error: ',error))
        .finally(this.setState({searching:false}))
  }


 testGetResponse(){
    

    axios.get('http://larareact/public/vehicle')
        .then(response => console.log('response: ', response, ' searching:',this.state.searching))
        .catch(error => console.log('some error: ',error))
        .finally(this.setState({searching:false}))
  }

  handleButtonVehicleClick(){
    
    const vehicleNo = this.state.searchVehicleStr
    this.setState({searching: true})

    console.log(this.state.mail)

    axios.get('http://larareact/public/vehicle',{'data':'value'})
        .then(response => console.log('response: ', response, ' searching:',this.state.searching))
        .catch(error => console.log('some error: ',error))
        .finally(this.setState({searching:false}))
  }

  handleInputSearchVehicleClick(){
    this.setState({searchVehicleStr:''})
  }

  handleKeyDown(e){
    if(e.keyCode === 13){
      e.preventDefault()
      this.handleButtonVehicleClick()
    }
  }

  handleInputVehicleChange(e){
    this.setState({searchVehicleStr: e.currentTarget.value})
  
  }

    render(){
        return(
          <div>
          <form className='search-form app-form'>
            <input type="text" 
              onClick={this.handleInputSearchVehicleClick.bind(this)} 
              onKeyDown={this.handleKeyDown.bind(this)}
              value={this.state.searchVehicleStr} 
              placeholder="гос номер тс..." 
              onChange={this.handleInputVehicleChange.bind(this)} 
           />
            <span>
              <FontAwesomeIcon icon={faSearch} onClick={this.handleButtonVehicleClick.bind(this)} />
            </span>
          </form>
          <div className="search-result">
            {(this.state.searching)&&<Spinner />}
          </div>
          <hr />
          <div className="app-form">
            <input type="submit" className="btn btn-primary" onClick={this.testPostResponse.bind(this)} value="test post"/><hr />
           </div>
                    <hr />
          <div className="app-form">
            <input type="submit" className="btn btn-primary" onClick={this.testGetResponse.bind(this)} value="test get"/><hr />
           </div>
 
          <hr />
{/*           <div className="app-form">
            <input type="submit" className="btn btn-primary" onClick={this.loadByAxios.bind(this)} value="send axios"/><hr />
         
         
           </div>*/}

          </div> 
    )}


    loadByAxios(e){
        e.preventDefault()
        console.log('LoadByAxios -----------------------------')
        axios.get('http://test.askods.com/public/vehicle')
            .then(response => console.log('response: ', response))
            .catch(error => console.log('some error: ',error))
        console.log('--------------------------LoadByAxios') 
    }

 



}

export default Main