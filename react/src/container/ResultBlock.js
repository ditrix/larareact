import React, {Component} from 'react'
import {connect} from 'react-redux' 
import {PaySumm,ItogSumm} from '../component/PaySumm'
import {MSG} from '../constants/messages'
import {_I18N} from '../lib/i18n'



class ResultBlock extends Component {
    render(){
       
        return(               
        <div className="block-result">
            <div className="summ-cost">
                {PaySumm(this.props.resultOsgpo,_I18N(MSG.CALCLATE_OSAGO,this.props.lang))}
                {PaySumm(this.props.resultDgo,_I18N(MSG.CALCULATE_DGO,this.props.lang))}
            </div>
            <div className="summ-itog">
                {ItogSumm(this.props.resultOsgpo,_I18N(MSG.RESULT_PAY,this.props.lang))}
            </div>
        </div>      
        )
    }
}

const mapStateToProps = state => {
    return{
        
        resultOsgpo: state.calculate.resultPl,  
        resultDgo: state.dgo.dgoPaySum,
        lang: state.appstate.lang,
    }
}


//export default FormHeader
export default connect(mapStateToProps, {} )(ResultBlock)