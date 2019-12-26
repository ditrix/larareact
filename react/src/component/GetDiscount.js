import React, {Component} from 'react'

class GetDiscount extends Component {

    getValue = event => this.props.isDiscount(event.currentTarget.value)
    
    componentWillUnmount(){
        this.props.isDiscount('0')
    }

    render(){
        return(
            <div className="form-input-item">
                <label className="block-label">пільга</label>
                <select onChange={this.getValue.bind(this)}>
                    <option value='0'>без пільг</option>
                    <option value='1'>Учасник війни</option>
                    <option value='1'>Інвалід</option>
                    <option value='1'>Чорнобилець</option>
                    <option value='1'>Пенсіонер</option>
                </select>  
            </div>
        )
    }
}

export default GetDiscount