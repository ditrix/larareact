import React, {Component} from 'react'
import {QuestionDropdown} from './QuestionDropdown'

class GetFranshize extends Component {
 
    handleFranshizeChange = event => this.props.getFeanshize(event.currentTarget.value)

    render(){
        return(
            <div className="get-fransgize-widget">
              <label  className="pl-summ">франшиза (грн):</label>
              <div className="select-input block-value" defaultValue>
              <select onChange={this.handleFranshizeChange.bind(this)} defaultValue={this.props.franshize}>
                  <option value="1">2600</option>
                  <option value="1">1300</option>
                  <option value="1">0</option>
              </select>  
              
              </div>
               <label>
               {QuestionDropdown('Франшиза - це частина збитків, яка не підлягає відшкодуванню страховиком.')}
              </label>
            </div>
        )
    }
}

export default GetFranshize