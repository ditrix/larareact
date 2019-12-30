import React, {Component} from 'react' 

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';


import MomentLocaleUtils, {
    formatDate,
    parseDate,
  } from 'react-day-picker/moment';
  
  import 'moment/locale/ru.js';
  import 'moment/locale/ua';
  

// ввод даних про страхувальника
class Client extends Component {
    constructor(props){
        super(props)

        this.state={
            client:{
                lname: '',
                sname: 'sname',
                fname: 'fname',
                ipn: '1234567890',
                dob: '2011-12-30',
                
                doc:{
                  type:'1',   // если   id-паспорт громодянина України  
                             // seria не спрашиваем для остальных - есть
                  seria: 'AA',
                  no:'123',
                  dtget: '22.22.2222',
                  source: 'source',                  
                },
                addr: 'addr',
                phone: '+38066064633',
                email: 'mail@mail.com',
            },
        }
        this.filterEnterKeyCode = this.filterEnterKeyCode.bind(this)
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
        this.setState({client:client})
    }
    handleSNameChanged = (event) => { 
        const client = this.state.client; 
        client.sname = event.currentTarget.value
        this.setState({client:client})
    }
    handleFNameChanged = (event) => { 
        const client = this.state.client; 
        client.fname = event.currentTarget.value
        this.setState({client:client})
    }
    
    handleIPNChanged = (event) => { 
        const client = this.state.client; 
        client.ipn = event.currentTarget.value
        this.setState({client:client})
    }
  
    handleDOBChanged = (value) => { 
        //console.log('dob changed: ',event)
        const client = this.state.client; 
        client.dob = value
        this.setState({client:client})
        console.log('dob value', value)
        console.log('dob formated value',formatDate(value, 'L', 'it'))
    }
    
    handleDocTypeChanged = (event) => { 
    
        console.log(event)
     //   const client = this.state.client; 
     //   client.doc.type = event.currentTarget.value
     //   this.setState({client:client})
    }
    handleDocSeriaChanged = (event) => { const client = this.state.client; this.setState({client:client})}
    handleDocNoChanged = (event) => { const client = this.state.client; this.setState({client:client})}
    handleDtGetChanged = (event) => { const client = this.state.client; this.setState({client:client})}
    handleDocSourceChanged = (event) => { const client = this.state.client; this.setState({client:client})}

    handleAddrChanged = (event) => { const client = this.state.client; this.setState({client:client})}
    handlePhoneChanged = (event) => { const client = this.state.client; this.setState({client:client})}
    handleEmailChanged = (event) => { const client = this.state.client; this.setState({client:client})}


    render(){
        //const dateDob  = 
        return(
            
            <div className="client-form">
                <header><h3>Страхувальник</h3></header>
                <main>
                <div className="form-input-item">
                    <label className="block-label">Прізвище:</label>
                    <input 
                        value={this.state.client.lname} 
                        onChange={this.handleLNameChanged.bind(this)} 
                        onKeyDown={this.filterEnterKeyCode}
                        type="text"
                    />
                </div>
                <div className="form-input-item">
                    <label className="block-label">Ім'я:</label>
                    <input 
                        value={this.state.client.fname} 
                        onChange={this.handleFNameChanged.bind(this)} 
                        onKeyDown={this.filterEnterKeyCode}
                    />
                </div>                
                <div className="form-input-item">
                    <label className="block-label">По батькові:</label>
                    <input 
                        value={this.state.client.sname} 
                        onChange={this.handleSNameChanged.bind(this)} 
                        onKeyDown={this.filterEnterKeyCode}
                    />
                </div>                

                <div className="form-input-row">
                    <div className="form-input-item input-inn">
                        <label className="block-label">Індивідуальний податковий номер (ІПН):</label>
                        <input 
                            value={this.state.client.ipn} 
                            onChange={this.handleIPNChanged.bind(this)} 
                            onKeyDown={this.filterEnterKeyCode}
                        />
                    </div>                
                    
                    <div className="form-input-item input-dob">
                        <label className="block-label">Дата народження:</label>
                        <DayPickerInput
                            formatDate={formatDate}
                            parseDate={parseDate}
                            format="L"
                            placeholder={`${formatDate(this.state.client.dob, 'L', 'ua')}`}
                            dayPickerProps={{
                            locale: 'ua',
                            localeUtils: MomentLocaleUtils,
                            }}
                            onDayChange={this.handleDOBChanged.bind(this)}
                        />
                    </div>                
                </div>
                <div className="form-input-row">
                <div>
                <label>документ:</label>
                <select onChange={this.handleDocTypeChanged.bind(this)}>
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
                </div>
                <div className="form-input-row">
                <div className="form-input-item doc-seria">
                        <label className="block-label">Серія:</label>
                        <input value={this.state.client.doc.seria} onChange={this.handleDocSeriaChanged.bind(this)} />
                    </div>       
                    <div className="form-input-item doc-no">
                        <label className="block-label">Номер:</label>
                        <input value={this.state.client.doc.no} onChange={this.handleDocNoChanged.bind(this)} />
                    </div>       
                </div>    
              
                <div className="form-input-item">
                   
                    <label className="block-label">Дата видачі:</label>
                        <DayPickerInput
                            formatDate={formatDate}
                            parseDate={parseDate}
                            format="L"
                            placeholder={`${formatDate(new Date(), 'L', 'ua')}`}
                            dayPickerProps={{
                            locale: 'ua',
                            localeUtils: MomentLocaleUtils,
                            }}
                            onDayChange={this.handleDtGetChanged.bind(this)}
                        />
                </div>
                <div className="form-input-item">
                    <label className="block-label">Ким виданий:</label>
                    <input value={this.state.client.doc.source} onChange={this.handleDocSourceChanged.bind(this)} />
                </div>              

{/**/}
                <div className="form-input-item">
                    <label className="block-label">Адреса:</label>
                    <input value={this.state.client.addr} onChange={this.handleAddrChanged.bind(this)} />
                </div>
                <div className="form-input-item">
                    <label className="block-label">Телефон:</label>
                    <input value={this.state.client.phone} onChange={this.handlePhoneChanged.bind(this)} />
                </div>                
                <div className="form-input-item">
                    <label className="block-label">Email:</label>
                    <input value={this.state.client.email} onChange={this.handleEmailChanged.bind(this)} />
                </div>                


      

                </main>
                <footer>
                    сгоден на обробку даних
                   
                </footer>                
            </div>
            
            
        )
    }
}

export default Client