import React from 'react'

export default class PaySumm extends React.Component {
    render(){
        return(
            <div className="pl-summ">
                <label>до сплати</label>
                <h4>{this.props.summ}</h4><h5>грн.</h5>
            </div>
        )
    
    }
}