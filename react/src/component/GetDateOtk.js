import React from 'react';
import GetDatePicker from './GetDatePicker'


export default function GetDateOtk() {
  return (
      <GetDatePicker lang='ua' label='дата отк' getDate={()=>console.log('date otk')} />
  );
}