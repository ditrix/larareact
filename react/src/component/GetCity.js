import React,{Component} from 'react'

import {cityDS} from '../data/cityds'

export const defaultCityInfo = () => {
    console.log('defaultCityInfo')
    return {
        "id": "0",
        "nameRu": "--место регистрации--",
        "nameUa": "--місце реєстрації--",
        "zone": "0",
        "zone_dgo": "0"
      }
}



class GetCity extends Component {
    constructor(props){
        super(props)
        this.handleCityChange = this.handleCityChange.bind(this)
    }

    handleCityChange(event){
        const id = event.currentTarget.value
        let cityRes = []
        cityRes = cityDS.filter(city => city.id === id)
        if(cityRes !== 0) {
            this.props.setCity(cityRes[0])
        }else{
            this.props.setCity(defaultCityInfo())
        }
        
    }

    render(){
        const currentCityID = (this.props.city !== null )?this.props.city.id:'0'
        return(
            <div className="select-widget">
                <label className="block-label">місце реєстрації власника ТЗ</label>
                <div className="select-input">
                    <select onChange={this.handleCityChange} defaultValue={currentCityID} >
                    {cityDS.map( (city,index) =>                        
                        <option key={index} value={city.id}>{city.nameUa}</option>
                    )}
                    </select>  
                </div>
            </div>
        )                
    }
}

export default GetCity
