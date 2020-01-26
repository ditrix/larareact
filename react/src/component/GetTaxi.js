import React, {Component} from 'react'

import {MSG} from '../constants/messages'
import {_I18N} from '../lib/i18n'

class GetTaxi extends Component {
    getValue = event => this.props.getTaxi(event.currentTarget.value)
    render(){
        return(
            <div className="select-widget">
                <label className="block-label">{_I18N(MSG.TAXI,this.props.lang)}</label>
                <div className="select-input">
                    <select onChange={this.getValue.bind(this)} defaultValue={this.props.valueTaxi}>
                        <option value='1'>{_I18N(MSG.NO,this.props.lang)}</option>
                        <option value='3'>{_I18N(MSG.YES,this.props.lang)}</option>
                    </select>  
                </div>
            </div>
        )
    }
}

export default GetTaxi