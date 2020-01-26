import React,{Component} from 'react'
import {QuestionDropdown} from '../component/templates/QuestionDropdown'
// eslint-disable-next-line
import {connect} from 'react-redux'

import {MSG} from '../constants/messages'
import {_I18N} from '../lib/i18n'


class DgoParameters extends Component {
    render(){
        return(
            <div className="dgo-parameters">
            <label>{_I18N(MSG.DGO_TITLE,this.props.lang)}&nbsp;
                {QuestionDropdown(_I18N(MSG.DGO_CONTEXT,this.props.lang))}</label>
            <div className="dgo-values">
            <div className="form-input-row">
                <div className="select-widget dgo-type">
                    <div className="select-input">
                        <select placeholder="" onChange={(e)=>{console.log('TODO: тип дго', e.target.value)}} defaultValue={0} >
                            <option  value="0">{_I18N(MSG.DGO,this.props.lang)}</option>
                            <option  value="100000">100 000</option>
                            <option  value="200000">200 000</option>
                            <option  value="300000">300 000</option>
                            <option  value="400000">400 000</option>
                            <option  value="500000">500 000</option>
                        </select>
                    </div>
 
                </div>
                
                <div className="select-widget dgo-type">
                    <div className="select-input">
                        <select placeholder="" onChange={(e)=>{console.log('страхова сума дго',e.target.value)}} defaultValue={0} >
                            <option  value="0">{_I18N(MSG.DGO_PLUS,this.props.lang)}</option>
                            <option  value="100000">100 000</option>
                            <option  value="200000">200 000</option>
                            <option  value="300000">300 000</option>
                            <option  value="400000">400 000</option>
                            <option  value="500000">500 000</option>
                        </select>
                    </div>
                </div>
                </div>
            </div>
        </div>
        )
    }
}




// const mapStateToProps = () => {

// }

// const mapDispatchToProps = () => {

// }

// export default connect(mapStateToProps,mapDispatchToProps)(DgoParameters)
export default DgoParameters