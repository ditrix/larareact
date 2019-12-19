import React, {Component} from './component/React'

class GetOtk extends Component {
    constructor(props){
        super(props)
        this.state= {
            useOtk: false,
            dateOtk: '',
        }
    }
    render(){
        return(
            <div className="form-input-item-small">
            <label>дата</label>
            <input type="datetime-local" value={this.state.dateOtk}  />
            </div>
        )
    }
}

export default GetOtk