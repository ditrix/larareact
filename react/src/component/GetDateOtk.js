import React,{Component} from 'react';
import GetDatePicker from './GetDatePicker'
import 'react-day-picker/lib/style.css';
import {dateFormatApi} from '../lib/functions'

class  GetDateOtk extends Component {

  handleDateChanged = (selectedDay, modifiers, dayPickerInput) => { 
    this.props.getDateOtk(dateFormatApi(selectedDay))
}

render(){
  return (
      <GetDatePicker 
        lang='ua' 
        label='дата отк' 
        dateValue={this.props.dateOtk}
        getDate={this.handleDateChanged.bind(this)} 
      />
  )}
}

export default GetDateOtk