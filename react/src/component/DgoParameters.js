import React,{Component} from 'react'
import {TooltipIco} from './templates/TooltipIco'
// eslint-disable-next-line
import {connect} from 'react-redux'

import {MSG} from '../constants/messages'
import {_I18N} from '../lib/i18n'
/*возвращать {dgoType:  dgoInsurSum:  }

    ДГО  === 1
    ДГО+  === 2


*/ 

class DgoParameters extends Component {

    constructor(){
        super()
        this.state = {
            dgo: {
                active: false, 
                dgoType: 1,
                dgoInsurSum: 0,
            },
            dgoPlus: {
                active: false,
                dgoType: 2,
                dgoInsurSum: 0
            }
        }
    }

    getDataDgo(){
        const dataDgo = {
            dgoType:0,
            dgoInsurSum:0,
        }

        if(this.state.dgo.dgoInsurSum !== '0'){
            dataDgo.dgoType = 1
            dataDgo.dgoInsurSum = parseInt(this.state.dgo.dgoInsurSum)
        }

        if(this.state.dgoPlus.dgoInsurSum !== '0'){
            dataDgo.dgoType = 2
            dataDgo.dgoInsurSum = parseInt(this.state.dgoPlus.dgoInsurSum)
        }
        this.props.getDataDgo(dataDgo)        
    }

    handleDgoChanged(e){
        const valueInsurSum = e.currentTarget.value
        const nextState = this.state
        if(valueInsurSum !== "0"){
            nextState.dgoPlus.dgoInsurSum = "0";
        }
        nextState.dgo.dgoInsurSum = valueInsurSum;
        this.setState(nextState)
        this.getDataDgo()
    }

    handleDgoPlusChanged(e){
        const valueInsurSum = e.currentTarget.value
        const nextState = this.state
        if(valueInsurSum !== "0"){
            nextState.dgo.dgoInsurSum = "0";
        }
        nextState.dgoPlus.dgoInsurSum = valueInsurSum;
        this.setState(nextState)
        this.getDataDgo()
    }



    render(){
        const dgoSum = this.state.dgo.dgoInsurSum
        const dgoPlusSum = this.state.dgoPlus.dgoInsurSum
        return(
            <div className="form-header-parameters">
                <header>
                <label><h4>{_I18N(MSG.DGO_TITLE,this.props.lang)}</h4></label>
                <label>{TooltipIco(_I18N(MSG.DGO_TOOLTIP_CONTENT,this.props.lang))}</label>
                </header>
 
            <div className="form-input-row">
                <div className="select-widget dgo-type">
                    <div className="select-input">
                        <select placeholder="" onChange={this.handleDgoChanged.bind(this)} value={this.state.dgo.dgoInsurSum} >
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
                        <select placeholder="" onChange={this.handleDgoPlusChanged.bind(this)} value={this.state.dgoPlus.dgoInsurSum} >
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
        )
    }
}




// const mapStateToProps = () => {

// }

// const mapDispatchToProps = () => {

// }

// export default connect(mapStateToProps,mapDispatchToProps)(DgoParameters)
export default DgoParameters