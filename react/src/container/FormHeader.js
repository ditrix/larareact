// FormHeader.js
import React, {Component} from 'react'
import {connect} from 'react-redux' 
import GetFranshize from '../component/GetFranshize'
import {PaySumm,ItogSumm} from '../component/PaySumm'
import DgoParameters from '../component/DgoParameters'


class FormHeader extends Component {
    constructor(props){
        super(props)
        // console.log('this.props.resultOsgpo: ',this.props.resultOsgpo)
        this.state = {
            osagoPL: this.props.resultOsgpo,
            dgoPl: 0,
        }
    }

 
    // componentWillReceiveProps(nextProps) {
    //     this.setState({
    //       osagoPL: nextProps.calculate.resultPl !== this.props.calculate.resultPl
    //     });
    //   }

    render(){
        // console.log('FormHeader.this.props.resultOsgpo',this.props.resultOsgpo)

         // eslint-disable-next-line 
        const osagoPL = this.state.osagoPl
        return(
            <div className="form-header">
                <div className="header-block title"><h3>{this.props.title}</h3></div>
                <div  className="header-block axtra-calculate-options">
                    <GetFranshize getFeanshize={()=>{console.log('get franshize')}} />
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
  
        resultOsgpo: state.calculate.resultPl,  
    }
}



//export default FormHeader
export default connect(mapStateToProps, {})(FormHeader)

