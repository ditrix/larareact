// FormHeader.js
import React, {Component} from 'react' 
import GetFranshize from './GetFranshize'
import {PaySumm,ItogSumm} from './PaySumm'
import DgoParameters from './DgoParameters'


class FormHeader extends Component {
    render(){
        return(
            <div className="form-header">
                <div className="header-block title"><h3>{this.props.title}</h3></div>
                <div  className="header-block axtra-calculate-options">
                    <GetFranshize getFeanshize={()=>{console.log('get franshize')}} />
                    <DgoParameters />
                </div>
                <div className="header-block result">
                    {PaySumm(100000,'нараховано ОСАГО')}
                    {PaySumm(500,'нараховано ДГО')}
                    {ItogSumm(100500,'До сплати')}
                </div>      
            </div>
        )
    }
}

export default FormHeader


