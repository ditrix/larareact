import React, {Component} from 'react'
import {connect} from 'react-redux' 
import {PaySumm,ItogSumm} from '../component/PaySumm'
import {MSG} from '../constants/messages'
import {_I18N} from '../lib/i18n'



class ResultBlock extends Component {
    render(){

       const resOsgpo = (this.props.resultOsgpo)?this.props.resultOsgpo:0
       const resDGO = (this.props.resultDgo)?this.props.resultDgo:0
        return(               
        <div className="block-result">
            <div className="summ-cost">
                <div className="pl-summ-box">
                {PaySumm(resOsgpo,_I18N(MSG.CALCLATE_OSAGO,this.props.lang))}
                </div>
                <div className="pl-summ-box">
                {(this.props.dgoActive)?PaySumm(resDGO,_I18N(MSG.CALCULATE_DGO,this.props.lang)):null}
                </div>
            </div>
            <div className="summ-itog">
                {ItogSumm(parseInt(resOsgpo) + parseInt(resDGO),_I18N(MSG.RESULT_PAY,this.props.lang))}
            </div>
        </div>      
        )
    }
}

const mapStateToProps = state => {
    return{
        //parameters: store.parameters,
        resultOsgpo: state.calculate.resultPl,  
        resultDgo: state.dgo.dgoPaySum,
        dgoActive: state.dgo.active,
        lang: state.appstate.lang,
    }
}


//export default FormHeader
export default connect(mapStateToProps, {} )(ResultBlock)