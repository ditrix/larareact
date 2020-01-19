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
                    
                    {/* посвічення учасника війни   */}
                    <option value='1'>Учасник війни</option>
                    
                    {/* посвічення інваліда    */}
                    <option value='2'>Інвалід</option>
                    
                    {/* чорнобильске почвічення */}
                    <option value='3'>Чорнобилець</option>
                    
                    {/* пенсійне посвічення */}
                    <option value='4'>Пенсіонер</option>
                </select>  
            </div>
        </div>
        )
    }
}

export default GetDiscount