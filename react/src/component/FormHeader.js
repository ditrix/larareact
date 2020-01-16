// FormHeader.js
import React, {Component} from 'react' 
import GetFranshize from './GetFranshize'
import {PaySumm} from './PaySumm'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

class FormHeader extends Component {
    render(){
        return(
            <div className="form-header">
                <div className="header-block title"><h3>{this.props.title}</h3></div>
                <div className="header-block"><GetFranshize getFeanshize={()=>{console.log('get franshize')}} /></div>
                <div className="header-block result">{PaySumm(100500,'ru')}</div>      
            </div>
        )
    }
}

export default FormHeader


