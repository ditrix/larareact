import React, {Component} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import {QuestionDropdown} from './QuestionDropdown'

class GetFranshize extends Component {
  
//    handleIsOtkChange(e){
//       //console.log(e.currentTarget.value)  
//       this.setState({useOtk:e.currentTarget.value})

//     }
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
                {/* <div className="dropdown">
                <FontAwesomeIcon className="question-ico" icon={faQuestionCircle} size="lg" color="#1fb6ff" />
                <div class="dropdown-content">
                  <p>Франшиза - це частина збитків, яка не підлягає відшкодуванню страховиком.</p>
                </div>
                </div> */}
              </label>
            </div>
        )
    }
}

export default GetFranshize