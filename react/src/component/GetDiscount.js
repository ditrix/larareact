import React, {Component} from 'react'


class GetK10 extends Component {
    getValue = event => this.props.isDiscount(event.currentTarget.value)
    render(){
        return(
            <div className="select-widget">
                <label className="block-label">пільга</label>
                <div className="select-input">
                    <select onChange={this.getValue.bind(this)} defaultValue={this.props.discount}>
                        <option value='0'>без пільг</option>
                        <option value='1'>Учасник війни</option>
                        <option value='2'>Інвалід</option>
                        <option value='3'>Чорнобилець</option>
                        <option value='4'>Пенсіонер</option>
                    </select>  
                </div>
            </div>
        )
    }
}

export default GetK10