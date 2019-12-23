import React, {Component} from 'react'
//import DateTimePicker from 'react-datetime-picker';
//import DatePicker from 'react-date-picker';


import GetDateUA from './GetDateUA'



 /*
          <div className="form-input-item-small">
          
            <label>дата</label>
            <span>DatePicker</span>
            <DatePicker onChange={this.onChange} value={this.state.date} locale="ua-UA"/>

            <hr />
            <span>DayPickerInput</span>
            <DayPickerInput />
            
            
            
            <hr />

            <span>DayPicker</span>
            <DayPicker locale={locale} months={MONTHS[locale]} 
              weekdaysLong={WEEKDAYS_LONG[locale]} weekdaysShort={WEEKDAYS_SHORT[locale]} 
              firstDayOfWeek={FIRST_DAY_OF_WEEK[locale]} labels={LABELS[locale]} />;
 
     
            </div>
             */


import 'moment/locale/ru.js';
import 'moment/locale/ua.js';  

import 'react-day-picker/lib/style.css';


class GetOtk extends Component {
    constructor(props){
        super(props)
        this.state= {
       //     useOtk: false,
      //      dateOtk: new Date(),
          useOtk: "0",
          date: new Date(),
        }
    }

    onChange = date => this.setState({ date })

    handleIsOtkChange(e){
      //console.log(e.currentTarget.value)  
      this.setState({useOtk:e.currentTarget.value})

    }

    render(){

        // cdk-overlay-pane mat-datepicker-popup
        const { startDate } = this.state;
        const locale = "ua"
        return(

          <div className="form-input-item-small">
            <div>
               <label>отк:</label>
              <select onChange={this.handleIsOtkChange.bind(this)}>
                  <option value="0">ні</option>
                  <option value="1">так</option>
              </select>  
            </div>
            {
              (this.state.useOtk == "1")?<GetDateUA />:<></>
            }  
             
        </div>

        )
    }
}

export default GetOtk



  /*
          <div className="form-input-item-small">
          
            <label>дата</label>
            <span>DatePicker</span>
            <DatePicker onChange={this.onChange} value={this.state.date} locale="ua-UA"/>

            <hr />
            <span>DayPickerInput</span>
            <DayPickerInput />
            
            
            
            <hr />

            <span>DayPicker</span>
            <DayPicker locale={locale} months={MONTHS[locale]} 
              weekdaysLong={WEEKDAYS_LONG[locale]} weekdaysShort={WEEKDAYS_SHORT[locale]} 
              firstDayOfWeek={FIRST_DAY_OF_WEEK[locale]} labels={LABELS[locale]} />;
 
     
            </div>
             */
        