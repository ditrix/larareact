// FormHeader.js
import React, {Component} from 'react'
import {connect} from 'react-redux' 
import GetFranshize from '../component/GetFranshize'
import {PaySumm,ItogSumm} from '../component/PaySumm'
import DgoParameters from '../component/DgoParameters'
import {actionSavePolisParameters,actionOptionValuesChange} from '../action/PolisParametersAction'

import {MSG} from '../constants/messages'
import {_I18N} from '../lib/i18n'

class FormHeader extends Component {
    constructor(props){
        super(props)
        this.state = {
            osagoPL: this.props.resultOsgpo,
            dgoPl: 0,
        }
    }

    getFranshize(value){
 
        const calculate = this.props.calculate
        calculate.par.k12 = value
        this.props.calculatePl(calculate)
    }

    render(){

        return(
            <div className="form-header">
                <GetFranshize 
                        lang={this.props.lang} 
                        getFeanshize={this.getFranshize.bind(this)} 
                        currentFranshize={this.props.calculate.k12} 
                />
                <DgoParameters lang={this.props.lang} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        //parameters: store.parameters,
        calculate: state.calculate,
        currentFranshize: state.calculate.par.k12,
        resultOsgpo: state.calculate.resultPl,  
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveParameters: (parameters) => dispatch(actionSavePolisParameters(parameters)),
        calculatePl:(valuesKo) => dispatch(actionOptionValuesChange(valuesKo))
    }
}



//export default FormHeader
export default connect(mapStateToProps, mapDispatchToProps )(FormHeader)

