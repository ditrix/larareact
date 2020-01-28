import React, {Component} from 'react'
import {connect} from 'react-redux' 
import {dateFormatApi, checkIpn} from '../lib/functions'
import GetDatePicker from '../component/GetDatePicker'
import 'react-day-picker/lib/style.css';

//import {_I18N(MSG.INVALID_DATA_MESSAGE,this.props.lang)} from '../constants'
import {actionSaveClient} from '../action/ClientAction'
import FormHeader from './FormHeader'

import {MSG} from '../constants/messages'
import {_I18N} from '../lib/i18n'

//  TODO:  проверка тел и email
//  https://zennolab.com/discussion/threads/reguljarnoe-vyrazhenie-pod-poisk-mobilnyx-nomerov-ukrainy.46431/
// https://ru.stackoverflow.com/questions/504463/%d0%9f%d1%80%d0%be%d0%b2%d0%b5%d1%80%d0%ba%d0%b0-%d0%bd%d0%b0-%d0%b2%d0%b0%d0%bb%d0%b8%d0%b4%d0%bd%d0%be%d1%81%d1%82%d1%8c-%d1%83%d0%ba%d1%80%d0%b0%d0%b8%d0%bd%d1%81%d0%ba%d0%be%d0%b3%d0%be-%d0%bd%d0%be%d0%bc%d0%b5%d1%80%d0%b0-%d1%82%d0%b5%d0%bb%d0%b5%d1%84%d0%be%d0%bd%d0%b0-380-php
// https://developer.mozilla.org/uk/docs/Web/JavaScript/Guide/Regular_Expressions
//  4beginers   https://realadmin.ru/coding/valid-field-js.html        !!!!!!!!!!!!!!!!!!!!!!!!!!!
//  проверку проводим в стандартном валидаторе (т.е. при проїоде на next) 

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
 
        let formValid = true
        const tmpState = this.state
        if(this.state.client.lname === ''){
            console.log('no lname')
            formValid = false
            //this.setState({msgLNameValid: _I18N(MSG.INVALID_DATA_MESSAGE,this.props.lang)})
            //console.log(this.state.msgLNameValid)
            tmpState.msgLNameValid= MSG.INVALID_DATA_MESSAGE
        }
        if(this.state.client.fname === ''){
            formValid = false
            tmpState.msgFNameValid= MSG.INVALID_DATA_MESSAGE
        }
        if(this.state.client.sname === ''){
            formValid = false
            tmpState.msgSNameValid= MSG.INVALID_DATA_MESSAGE
        }
        if(this.state.client.ipn.length !== 10){
            formValid = false
            tmpState.msgIpnValid = MSG.INVALID_DATA_MESSAGE
        }
        if(this.state.client.dob === undefined){
            formValid = false
            tmpState.msgDOBValid= MSG.INVALID_DATA_MESSAGE
        }

        if(this.state.client.doc.no === ''){
            formValid = false
            tmpState.msgDocNoValid= MSG.INVALID_DATA_MESSAGE
        }

        if(this.state.client.doc.type === '0'){
            formValid = false
            tmpState.msgDocTypeValid= MSG.INVALID_DATA_MESSAGE
        }

        if(this.state.client.doc.no === ''){
            formValid = false
            tmpState.msgDocNoValid= MSG.INVALID_DATA_MESSAGE
        }
     
        if(this.state.client.addr === ''){
            formValid = false
            tmpState.msgAddrValid= MSG.INVALID_DATA_MESSAGE
        }

        if(this.state.client.phone === ''){
            formValid = false
            tmpState.msgPhoneValid= MSG.INVALID_DATA_MESSAGE
        }

        if(this.state.client.email === ''){
            formValid = false
            tmpState.msgEmailValid= MSG.INVALID_DATA_MESSAGE
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
        console.log(event.currentTarget.value.match(/^\+380\d{3}\d{2}\d{2}\d{2}$/))
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
                    <FormHeader 
                        title={_I18N(MSG.CLIENT,this.props.lang)}

                        lang={this.props.lang} 
                    />
                </header>
            <form className="tab-form">
                
                <main>
                <div className="form-input-item">
                    {/*<label className="block-label">Прізвище:</label>*/}
                    <input 
                        placeholder={_I18N(MSG.LAST_NAME,this.props.lang)}
                        value={this.state.client.lname} 
                        onChange={this.handleLNameChanged.bind(this)} 
                        onKeyDown={this.filterEnterKeyCode}
                        type="text"
                    />
                     <span className="input-error-message">{_I18N(this.state.msgLNameValid,this.props.lang)}</span>
                </div>
                <div className="form-input-item">
                    {/*<label className="block-label">Ім'я:</label>*/}
                    <input 
                        placeholder={_I18N(MSG.FIRST_NAME,this.props.lang)} 
                        value={this.state.client.fname} 
                        onChange={this.handleFNameChanged.bind(this)} 
                        onKeyDown={this.filterEnterKeyCode}
                    />
                    <span className="input-error-message">{_I18N(this.state.msgFNameValid,this.props.lang)}</span>
                </div>                
                <div className="form-input-item">
                    {/* <label className="block-label">По батькові:</label> */}
                    <input 
                        placeholder={_I18N(MSG.SECOND_NAME,this.props.lang)} 
                        value={this.state.client.sname} 
                        onChange={this.handleSNameChanged.bind(this)} 
                        onKeyDown={this.filterEnterKeyCode}
                    />
                    <span className="input-error-message">{_I18N(this.state.msgSNameValid,this.props.lang)}</span>
                </div>                

                <div className="form-input-row">
                    <div className="form-input-item input-inn">
                        {/* <label className="block-label">Індивідуальний податковий номер (ІПН):</label> */}
                        <input 
                            placeholder={_I18N(MSG.INN,this.props.lang)} 
                            value={this.state.client.ipn} 
                            onChange={this.handleIPNChanged.bind(this)} 
                            onKeyDown={this.filterEnterKeyCode}
                        />                        
                        <span className="input-error-message">{_I18N(this.state.msgIpnValid,this.props.lang)}</span>
                    </div>
                    <div className="form-input-item input-dob">
                        <GetDatePicker 
                            lang ='ru' 
                            label = {_I18N(MSG.BIRTHDAY,this.props.lang)} 
                            getDate={this.handleDOBChanged.bind(this)}
                            dateValue={this.state.client.dob}
                        />                
                        <span className="input-error-message">{_I18N(this.state.msgDOBValid,this.props.lang)}</span>
                    </div>                
                </div>
                
                <div className="client-doc-row">
                    <div className="form-input-row">
                        <div className="select-widget `item-doc-type`">
                            {/* <label className="block-label">документ:</label> */}
                            <div className="select-input">
                                <select onChange={this.handleDocTypeChanged.bind(this)} defaultValue={this.state.client.doc.type}>
                                    <option value='0'>{_I18N(MSG.DOCTITLE,this.props.lang)}</option>
                                    {(this.props.discount === "0")&&<option value='1'>{_I18N(MSG.DOC_TYPE_1,this.props.lang)}</option>}
                                    {(this.props.discount === "0")&&<option value='2'>{_I18N(MSG.DOC_TYPE_2,this.props.lang)}</option>}
                                    {(this.props.discount === "0")&&<option value='3'>{_I18N(MSG.DOC_TYPE_3,this.props.lang)}</option>}
                                    {(this.props.discount === "0")&&<option value='4'>{_I18N(MSG.DOC_TYPE_4,this.props.lang)}</option>}
                                   
                                    {(this.props.discount === "2")&&<option value='6'>{_I18N(MSG.DOC_TYPE_6,this.props.lang)}</option>}
                                    {(this.props.discount === "3")&&<option value='7'>{_I18N(MSG.DOC_TYPE_7,this.props.lang)}</option>}
                                    {(this.props.discount === "1")&&<option value='8'>{_I18N(MSG.DOC_TYPE_8,this.props.lang)}</option>}
                                    {(this.props.discount === "4")&&<option value='9'>{_I18N(MSG.DOC_TYPE_9,this.props.lang)}</option>}
                                </select>  
                            </div>
                            <span className="input-error-message">{_I18N(this.state.msgDocTypeValid,this.props.lang)}</span>
                        </div>  
                    
                    
                        <div className="item-doc-seria">
                            {/* <label className="block-label">Серія:</label> */}
                            <input 
                                placeholder={_I18N(MSG.DOC_SERIA,this.props.lang)} 
                                value={this.state.client.doc.seria} 
                                onChange={this.handleDocSeriaChanged.bind(this)} 

                                />
                            <span className="input-error-message">{_I18N(this.state.msgDocSeriaValid,this.props.lang)}</span>
                        </div>       
                        <div className="item-doc-no">
                            {/* <label className="block-label">Номер:</label> */}
                            <input
                                placeholder={_I18N(MSG.DOC_NUMBER,this.props.lang)} 
                                value={this.state.client.doc.no} 
                                onChange={this.handleDocNoChanged.bind(this)} 
                            />
                            <span className="input-error-message">{_I18N(this.state.msgDocNoValid,this.props.lang)}</span>
                        </div> 
                    </div> 
                    <div className="form-input-row">     
                           {/* <label className="block-label">Ким виданий:</label> */}
                           <div className="item-doc-source">
                            <input
                                placeholder={_I18N(MSG.DOC_SOURCE,this.props.lang)}  
                                value={this.state.client.doc.source} 
                                onChange={this.handleDocSourceChanged.bind(this)}                                 
                            />
                            <span className="input-error-message">{_I18N(this.state.msgDocSourceValid,this.props.lang)}</span>
                        </div>                     
                        <div className="item-date-get">
                            <GetDatePicker 
                                lang='ua' 
                                label={_I18N(MSG.DOC_DATE_GET,this.props.lang)} 
                                dateValue={dateGetDoc}
                                getDate={this.handleDtGetChanged.bind(this)}
                            />
                            <span className="input-error-message">{_I18N(this.state.msgDocDtGetValid,this.props.lang)}</span>
                        </div>
                        
 
                    </div>             
                </div>    
               
                <div className="form-input-item">
                    {/* <label className="block-label">Адреса:</label> */}
                    <input 
                        placeholder={_I18N(MSG.ADDRESS,this.props.lang)} 
                        value={this.state.client.addr} 
                        onChange={this.handleAddrChanged.bind(this)} 

                    />
                    <span className="input-error-message">{_I18N(this.state.msgAddrValid,this.props.lang)}</span>
                </div>
                <div className="form-input-item">
                    <label className="block-label">{_I18N(MSG.PHONE,this.props.lang)}</label>
                    <input type="tel" placeholder={'+38'}  value={this.state.client.phone} onChange={this.handlePhoneChanged.bind(this)} />
                    <span className="input-error-message">{_I18N(this.state.msgPhoneValid,this.props.lang)}</span>
                </div>                
                <div className="form-input-item">
                    {/* <label className="block-label">Email:</label> */}
                    <input 
                        value={this.state.client.email} 
                        onChange={this.handleEmailChanged.bind(this)} 
                        placeholder={_I18N(MSG.EMAIL,this.props.lang)} 
                    />
                    <span className="input-error-message">{_I18N(this.state.msgEmailValid,this.props.lang)}</span>
                </div>                
                </main>
                   
            </form>
            <footer>
            <nav  className="clearfix  form-nav">
            
              <button 
                className="btn-main-form-navigate btn-prev" 
                onClick={this.handleButtonPrevClicked.bind(this)} >
                    {_I18N(MSG.PREV,this.props.lang)}
              </button>
              
              <button 
                className="btn-main-form-navigate btn-next" 
                onClick={this.handleButtonNextClicked.bind(this)} >
                    {_I18N(MSG.NEXT,this.props.lang)}
                </button> 
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
        discount: store.parameters.valueDiscount,
        lang: store.appstate.lang,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveClient: (client) => dispatch(actionSaveClient(client)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Client)
