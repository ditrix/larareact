import React,{Component} from 'react';
import './css/style.css'
import PolisParameters from './container/PolisParameters'
import Client from './container/Client'
import Object from './container/Object'

const TAB_PARAMETERS = 'TAB_PARAMETERS'
const TAB_CLIENT = 'TAB_CLIENT'
const TAB_OBJECT = 'TAB_OBJECT' 
// TODO валидаторы  и контроль ввода и актив/пасс виджетов


// полный стейт приложения держим в main
// в локальные стейты скидываем отсюда все пропсами
// ????  обновлять этой супер-пупер-стейт ?????? таки store ;)


class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentTab: '', // ?? componentDidMount ???
      labelBtnNext:'наступна',
      labelBtnPrev: 'попередня',
      enabledBtnPrev: '0',
      enabledBtnNext: '1',
      beginPolis: '',

    }
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this)
    this.handlePrevButtonClick = this.handlePrevButtonClick.bind(this)
     
  }

  componentDidMount(){
    this.setState({currentTab:TAB_CLIENT})
  }

  handleNextButtonClick(e){
    e.preventDefault() 
    switch(this.state.currentTab){
      case TAB_PARAMETERS:
         this.setState({currentTab:TAB_CLIENT,enabledBtnNext:'1',enabledBtnPrev:'1'})
         break;
      case TAB_CLIENT:
          this.setState({currentTab:TAB_OBJECT,enabledBtnNext:'0',enabledBtnPrev:'1'})
          break;
      }        
     // console.log(this.state)
  }  

  handlePrevButtonClick(e){
    e.preventDefault()
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
    //console.log(this.state)
    return (
        <form className="main-form clearfix">
                   

        {(this.state.currentTab === TAB_PARAMETERS)&&<PolisParameters/>}
        {(this.state.currentTab === TAB_CLIENT)&&<Client />}
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
    </form>
    )}
  
}

export default Main;
