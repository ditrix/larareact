import React,{Component} from 'react';
import './css/style.css'
import PolisParameters from './container/PolisParameters'
import Client from './container/Client'
import InsObject from './container/InsObject'
//import GetCity,{defaultCityInfo} from './component/GetCity'
import { TAB_PARAMETERS, TAB_CLIENT, TAB_OBJECT, } from './constants'

import {ACTION_SEARCH_VEHICLE,ACTION_GET_VEHICLE} from './action'

import {defaultCityInfo} from './component/GetCity'
// TODO валидаторы  и контроль ввода и актив/пасс виджетов




class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentTab: TAB_PARAMETERS, // ?? componentDidMount ???
      paramPolis:{
        valueK1: '',
        city: defaultCityInfo(),
        action:  ACTION_SEARCH_VEHICLE, 
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


  getParam(value){
    console.log('Main.getParam',value)
    const nextState = this.state
    nextState.paramPolis = value
    this.setState(nextState)
    console.log('Main',this.state)
  }

  render(){
    return (
      <div className="main-form clearfix">
        {(this.state.currentTab === TAB_PARAMETERS)&&<PolisParameters 
            nextTab={this.actionNextTab} 
            data={this.state.paramPolis}
            getParam={this.getParam.bind(this)}
          />}
        {(this.state.currentTab === TAB_CLIENT)&&<Client nextTab={this.actionNextTab} prevTab={this.actionPrevTab} />}
        {(this.state.currentTab === TAB_OBJECT)&&<InsObject prevTab={this.actionPrevTab} />}
      </div>
    )}
  
}

export default Main;
