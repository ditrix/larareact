import React, {Component} from 'react'
import {TooltipIco} from './templates/TooltipIco'


import {MSG} from '../constants/messages'
import {_I18N} from '../lib/i18n'

class GetFranshize extends Component {
 
    handleFranshizeChange = event => this.props.getFeanshize(event.currentTarget.value)

    render(){
        return(
            <div className="form-header-parameters">
                <header>
                    <label><h4>{_I18N(MSG.FRANSHIZE,this.props.lang)}</h4></label>
                    <label>{TooltipIco(_I18N(MSG.FRANSHIZE_TOOLTIP_CONTENT,this.props.lang))}</label>
                </header>
                <div className="form-input-row">
                <div className="select-input block-value">
                    <select onChange={this.handleFranshizeChange.bind(this)} defaultValue={this.props.currentFranshize}>
                        <option value="2600">2600</option>
                        <option value="1300">1300</option>
                        <option value="0">0</option>
                    </select>  
                </div>
                </div>
            </div>
        )
    }
}

export default GetFranshize