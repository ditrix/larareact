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
      labelBtnNext:'наступна',
      labelBtnPrev: 'попередня',
      enabledBtnPrev: '0',
      enabledBtnNext: '1',


 

    }
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this)
    this.handlePrevButtonClick = this.handlePrevButtonClick.bind(this)

    this.setAction = this.setAction.bind(this) 


    this.onHandleClientNext = this.onHandleClientNext.bind(this)
    this.onHandleClientPrev = this.onHandleClientPrev.bind(this)    

  }

  setAction(action){
    
    switch(this.state.currentTab){
      case TAB_PARAMETERS:
         this.setState({currentTab:TAB_PARAMETERS})
         break;
      case TAB_CLIENT:
          this.setState({currentTab:TAB_CLIENT})
          break;
      
      case TAB_OBJECT:
         this.setState({currentTab:TAB_OBJECT})
         break;
      default:   
      }
  }

  onHandleClientNext(client){
    this.setState({client:client})
  }
  
  onHandleClientPrev(client){
    this.setState({client:client})
  }


  handleNextButtonClick(e){
    //e.preventDefault() 
   switch(this.state.currentTab){
      case TAB_PARAMETERS:
         this.setState({currentTab:TAB_CLIENT,enabledBtnNext:'1',enabledBtnPrev:'1'})
         break;
      case TAB_CLIENT:
          this.setState({currentTab:TAB_OBJECT,enabledBtnNext:'0',enabledBtnPrev:'1'})
          break;
      }
        
   //   console.log('handleNextButtonClick event',e.currentTarget.value)
  }  

  handlePrevButtonClick(e){
    //e.preventDefault()
    switch(this.state.currentTab){
      case TAB_OBJECT:
         this.setState({currentTab:TAB_CLIENT,enabledBtnNext:'1',enabledBtnPrev:'1'})
         break;
      case TAB_CLIENT:
          this.setState({currentTab:TAB_PARAMETERS,enabledBtnNext:'1',enabledBtnPrev:'0'})
          break;
      }        
    }

  
  render(){
   // console.log(this.state)
    return (
        <div className="main-form clearfix">
                   

        {(this.state.currentTab === TAB_PARAMETERS)&&<PolisParameters/>}
        {(this.state.currentTab === TAB_CLIENT)&&<Client data={this.state.client} setAction={this.setAction} />}
        {(this.state.currentTab === TAB_OBJECT)&&<Object />}
        <footer>
            <nav  className="clearfix">
              {(this.state.enabledBtnPrev === '1')&&
              <button 
                className="btn-main-form-navigate btn-prev" 
                onClick={this.handlePrevButtonClick} >{this.state.labelBtnPrev}
              </button>
              } 
              {(this.state.enabledBtnNext === '1')&&
              <button 
                className="btn-main-form-navigate btn-next" 
                onClick={this.handleNextButtonClick} >{this.state.labelBtnNext}
              </button> 
              }
            </nav>
        </footer>
    </div>
    )}
  
}

export default Main;
