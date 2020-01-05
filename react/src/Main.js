import React,{Component} from 'react';
import './css/style.css'
import PolisParameters from './container/PolisParameters'
import Client from './container/Client'
import Object from './container/Object'

import { TAB_PARAMETERS, TAB_CLIENT, TAB_OBJECT } from './constants'


// TODO валидаторы  и контроль ввода и актив/пасс виджетов

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentTab: TAB_PARAMETERS, // ?? componentDidMount ???
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
  render(){
    return (
      <div className="main-form clearfix">
        {(this.state.currentTab === TAB_PARAMETERS)&&<PolisParameters nextTab={this.actionNextTab} />}
        {(this.state.currentTab === TAB_CLIENT)&&<Client nextTab={this.actionNextTab} prevTab={this.actionPrevTab} />}
        {(this.state.currentTab === TAB_OBJECT)&&<Object prevTab={this.actionPrevTab} />}
      </div>
    )}
  
}

export default Main;
