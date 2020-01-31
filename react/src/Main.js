import React,{Component} from 'react';
import './css/style.css'

import PolisParameters from './container/PolisParameters'
import Client from './container/Client'
import InsuranceObject from './container/InsuranceObject'
import CommitPage from './container/CommitPage'
import FormHeader from './container/FormHeader'
import ResultBlock from './container/ResultBlock'

import {_I18N} from './lib/i18n'
import {MSG} from './constants/messages' 

import { TAB_PARAMETERS, TAB_CLIENT, TAB_OBJECT, TAB_COMMIT } from './constants'



class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentTab: TAB_PARAMETERS, 
      
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

  render(){
    return (
      <div className="main-container">

        <div className="make-polis-container">
        <div className="main-form">
          <FormHeader title={_I18N(MSG.TITLE_OBJECT_SECION,this.props.lang)} lang={this.props.lang} />   
          {(this.state.currentTab === TAB_COMMIT)&&<CommitPage  nextTab={this.actionNextTab} prevTab={this.actionPrevTab} />}
          {(this.state.currentTab === TAB_PARAMETERS)&&<PolisParameters nextTab={this.actionNextTab} />}
          {(this.state.currentTab === TAB_CLIENT)&&<Client nextTab={this.actionNextTab} prevTab={this.actionPrevTab} />}
          {(this.state.currentTab === TAB_OBJECT)&&<InsuranceObject prevTab={this.actionPrevTab} nextTab={this.actionNextTab} />}
        </div>
        <div className="result-block-section">
          <ResultBlock lang={this.props.lang}/>
        </div>
        </div>
      </div>
    )}
  
}

export default Main;
