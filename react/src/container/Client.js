import React, {Component} from 'react'
import {connect} from 'react-redux' 
import {dateFormatApi, checkIpn} from '../lib/functions'
import GetDatePicker from '../component/GetDatePicker'
import 'react-day-picker/lib/style.css';

import {INVALID_DATA_MMESSAGE_UA} from '../constants'
import {actionSaveClient} from '../action/ClientAction'
import FormHeader from './FormHeader'


// ввод даних про страхувальника
class Client extends Component {
    constructor(props){
        super(props)
        this.state = this.props.client
       
        this.filterEnterKeyCode = this.filterEnterKeyCode.bind(this)
        this.validateData = this.validateData.bind(this)
        this.clearMessages = this.clearMessages.bind(this)
    }

    clearMessages(){
        
        const tmpState = this.state
        tmpState.msgLNameValid = 
        tmpState.msgFNameValid = 
        tmpState.msgSNameValid = 
        tmpState.msgIpnValid = 
        tmpState.msgDocTypeValid = 
        tmpState.msgDOBValid = 
        tmpState.msgDocSeriaValid = 
        tmpState.msgDocNoValid = 
        tmpState.msgDocDtGetValid = 
        tmpState.msgDocSourceValid = 
        tmpState.msgAddrValid = 
        tmpState.msgEmailValid = ''

        this.setState(tmpState)
                
    }


    validateData(){
 //       console.log('validateData()')
        let formValid = true
        const tmpState = this.state
        if(this.state.client.lname === ''){
            console.log('no lname')
            formValid = false
            //this.setState({msgLNameValid: INVALID_DATA_MMESSAGE_UA})
            //console.log(this.state.msgLNameValid)
            tmpState.msgLNameValid= INVALID_DATA_MMESSAGE_UA
        }
        if(this.state.client.fname === ''){
            formValid = false
            tmpState.msgFNameValid= INVALID_DATA_MMESSAGE_UA
        }
        if(this.state.client.sname === ''){
            formValid = false
            tmpState.msgSNameValid= INVALID_DATA_MMESSAGE_UA
        }
        if(this.state.client.ipn.length !== 10){
            formValid = false
            tmpState.msgIpnValid = INVALID_DATA_MMESSAGE_UA
        }
        if(this.state.client.dob === undefined){
            formValid = false
            tmpState.msgDOBValid= INVALID_DATA_MMESSAGE_UA
        }

        if(this.state.client.doc.no === ''){
            formValid = false
            tmpState.msgDocNoValid= INVALID_DATA_MMESSAGE_UA
        }

        if(this.state.client.doc.type === '0'){
            formValid = false
            tmpState.msgDocTypeValid= INVALID_DATA_MMESSAGE_UA
        }

        if(this.state.client.doc.no === ''){
            formValid = false
            tmpState.msgDocNoValid= INVALID_DATA_MMESSAGE_UA
        }
     
        if(this.state.client.addr === ''){
            formValid = false
            tmpState.msgAddrValid= INVALID_DATA_MMESSAGE_UA
        }

        if(this.state.client.phone === ''){
            formValid = false
            tmpState.msgPhoneValid= INVALID_DATA_MMESSAGE_UA
        }

        if(this.state.client.email === ''){
            formValid = false
            tmpState.msgEmailValid= INVALID_DATA_MMESSAGE_UA
        }
     //   const tmpState = this.state;
        tmpState.formValid = formValid
        this.setState(tmpState)
        return formValid
    }


    handleButtonNextClicked(){
    //    console.log('handleButtonNextClicked 1')
        this.validateData()
        this.props.saveClient()
        if(this.state.formValid){ 
//            console.log('handleButtonNextClicked 2')
        
         this.props.nextTab()
        }
    }

    handleButtonPrevClicked(){
        this.clearMessages()
        this.props.saveClient()
        this.props.prevTab()
    }

    filterEnterKeyCode(e){
        if(e.keyCode === 13){
             e.preventDefault()
             return
        }     
        return 
    }



    handleLNameChanged = (event) => { 
//        console.log('handleLNameChanged()')
        event.preventDefault()
        const client = this.state.client; 
        client.lname = event.currentTarget.value
        this.setState({client:client, msgLNameValid:''})
    }
    handleSNameChanged = (event) => { 
        const client = this.state.client; 
        client.sname = event.currentTarget.value
        this.setState({client:client, msgSNameValid:''})
    }
    handleFNameChanged = (event) => { 
        const client = this.state.client; 
        client.fname = event.currentTarget.value
        this.setState({client:client, msgFNameValid:''})
    }
    
    handleIPNChanged = (event) => { 
        if(checkIpn(event.currentTarget.value))
        {    
            const client = this.state.client;
            client.ipn = event.currentTarget.value
            this.setState({client:client})
            this.GetDobFromIpn()
        
        } 
        this.setState({msgIpnValid:''})
    }
  
    handleDOBChanged = (selectedDay, modifiers, dayPickerInput) => { 
        //const input = dayPickerInput.getInput()    
        const client = this.state.client; 
        client.dob = dateFormatApi(selectedDay)
        this.setState({client:client, msgDOBValid:''})
        console.log(this.state.client.dob)
    }

     GetDobFromIpn(){
        const client = this.state.client
        if(this.state.client.ipn.length >= 10){
            const inndate = 1*this.state.client.ipn.slice(0,5)      
            var D = new Date(1900,0,0);
            D.setDate(D.getDate() + inndate); 
            const dobstr = D.toLocaleDateString('uk').slice(6,10)+'-'+ D.toLocaleDateString('uk').slice(3,5)+ '-'+D.toLocaleDateString('uk').slice(0,2)
            client.dob = dobstr
        }
        this.setState({client:client, msgDOBValid:''})
    }


    handleDocTypeChanged = (event) => { 
        const client = this.state.client; 
        client.doc.type = event.currentTarget.value
        this.setState({client:client, msgDocTypeValid:''})
    }
    
    handleDocSeriaChanged = (event) => { 
        const client = this.state.client
        client.doc.seria = event.currentTarget.value
        this.setState({client:client,msgDocSeriaValid:''})
    }
   
    handleDocNoChanged = (event) => { 
        const client = this.state.client; 
        client.doc.no = event.currentTarget.value
        this.setState({client:client,msgDocNoValid:''})
    }

    handleDtGetChanged = (selectedDay, modifiers, dayPickerInput) => { 
        const client = this.state.client; 
        client.doc.dtget = dateFormatApi(selectedDay)
        this.setState({client:client, msgDocDtGetValid:''})
    }
    
    handleDocSourceChanged = (event) => { 
        const client = this.state.client; 
        client.doc.source = event.currentTarget.value
        this.setState({client:client, msgDocSourceValid:''})
    }

    handleAddrChanged = (event) => { 
        const client = this.state.client; 
        client.addr = event.currentTarget.value
        this.setState({client:client, msgAddrValid:''})
    }
    
    handlePhoneChanged = (event) => { 
        const client = this.state.client;
        client.phone = event.currentTarget.value 
        this.setState({client:client, msgPhoneValid:''})
    }
    
    handleEmailChanged = (event) => { 
        const client = this.state.client
        client.email = event.currentTarget.value
        this.setState({client:client, msgEmailValid:''})
    }

    nextTab(value){
        //()=>{this.props.nextTab}
    }
    
    
    render(){
    
        const dateGetDoc = (this.state.client.doc.dtget === undefined)?new Date():this.state.client.doc.dtget
        return(
            <div className="make-polis-dialog">
                <header>
                    <FormHeader title="Страхувальник" />
                </header>
            <form className="tab-form">
                
                <main>
                <div className="form-input-item">
                    {/*<label className="block-label">Прізвище:</label>*/}
                    <input 
                        placeholder='прізвище:'
                        value={this.state.client.lname} 
                        onChange={this.handleLNameChanged.bind(this)} 
                        onKeyDown={this.filterEnterKeyCode}
                        type="text"
                    />
                     <span className="input-error-message">{this.state.msgLNameValid}</span>
                </div>
                <div className="form-input-item">
                    {/*<label className="block-label">Ім'я:</label>*/}
                    <input 
                        placeholder='ім`я' 
                        value={this.state.client.fname} 
                        onChange={this.handleFNameChanged.bind(this)} 
                        onKeyDown={this.filterEnterKeyCode}
                    />
                    <span className="input-error-message">{this.state.msgFNameValid}</span>
                </div>                
                <div className="form-input-item">
                    {/* <label className="block-label">По батькові:</label> */}
                    <input 
                        placeholder='По батькові:' 
                        value={this.state.client.sname} 
                        onChange={this.handleSNameChanged.bind(this)} 
                        onKeyDown={this.filterEnterKeyCode}
                    />
                    <span className="input-error-message">{this.state.msgSNameValid}</span>
                </div>                

                <div className="form-input-row">
                    <div className="form-input-item input-inn">
                        {/* <label className="block-label">Індивідуальний податковий номер (ІПН):</label> */}
                        <input 
                            placeholder='Індивідуальний податковий номер (ІПН):'
                            value={this.state.client.ipn} 
                            onChange={this.handleIPNChanged.bind(this)} 
                            onKeyDown={this.filterEnterKeyCode}
                        />                        
                        <span className="input-error-message">{this.state.msgIpnValid}</span>
                    </div>
                    <div className="form-input-item input-dob">
                        <GetDatePicker 
                            lang ='ru' 
                            label = 'дата рождения'
                            getDate={this.handleDOBChanged.bind(this)}
                            dateValue={this.state.client.dob}
                        />                
                        <span className="input-error-message">{this.state.msgDOBValid}</span>
                    </div>                
                </div>
                
                <div className="client-doc-row">
                    <div className="form-input-row">
                        <div className="select-widget `item-doc-type`">
                            {/* <label className="block-label">документ:</label> */}
                            <div className="select-input">
                                <select onChange={this.handleDocTypeChanged.bind(this)} defaultValue={this.state.client.doc.type}>
                                    <option value='0'>документ:</option>
                                    {(this.props.discount === "0")&&<option value='1'>Водійське посвідчення</option>}
                                    {(this.props.discount === "0")&&<option value='2'>паспорт</option>}
                                    {(this.props.discount === "0")&&<option value='3'>id-паспорт громaдянина України</option>}
                                    {(this.props.discount === "0")&&<option value='4'>Паспорт іноземного громaдянина</option>}
                                   
                                    {(this.props.discount === "2")&&<option value='6'>Посвідчення інваліда</option>}
                                    {(this.props.discount === "3")&&<option value='7'>Чорнобильске посвідчення</option>}
                                    {(this.props.discount === "1")&&<option value='8'>Посвідчення учасника війни</option>}
                                    {(this.props.discount === "4")&& <option value='9'>Пенсійне посвідчення</option>}
                                </select>  
                            </div>
                            <span className="input-error-message">{this.state.msgDocTypeValid}</span>
                        </div>  
                    
                    
                        <div className="item-doc-seria">
                            {/* <label className="block-label">Серія:</label> */}
                            <input 
                                placeholder='Серія:'
                                value={this.state.client.doc.seria} 
                                onChange={this.handleDocSeriaChanged.bind(this)} 

                                />
                            <span className="input-error-message">{this.state.msgDocSeriaValid}</span>
                        </div>       
                        <div className="item-doc-no">
                            {/* <label className="block-label">Номер:</label> */}
                            <input
                                placeholder='Номер:' 
                                value={this.state.client.doc.no} 
                                onChange={this.handleDocNoChanged.bind(this)} 
                            />
                            <span className="input-error-message">{this.state.msgDocNoValid}</span>
                        </div> 
                    </div> 
                    <div className="form-input-row">     
                           {/* <label className="block-label">Ким виданий:</label> */}
                           <div className="item-doc-source">
                            <input
                                placeholder='Ким виданий'  
                                value={this.state.client.doc.source} 
                                onChange={this.handleDocSourceChanged.bind(this)}                                 
                            />
                            <span className="input-error-message">{this.state.msgDocSourceValid}</span>
                        </div>                     
                        <div className="item-date-get">
                            <GetDatePicker 
                                lang='ua' 
                                label='Дата видачі'
                                dateValue={dateGetDoc}
                                getDate={this.handleDtGetChanged.bind(this)}
                            />
                            <span className="input-error-message">{this.state.msgDocDtGetValid}</span>
                        </div>
                        
 
                    </div>             
                </div>    
               
                <div className="form-input-item">
                    {/* <label className="block-label">Адреса:</label> */}
                    <input 
                        placeholder='Адреса:'
                        value={this.state.client.addr} 
                        onChange={this.handleAddrChanged.bind(this)} 

                    />
                    <span className="input-error-message">{this.state.msgAddrValid}</span>
                </div>
                <div className="form-input-item">
                    <label className="block-label">Телефон:</label>
                    <input placeholder={'+38'}  value={this.state.client.phone} onChange={this.handlePhoneChanged.bind(this)} />
                    <span className="input-error-message">{this.state.msgPhoneValid}</span>
                </div>                
                <div className="form-input-item">
                    {/* <label className="block-label">Email:</label> */}
                    <input 
                        value={this.state.client.email} 
                        onChange={this.handleEmailChanged.bind(this)} 
                        placeholder='email:'
                    />
                    <span className="input-error-message">{this.state.msgEmailValid}</span>
                </div>                
                </main>
                   
            </form>
            <footer>
            <nav  className="clearfix">
            
              <button 
                className="btn-main-form-navigate btn-prev" 
                onClick={this.handleButtonPrevClicked.bind(this)} >попередня
              </button>
              
              <button 
                className="btn-main-form-navigate btn-next" 
                onClick={this.handleButtonNextClicked.bind(this)} >наступна</button> 
            </nav>
        </footer>
            
        </div>
            
        )
    }
}

//export default Client
const mapStateToProps = store => {
    return {
        client: store.client,
        discount: store.parameters.valueDiscount
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveClient: (client) => dispatch(actionSaveClient(client)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Client)
