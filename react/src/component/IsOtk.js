import React, {Component} from 'react'


import {MSG} from '../constants/messages'
import {_I18N} from '../lib/i18n'
//  TODO: не позволять раньше текущей даты

class IsOtk extends Component {
  

    handleIsOtkChange = event => this.props.getOtk(event.currentTarget.value)


    render(){
        return(
          <div className="otk-parameters">
            <div className="select-widget">
              <label  className="block-label">{_I18N(MSG.OTK,this.props.lang)}</label>
              <div className="select-input" defaultValue>
              <select onChange={this.handleIsOtkChange.bind(this)} defaultValue={this.props.isOtk}>
                  <option value="0">{_I18N(MSG.NO,this.props.lang)}</option>
                  <option value="1">{_I18N(MSG.YES,this.props.lang)}</option>
              </select>  
              </div>
            </div>
          </div>    
        )
    }
}

export default IsOtk

