import React,{Component} from 'react';
import './css/style.css'
import PolisParameters from './container/PolisParameters'
import Client from './container/Client'
import InsObject from './container/InsObject'
import GetCity,{defaultCityInfo} from './component/GetCity'
import { TAB_PARAMETERS, TAB_CLIENT, TAB_OBJECT } from './constants'

import {ACTION_SEARCH_VEHICLE,ACTION_GET_VEHICLE} from './action'

// TODO валидаторы  и контроль ввода и актив/пасс виджетов




class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentTab: TAB_PARAMETERS, // ?? componentDidMount ???
      param: {
        valueK1: 'B1',
        valueDiscount: '0',
        valueTaxi: '0',
        isOtk: false,
        action: ACTION_SEARCH_VEHICLE,
        city:  {
          "id": "0",
          "nameRu": "--место регистрации--",
          "nameUa": "--місце реєстрації--",
          "zone": "0",
          "zone_dgo": "0"
        },
      }
    }

    this.actionNextTab = this.actionNextTab.bind(this)
    this.actionPrevTab = this.actionPrevTab.bind(this)
  }



  actionNextTab(){
   switch(this.state.currentTab){
      case TAB_PARAMETERS:
         this.setState({currentTab:TAB_CLIENT})
         break;
      case TAB_CLIENT:
          this.setState({currentTab:TAB_OBJECT})
          break;
      default:
          return;    
      }
  }  

  actionPrevTab(){
    switch(this.state.currentTab){
      case TAB_OBJECT:
         this.setState({currentTab:TAB_CLIENT})
         break;
      case TAB_CLIENT:
          this.setState({currentTab:TAB_PARAMETERS})
          break;
      default:
          return;    
     }        
  }

  setParams(value){
    const newState =  this.state
    newState.param = value;
    console.log('Main.value',value)
    this.setState(newState)
    console.log('Main.state',this.state)
  }


  render(){
    return (
      <div className="main-form clearfix">
        {(this.state.currentTab === TAB_PARAMETERS)&&
          <PolisParameters 
            nextTab={this.actionNextTab} 
            param={this.state.param} 
            setParams={this.setParams.bind(this)} 
            />}
        {(this.state.currentTab === TAB_CLIENT)&&<Client nextTab={this.actionNextTab} prevTab={this.actionPrevTab} />}
        {(this.state.currentTab === TAB_OBJECT)&&<InsObject prevTab={this.actionPrevTab} />}
      </div>
    )}
  
}

export default Main;
