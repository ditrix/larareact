import React, {Component} from 'react'

import GetDateOtk from './GetDateOtk'

import 'react-day-picker/lib/style.css';


class GetOtk extends Component {
    constructor(props){
        super(props)
        this.state= {
       //     useOtk: false,
      //      dateOtk: new Date(),
          useOtk: "0",
          date: new Date(),
        }
    }

    onChange = date => this.setState({ date })

    handleIsOtkChange(e){
      //console.log(e.currentTarget.value)  
      this.setState({useOtk:e.currentTarget.value})

    }

    render(){
        return(
          <div>
            <div className="select-widget">
              <label  className="block-label">отк:</label>
              <div className="select-input">
              <select onChange={this.handleIsOtkChange.bind(this)}>
                  <option value="0">ні</option>
                  <option value="1">так</option>
              </select>  
              </div>
            </div>
            {
              (this.state.useOtk === "1")?<div className="select-widget"><GetDateOtk /></div>:<></>
            }
          </div>    
        )
    }
}

export default GetOtk

