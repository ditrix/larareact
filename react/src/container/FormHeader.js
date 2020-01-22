// FormHeader.js
import React, {Component} from 'react'
import {connect} from 'react-redux' 
import GetFranshize from '../component/GetFranshize'
import {PaySumm,ItogSumm} from '../component/PaySumm'
import DgoParameters from '../component/DgoParameters'
import {actionSavePolisParameters,actionOptionValuesChange} from '../action/PolisParametersAction'


class FormHeader extends Component {
    constructor(props){
        super(props)
        // console.log('this.props.resultOsgpo: ',this.props.resultOsgpo)
        this.state = {
            osagoPL: this.props.resultOsgpo,
            dgoPl: 0,
        }
    }

    getFranshize(value){
        const valueK12 = {
            par:{
                k12: value
            }
        }
        this.props.calculatePl(valueK12)
    }

    render(){

        return(
            <div className="form-header">
                <div className="header-block title"><h3>{this.props.title}</h3></div>
                <div  className="header-block axtra-calculate-options">
                    <GetFranshize getFeanshize={this.getFranshize.bind(this)} currentFranshize={this.props.currentFranshize} />
                    <DgoParameters />
                </div>
                <div className="header-block result">
                    {PaySumm(this.props.resultOsgpo,'нараховано ОСАГО')}
                    {PaySumm(500,'нараховано ДГО')}
                    {ItogSumm(this.props.resultOsgpo,'До сплати')}
                </div>      
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
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

