import React,{Component} from 'react'
import {QuestionDropdown} from '../component/templates/QuestionDropdown'
import {connect} from 'react-redux' 
class DgoParameters extends Component {
    render(){
        return(
            <div className="dgo-parameters">
            <label>додаткове покриття&nbsp;{QuestionDropdown('ДЦВ - це додаткове збільшення страхової виплати. Додаткове покриття вступае в дію, коли при настанні страхової події збиток становить понад 100 000 гривень.')}</label>
            <div className="form-input-row">
                <div className="select-options-block">
                <div className="select-widget dgo-type">
                    <div className="select-input">
                        <select placeholder="тип дго" onChange={(e)=>{console.log('TODO: тип дго', e.target.value)}} defaultValue={0} >
                            <option  value="0">замовити ДГО</option>
                            <option  value="1">ДГО</option>
                            <option  value="1">ДГО+</option>
                        </select>
                    </div>
                </div>
                
                <div className="select-widget dgo-insur-sum">
                    <label className="block-label"></label>
                    <div className="select-input">
                        <select placeholder="страхова сума дго" onChange={(e)=>{console.log('страхова сума дго',e.target.value)}} defaultValue={0} >
                            <option  value="0">страховая сума (грн)--</option>
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




const mapStateToProps = () => {

}

const mapDispatchToProps = () => {

}

export default connect(mapStateToProps,mapDispatchToProps)(DgoParameters)