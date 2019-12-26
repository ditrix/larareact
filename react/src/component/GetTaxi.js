import React, {Component} from 'react'

class GetTaxi extends Component {
    getValue = event => this.props.isTaxi(event.currentTarget.value)
    componentWillUnmount(){
        this.props.isTaxi('0')
    }
    render(){
        return(
            <div className="form-input-item">

            <label className="block-label">таксі:</label>
            <select onChange={this.getValue.bind(this)}>
                <option value='0'>ні</option>
                <option value='1'>так</option>
            </select>  
            </div>
        )
    }
}

export default GetTaxi