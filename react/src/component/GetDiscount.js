import React, {Component} from 'react'

class GetDiscount extends Component {

    getValue = event => this.props.isDiscount(event.currentTarget.value)
    
    render(){
        return(
        <div className="select-widget">
            <label className="block-label">пільга</label>
            <div className="select-input">
                <select onChange={this.getValue.bind(this)} defaultValue={this.props.discount}>
                    <option value='0'>без пільг</option>
                    <option value='1'>Учасник війни</option> посвічення учасника війни
                    <option value='2'>Інвалід</option> посвічення інваліда
                    <option value='3'>Чорнобилець</option> чорнобильске почвічення
                    <option value='4'>Пенсіонер</option>   пенсійне посвічення
                </select>  
            </div>
        </div>
        )
    }
}

export default GetDiscount