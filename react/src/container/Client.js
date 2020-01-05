import React, {Component} from 'react' 
import {dateFormatApi, checkIpn} from '../lib/functions'
import GetDatePicker from '../component/GetDatePicker'


import 'react-day-picker/lib/style.css';
import {PaySumm} from '../component/PaySumm'

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
        if(checkIpn(event.currentTarget.value))
        {    
            const client = this.state.client;
            client.ipn = event.currentTarget.value
            this.setState({client:client})
            this.GetDobFromIpn()
        
        } 
    }
  
    handleDOBChanged = (selectedDay, modifiers, dayPickerInput) => { 
        //const input = dayPickerInput.getInput()    
        const client = this.state.client; 
        client.dob = dateFormatApi(selectedDay)
        this.setState({client:client})
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
        this.setState({client:client})
    }


    handleDocTypeChanged = (event) => { 
        const client = this.state.client; 
        client.doc.type = event.currentTarget.value
        this.setState({client:client})
    }
    
    handleDocSeriaChanged = (event) => { 
        const client = this.state.client
        client.doc.seria = event.currentTarget.value
        this.setState({client:client})
    }
   
    handleDocNoChanged = (event) => { 
        const client = this.state.client; 
        client.doc.no = event.currentTarget.value
        this.setState({client:client})
    }
    handleDtGetChanged = (selectedDay, modifiers, dayPickerInput) => { 
        
        const client = this.state.client; 
        client.doc.dtget = dateFormatApi(selectedDay)
        this.setState({client:client})
    }
    
    handleDocSourceChanged = (event) => { 
        const client = this.state.client; 
        client.doc.source = event.currentTarget.value
        this.setState({client:client})
    }

    handleAddrChanged = (event) => { 
        const client = this.state.client; 
        client.addr = event.currentTarget.value
        this.setState({client:client})
    }
    
    handlePhoneChanged = (event) => { 
        const client = this.state.client;
        client.phone = event.currentTarget.value 
        this.setState({client:client})
    }
    
    handleEmailChanged = (event) => { 
        const client = this.state.client
        client.email = event.currentTarget.value
        this.setState({client:client})
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
                        <GetDatePicker 
                            lang ='ru' 
                            label = 'дата рождения'
                            getDate={this.handleDOBChanged.bind(this)}
                            dateValue={this.state.client.dob}
                        />                

                    </div>                
                </div>
                
                <div className="client-doc-row">

                    <div className="select-widget item-doc-type">
                        <label className="block-label">документ:</label>
                        <div className="select-input">
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
                
                
                    <div className="item-doc-seria">
                        <label className="block-label">Серія:</label>
                        <input value={this.state.client.doc.seria} onChange={this.handleDocSeriaChanged.bind(this)} />
                    </div>       
                    <div className="item-doc-no">
                        <label className="block-label">Номер:</label>
                        <input value={this.state.client.doc.no} onChange={this.handleDocNoChanged.bind(this)} />
                    </div>       
                    <div className="item-date-get">
                        <GetDatePicker 
                            lang='ua' 
                            label='Дата видачі'
                            dateValue={dateGetDoc}
                            getDate={this.handleDtGetChanged.bind(this)}
                        />
                    </div>
                    <div className="item-doc-source">
                        <label className="block-label">Ким виданий:</label>
                        <input value={this.state.client.doc.source} onChange={this.handleDocSourceChanged.bind(this)} />
                    </div>              
                </div>    
               
                <div className="form-input-item">
                    <label className="block-label">Адреса:</label>
                    <input value={this.state.client.addr} onChange={this.handleAddrChanged.bind(this)} />
                </div>
                <div className="form-input-item">
                    <label className="block-label">Телефон:</label>
                    <input placeholder={'+38'}  value={this.state.client.phone} onChange={this.handlePhoneChanged.bind(this)} />
                </div>                
                <div className="form-input-item">
                    <label className="block-label">Email:</label>
                    <input value={this.state.client.email} onChange={this.handleEmailChanged.bind(this)} />
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
                onClick={this.props.nextTab} >наступна</button> 
            </nav>
        </footer>
            
        </div>
            
        )
    }
}

export default Client