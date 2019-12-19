import React, {Component} from 'react'
import DateTimePicker from 'react-datetime-picker';
import DatePicker from 'react-date-picker';

import "react-datepicker/dist/react-datepicker.css";

//import 'moment/locale/fr.js';


import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import 'react-day-picker/lib/style.css';

/*
import 'date-fns';

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

*/


const WEEKDAYS_SHORT = {
    ru: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    it: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'],
  };
  const MONTHS = {
    ru: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
    ua: [
        'Січень',
        'Лютий',
        'Березень',
        'Квітень',
        'Травень',
        'Червень',
        'Липень',
        'Серпень',
        'Вересень',
        'Жовтень',
        'Листопад',
        'Грудень',
      ],
    it: [
      'Gennaio',
      'Febbraio',
      'Marzo',
      'Aprile',
      'Maggio',
      'Giugno',
      'Luglio',
      'Agosto',
      'Settembre',
      'Ottobre',
      'Novembre',
      'Dicembre',
    ],
  };
  
  const WEEKDAYS_LONG = {
    ru: [
      'Воскресенье',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
    ],
    ua: [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
      ],
  
    it: [
      'Domenica',
      'Lunedì',
      'Martedì',
      'Mercoledì',
      'Giovedì',
      'Venerdì',
      'Sabato',
    ],
  };
  
  const FIRST_DAY_OF_WEEK = {
    ru: 1,
    it: 1,
  };
  // Translate aria-labels
  const LABELS = {
    ru: { nextMonth: 'следующий месяц', previousMonth: 'предыдущий месяц' },
    it: { nextMonth: 'Prossimo mese', previousMonth: 'Mese precedente' },
  };

class GetOtk extends Component {
    constructor(props){
        super(props)
        this.state= {
       //     useOtk: false,
      //      dateOtk: new Date(),
            date: new Date(),
        }
    }

    onChange = date => this.setState({ date })

    render(){

        // cdk-overlay-pane mat-datepicker-popup
        const { startDate } = this.state;
        const locale = "ua"
        return(

            <div className="form-input-item-small">
            <label>дата</label>
            <span>DatePicker</span>
            <DatePicker onChange={this.onChange} value={this.state.date} locale="ua"/>

            <hr />
            <span>DayPicker</span>
            <DayPicker 
                 locale={locale}
                months={MONTHS[locale]}
                    weekdaysLong={WEEKDAYS_LONG[locale]}
          weekdaysShort={WEEKDAYS_SHORT[locale]}
          firstDayOfWeek={FIRST_DAY_OF_WEEK[locale]}
          labels={LABELS[locale]} 



            />;

            <hr />
     
            </div>
        
        )
    }
}

export default GetOtk