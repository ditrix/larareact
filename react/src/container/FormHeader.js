// FormHeader.js
import React, {Component} from 'react'
import {connect} from 'react-redux' 
import GetFranshize from '../component/GetFranshize'
// eslint-disable-next-line
import {PaySumm,ItogSumm} from '../component/PaySumm'
import DgoParameters from '../component/DgoParameters'
import {actionSavePolisParameters,actionOptionValuesChange} from '../action/PolisParametersAction'
import {actionGetDGO} from '../action/ActionCalcDGO'

// eslint-disable-next-line
import {MSG} from '../constants/messages'
// eslint-disable-next-line
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

    getDataDgo(value){
        const valuesDgo = this.props.dataDGO 
        valuesDgo.dgoInsurSum = value.dgoInsurSum
        valuesDgo.dgoType = value.dgoType
        this.props.calculateDgo(valuesDgo)
    }


    render(){

        return(
            <div className="form-header">
                <GetFranshize 
                    lang={this.props.lang} 
                    getFeanshize={this.getFranshize.bind(this)} 
                    currentFranshize={this.props.calculate.k12} 
                />
                {(this.props.dataDGO.active)?
                <DgoParameters 
                    lang={this.props.lang} 
                    dataDGO={this.props.dataDGO}
                    getDataDgo={this.getDataDgo.bind(this)}                         
                />:<span></span>
                }
            </div>
        )
    }
}

const mapStateToProps = store => {
    return{
        calculate: store.calculate,
        currentFranshize: store.calculate.par.k12,
        resultOsgpo: store.calculate.resultPl,  
        dataDGO: store.dgo,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveParameters: (parameters) => dispatch(actionSavePolisParameters(parameters)),
        calculatePl:(valuesKo) => dispatch(actionOptionValuesChange(valuesKo)),
        calculateDgo:(valueDGO) => dispatch(actionGetDGO(valueDGO))
    }
}



//export default FormHeader
export default connect(mapStateToProps, mapDispatchToProps )(FormHeader)

