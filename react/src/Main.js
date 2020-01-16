import React,{Component} from 'react';
import './css/style.css'

import PolisParameters from './container/PolisParameters'
import Client from './container/Client'
import InsuranceObject from './container/InsuranceObject'
import CommitPage from './container/CommitPage'

import { TAB_PARAMETERS, TAB_CLIENT, TAB_OBJECT, TAB_COMMIT } from './constants'

//import {ACTION_SEARCH_VEHICLE,ACTION_GET_VEHICLE} from './action'


class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentTab: TAB_OBJECT, 
      
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
      case TAB_OBJECT:
          this.setState({currentTab:TAB_COMMIT}) 
          break;   
      default:
          return;    
      }
  }  

  actionPrevTab(){
    switch(this.state.currentTab){
      case TAB_OBJECT:
         this.setState({currentTab:TAB_CLIENT})
         break
      case TAB_CLIENT:
          this.setState({currentTab:TAB_PARAMETERS})
          break
      case TAB_COMMIT:
          this.setState({currentTab:TAB_OBJECT})   
          break
      default:
          return;    
     }        
  }


  // getParam(value){
  //   const nextState = this.state
  //   nextState.paramPolis = value
  //   this.setState(nextState)
  // }

  render(){
    return (
      <div className="main-form clearfix">
        {(this.state.currentTab === TAB_COMMIT)&&<CommitPage  nextTab={this.actionNextTab} prevTab={this.actionPrevTab} />}
        {(this.state.currentTab === TAB_PARAMETERS)&&<PolisParameters nextTab={this.actionNextTab} />}
        {(this.state.currentTab === TAB_CLIENT)&&<Client nextTab={this.actionNextTab} prevTab={this.actionPrevTab} />}
        {(this.state.currentTab === TAB_OBJECT)&&<InsuranceObject prevTab={this.actionPrevTab} nextTab={this.actionNextTab} />}
      </div>
    )}
  
}

export default Main;
