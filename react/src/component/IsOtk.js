import React, {Component} from 'react'



class IsOtk extends Component {
  
//    handleIsOtkChange(e){
//       //console.log(e.currentTarget.value)  
//       this.setState({useOtk:e.currentTarget.value})

//     }
    handleIsOtkChange = event => this.props.getOtk(event.currentTarget.value)


    render(){
        return(
          <div className="otk-parameters">
            <div className="select-widget">
              <label  className="block-label">отк:</label>
              <div className="select-input" defaultValue>
              <select onChange={this.handleIsOtkChange.bind(this)} defaultValue={this.props.isOtk}>
                  <option value="0">ні</option>
                  <option value="1">так</option>
              </select>  
              </div>
            </div>
          </div>    
        )
    }
}

export default IsOtk

