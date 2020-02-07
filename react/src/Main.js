import React,{Component} from 'react';
import './css/style.css'

import PolisParameters from './container/PolisParameters'
import Client from './container/Client'
import InsuranceObject from './container/InsuranceObject'
import ReservePage from './container/ReservePage'
import FormHeader from './container/FormHeader'
import ResultBlock from './container/ResultBlock'

import {_I18N} from './lib/i18n'
import {MSG} from './constants/messages' 

import { TAB_PARAMETERS, TAB_CLIENT, TAB_OBJECT, TAB_RESERVE } from './constants'



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
          this.setState({currentTab:TAB_RESERVE}) 
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
      case TAB_RESERVE:
          this.setState({currentTab:TAB_OBJECT})   
          break
      default:
          return;    
     }        
  }

  render(){
    return (
      <div className="container debug">

        <div className="row polis-container">
        
          <div className="col-xl-1"></div>

          <div className="col-xl-10">
            <div className="row">
                <div className="col-md-5 col-xl-4 debug order-md-2 col-sm-12">
                  <ResultBlock lang={this.props.lang}/>
                </div>
                <div className="col-md-7  col-xl-8 debug order-md-1 col-sm-12">
                  <FormHeader title={_I18N(MSG.TITLE_OBJECT_SECION,this.props.lang)} lang={this.props.lang} />
                  {(this.state.currentTab === TAB_PARAMETERS)&&<PolisParameters nextTab={this.actionNextTab} />}  
                  {(this.state.currentTab === TAB_CLIENT)&&<Client nextTab={this.actionNextTab} prevTab={this.actionPrevTab} />}
                  {(this.state.currentTab === TAB_OBJECT)&&<InsuranceObject prevTab={this.actionPrevTab} nextTab={this.actionNextTab} />}
                  {(this.state.currentTab === TAB_RESERVE)&&<ReservePage  nextTab={this.actionNextTab} prevTab={this.actionPrevTab} />}
                </div>  
            </div>
          </div>  

            <div className="col-xl-1"></div>

        </div> 
      </div> 
    )}
  
}

export default Main;
