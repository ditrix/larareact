import React, {Component} from 'react'

class GetTaxi extends Component {
    getValue = event => this.props.getTaxi(event.currentTarget.value)
    render(){
        return(
            <div className="select-widget">
                <label className="block-label">таксі:</label>
                <div className="select-input">
                    <select onChange={this.getValue.bind(this)} defaultValue={this.props.valueTaxi}>
                        <option value='1'>ні</option>
                        <option value='3'>так</option>
                    </select>  
                </div>
            </div>
        )
    }
}

export default GetTaxi