import React,{Component} from 'react';
import PropTypes from 'prop-types'

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import MomentLocaleUtils, { formatDate, parseDate,} from 'react-day-picker/moment';

import 'moment/locale/ru.js';
import 'moment/locale/ua';

class GetDatePicker extends Component {

    constructor(props){
      super(props)
    }

    handleDateChanged = (selectedDay, modifiers, dayPickerInput) => this.props.getDate(selectedDay)

    render(){
      return (
        <div className="date-picker-widget">
          <label>{this.props.label}</label>
          <div className="date-input">
            <DayPickerInput
              formatDate={formatDate}
              parseDate={parseDate}
              format="L"
              placeholder={`${formatDate(this.props.dateValue, 'L', this.props.lang)}`}
              dayPickerProps={{ locale: this.props.lang, localeUtils: MomentLocaleUtils, }}
              onDayChange={this.handleDateChanged.bind(this)}
            />
          </div>
        </div>
      );      
    }
  
} 
export default GetDatePicker

GetDatePicker.propTypes = {
  getDate: PropTypes.func,
  lang: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  dateValue: PropTypes.any,
}


GetDatePicker.defaultProps = {
  lang: 'ua',
  label: 'дата',
  getDate: () => console.log('Props Error: getDate() undef'),
  dateValue: new Date()
}
 
