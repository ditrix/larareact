import React, {Component} from 'react' 
import {dateFormatApi, checkIpn} from '../lib/functions'
import GetDatePicker from '../component/GetDatePicker'
import 'react-day-picker/lib/style.css';
import {PaySumm} from '../component/PaySumm'
import {INVALID_DATA_MMESSAGE_UA} from '../constants'



// ввод даних про страхувальника
class Client extends Component {
    constructor(props){
        super(props)

        this.state={
            client:{ 
                idResident: undefined, // вычисляется по типу документа
                lname: '',  // validate required, size & characters 
                sname: '',  // validate required, size & characters
                fname: '',  // validate required, size & characters
                ipn: '',    // validate required, size & characters
                dob: undefined,
                
                doc:{
                  type:'1',   // если   id-паспорт громодянина України  
                             // seria не спрашиваем для остальных - есть
                  seria: '',
                  no:'',
                  dtget: undefined,
                  source: '',                  
                },
                addr: '',
                phone: '',
                email: '',
            },
            msgLNameValid: '',
            msgFNameValid: '',
            msgSNameValid: '',
            msgIpnValid: '',
            msgDOBValid: '',
            msgDocTypeValid: '',
            msgDocSeriaValid: '',
            msgDocNoValid: '',
            msgDocDtGetValid: '',
            msgDocSourceValid: '',
            msgAddrValid: '',
            msgPhoneValid: '',
            msgEmailValid:'',
            formValid:false,
        }
        this.filterEnterKeyCode = this.filterEnterKeyCode.bind(this)
        this.validateData = this.validateData.bind(this)
        this.handleButtonNextClicked = this.handleButtonNextClicked.bind(this)
    }





    validateData(){
        let formValid = true
        if(this.state.client.lname === ''){
            formValid = false
            this.setState({msgLNameValid: INVALID_DATA_MMESSAGE_UA})
        }
        if(this.state.client.fname === ''){
            formValid = false
            this.setState({msgFNameValid: INVALID_DATA_MMESSAGE_UA})
        }
        if(this.state.client.sname === ''){
            formValid = false
            this.setState({msgSNameValid: INVALID_DATA_MMESSAGE_UA})
        }
        if(this.state.client.ipn.length !== 10){
            formValid = false
            this.setState({msgIpnValid: INVALID_DATA_MMESSAGE_UA})
        }
        if(this.state.client.dob === undefined){
            formValid = false
            this.setState({msgDOBValid: INVALID_DATA_MMESSAGE_UA})
        }

        // если   id-паспорт громодянина України  SERIA спрашиваем
        if(this.state.client.doc.type === ''){
            formValid = false
            this.setState({msgDocTypeValid: INVALID_DATA_MMESSAGE_UA})
        }
        
        if(this.state.client.doc.seria === ''){
            formValid = false
            this.setState({msgDocSeriaValid: INVALID_DATA_MMESSAGE_UA})
        }
        if(this.state.client.doc.no === ''){
            formValid = false
            this.setState({msgDocNoValid: INVALID_DATA_MMESSAGE_UA})
        }
        if(this.state.client.doc.dtget === undefined){
            formValid = false
            this.setState({msgDocDtGetValid: INVALID_DATA_MMESSAGE_UA})
        }
        if(this.state.client.doc.source === ''){
            formValid = false
            this.setState({msgDocSourceValid: INVALID_DATA_MMESSAGE_UA})
        }

        if(this.state.client.addr === ''){
            formValid = false
            this.setState({msgAddrValid: INVALID_DATA_MMESSAGE_UA})
        }

        if(this.state.client.phone === ''){
            formValid = false
            this.setState({msgPhoneValid: INVALID_DATA_MMESSAGE_UA})
        }

        if(this.state.client.email === ''){
            formValid = false
            this.setState({msgEmailValid: INVALID_DATA_MMESSAGE_UA})
        }


        this.setState({formValid:formValid})
        return formValid
    }


    handleButtonNextClicked(){
        this.validateData()
        if(this.state.formValid){ 
            this.props.nextTab()
        }
    }


    filterEnterKeyCode(e){
        if(e.keyCode === 13){
             e.preventDefault()
             return
        }        
       return
    }



    handleLNameChanged = (event) => { 
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
                    <div className="title"><h3>Страхувальник</h3></div>
                    <div className="result">{PaySumm(100500,'ru')}</div>
                </header>
            <form className="client-form">
                
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
 `                       <div className="select-widget `item-doc-type`">
                            {/* <label className="block-label">документ:</label> */}
                            <div className="select-input">
                                <select onChange={this.handleDocTypeChanged.bind(this)}>
                                    <option value='12'>документ:</option>
                                    
                                    <option value='12'>Водійське посвідчення</option>
                                            
                                    <option value='12'>паспорт</option>
                                    <option value='10'>id-паспорт громодянина України</option>
                                    <option value='9'>Паспорт іниземного громодянина</option>
                                    <option value='9'>Посвідчення водія іноземного громодянина</option>

                                    <option value='9'>Посвідчення інваліда</option>
                                    <option value='9'>Уорнобильске посвідчення</option>
                                    <option value='9'>Учасника війни інваліда</option>
                                    <option value='9'>Пенсійне посвідчення</option>
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
                onClick={this.props.prevTab} >попередня
                    </button>
              <button 
                className="btn-main-form-navigate btn-next" 
                onClick={this.handleButtonNextClicked} >наступна</button> 
            </nav>
        </footer>
            
        </div>
            
        )
    }
}

export default Client