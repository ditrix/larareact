// FormHeader.js
import React, {Component} from 'react' 
import GetFranshize from './GetFranshize'
import {PaySumm} from './PaySumm'


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


