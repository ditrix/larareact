import React, {Component} from 'react'

import GetDateUA from './GetDateUA'

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

          <>
          
            <div className="col-polis-parameter">
               <label  className="block-label">отк:</label>
              <select onChange={this.handleIsOtkChange.bind(this)}>
                  <option value="0">ні</option>
                  <option value="1">так</option>
              </select>  
            </div>
            {
              (this.state.useOtk === "1")?<div className="col-polis-parameter"><GetDateUA /></div>:<></>
            }  
             
        </>

        )
    }
}

export default GetOtk

