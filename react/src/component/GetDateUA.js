import React from 'react';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';

import 'moment/locale/ru.js';
import 'moment/locale/ua';

export default function GetDateUA() {
  return (
    
    <div className="form-input-item-date">
      <label>дата отк:</label>
  
    
  
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
    
  );
}