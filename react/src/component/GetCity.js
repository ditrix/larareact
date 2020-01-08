import React,{Component} from 'react'

import {cityDS} from '../data/cityds'

class GetCity extends Component {
    constructor(props){
        super(props)
        this.state = {
            city:{}
        }
    }

    handleCityChange(event){
        const id = event.currentTarget.value
        let cityRes = []
        cityRes = cityDS.filter(city => city.id === id)
        if(cityRes.length > 0){
            this.props.setCity(cityRes[0])
        }else{    
            this.props.setCity(cityDS[0])
        }    
    }

    render(){
        const currentCityID = (this.props.city !== null)?this.props.city.id:'0'
        console.log(this.props.city)
        return(
            <div className="select-widget">
                <label className="block-label">місце реєстрації власника ТЗ</label>
                <div className="select-input">
                    <select onChange={this.handleCityChange.bind(this)} >
                    {cityDS.map( (city,index) =>                        
                        (city.id == currentCityID)?
                        <option key={index} defaultValue value={city.id}>{city.nameUa}</option>
                        :<option key={index} value={city.id}>{city.nameUa}</option>
                    )}
                    </select>  
                </div>
            </div>
        )                

    }
}

export default GetCity
