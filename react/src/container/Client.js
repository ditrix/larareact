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
                sname: '',
                fname: '',
                inn: '',
                dob: '',
                
                doc:{
                  type:'',  
                  seria: '',
                  no:'',
                  dtget: '',
                  source: '',                  
                },
                addr: {
                    city:'',
                    street:'',
                    house:'',
                    flat:'',
                },
            },
        }
    }
    render(){
        return(
            
            <form className="client-form">
                <header><h3>Страхувальник</h3></header>
                <main>
                <div className="form-input-item">
                    <label className="block-label">Прізвище:</label>
                    <input value={this.state.client.laname} />
                </div>
                <div className="form-input-item">
                    <label className="block-label">Ім'я:</label>
                    <input value={this.state.client.faname} />
                </div>                
                <div className="form-input-item">
                    <label className="block-label">По батькові:</label>
                    <input value={this.state.client.saname} />
                </div>                

                <div className="form-input-row">
                    <div className="form-input-item input-inn">
                        <label className="block-label">Індивідуальний податковий номер (ІПН):</label>
                        <input value={this.state.client.inn} />
                    </div>                
                    
                    <div className="form-input-item input-dob">
                        <label className="block-label">Дата народження:</label>
                        <DayPickerInput
                            formatDate={formatDate}
                            parseDate={parseDate}
                            format="L"
                            placeholder={`${formatDate(new Date(), 'L', 'ua')}`}
                            dayPickerProps={{
                            locale: 'ua',
                            localeUtils: MomentLocaleUtils,
                            }}
                            onDayChange={day => console.log(day)}
                        />
                    </div>                
                </div>
                <div className="form-input-row">
                <div>
                <label>документ:</label>
                <select>
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
                        <input value={this.state.client.doc.seria} />
                    </div>       
                    <div className="form-input-item doc-no">
                        <label className="block-label">Номер:</label>
                        <input value={this.state.client.doc.no} />
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
                            onDayChange={day => console.log(day)}
                        />
                </div>
                <div className="form-input-item">
                    <label className="block-label">Ким виданий:</label>
                    <input value={this.state.client.doc.source} />
                </div>              

{/**/}
                <label className="block-label">Дареса</label>           
                <div className="form-input-item">
                    <label className="block-label">Місто:</label>
                    <input value={this.state.client.addr.city} />
                </div>
                <div className="form-input-item">
                    <label className="block-label">Вулиця:</label>
                    <input value={this.state.client.addr.street} />
                </div>                
                <div className="form-input-item">
                    <label className="block-label">Дім:</label>
                    <input value={this.state.client.addr.house} />
                </div>                
                <div className="form-input-item">
                    <label className="block-label">Квартира:</label>
                    <input value={this.state.client.addr.flat} />
                </div>                


      

                </main>
                <footer>
                    сгоден на обробку даних
                </footer>                
            </form>
            
            
        )
    }
}

export default Client