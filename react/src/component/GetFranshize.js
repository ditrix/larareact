import React, {Component} from 'react'
import {TooltipIco} from './templates/TooltipIco'


import {MSG} from '../constants/messages'
import {_I18N} from '../lib/i18n'

class GetFranshize extends Component {
 
    handleFranshizeChange = event => this.props.getFeanshize(event.currentTarget.value)

    render(){
        return(
            <div className="get-fransgize-widget">
                <label  className="pl-summ">{_I18N(MSG.FRANSHIZE,this.props.lang)}</label>
                <div className="select-input block-value" defaultValue>
                    <select onChange={this.handleFranshizeChange.bind(this)} defaultValue={this.props.currentFranshize}>
                        <option value="2600">2600</option>
                        <option value="1300">1300</option>
                        <option value="0">0</option>
                    </select>  
                </div>
                <label>
                   {TooltipIco(_I18N(MSG.FRANSHIZE_TOOLTIP_CONTENT,this.props.lang))}
                </label>
            </div>
        )
    }
}

export default GetFranshize