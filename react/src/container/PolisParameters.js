import React, {Component} from 'react'
import GetK1 from '../component/GetK1'
import GetTaxi from '../component/GetTaxi'
import GetDiscount from '../component/GetDiscount'
import GetOtk from '../component/GetOtk'


class PolisParameters extends Component{
    constructor(props){
        super(props)
        this.state = {
            valueK1: 'B1',
            valueDiscount: '0',
            valueTaxi: '0',

 
            isOtk: false,

        }
        
        this.getK1Value = this.getK1Value.bind(this)
        this.setDiscount = this.setDiscount.bind(this)
        this.getDiscount = this.getDiscount.bind(this)
        this.getTaxi = this.getTaxi.bind(this)

    }

 
    setDiscount(){
        return (['A1','A2','B1','B2','B3'].indexOf(this.state.valueK1) !== -1)
    }

    getK1Value(value){
        this.setState({valueK1:value})
    }

    getDiscount(value){
        this.setState({valueDiscount:value})
    }

    getTaxi(value){
        this.setState({valueTaxi:value})
    }

    render(){
        console.log(this.state)
        return(
            <div className="container polis-parameters">
               <div className="row">
                    <div className="col-sm-5">
                        <GetK1 getK1={this.getK1Value} />  
                    </div>
                    <div className="col-sm-2">
                    {(this.setDiscount(this.state.valueK1))?
                        <GetDiscount isDiscount={this.getDiscount} />:<></>}
                    </div>
                    <div className="col-sm-1">
                    {(
                ((this.state.valueDiscount === "0")&&(['B1','B2','B3','B4','B5'].indexOf(this.state.valueK1) !== -1))
                ||(['D1'].indexOf(this.state.valueK1) !== -1)
                        //(this.state.valueDiscount === "0") // NB! is OK!!!!
                        /*||((['A1','A2','C1','C2','D2','E','F'].indexOf(this.state.valueK1) === -1))*/
                        //||(['A1','A2'].indexOf(this.state.valueK1) == -1)
                        )?
                        <GetTaxi isTaxi={this.getTaxi} />:<></>}
                    </div>
                    <div className="col-sm-4">
                    {((this.state.valueTaxi === "1")||((['C1','C2','D1','D2','E','F'].indexOf(this.state.valueK1) !== -1)))?
                        <GetOtk />:<></>}
                    </div>
                </div>
            </div>   
        )
    }
}

export default PolisParameters
