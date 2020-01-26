import React, {Component} from 'react'
import {MSG} from '../constants/messages'
import {_I18N} from '../lib/i18n'

class GetK10 extends Component {
    getValue = event => this.props.isDiscount(event.currentTarget.value)
    render(){
        return(
            <div className="select-widget">
                <label className="block-label">{_I18N(MSG.DISCOUNT,this.props.lang)}</label>
                <div className="select-input">
                    <select onChange={this.getValue.bind(this)} defaultValue={this.props.discount}>
                        <option value='0'>{_I18N(MSG.DISCOUNT_NO_DISCOUNT,this.props.lang)}</option>
                        <option value='1'>{_I18N(MSG.DISCOUNT_WAR,this.props.lang)}</option>
                        <option value='2'>{_I18N(MSG.DISCOUNT_INVALID,this.props.lang)}</option>
                        <option value='3'>{_I18N(MSG.DISCOUNT_CHORNOBIL,this.props.lang)}</option>
                        <option value='4'>{_I18N(MSG.DISCOUNT_PENSIONER,this.props.lang)}</option>
                    </select>  
                </div>
            </div>
        )
    }
}

export default GetK10