import React, {Component} from 'react'
import DateTimePicker from 'react-datetime-picker';


class GetOtk extends Component {
    constructor(props){
        super(props)
        this.state= {
            useOtk: false,
            dateOtk: new Date(),
        }
    }

    onChange = date => this.setState({ date })

    render(){

        // cdk-overlay-pane mat-datepicker-popup
        return(
            <div className="form-input-item-small">
            <label>дата</label>
            <DateTimePicker
                onChange={this.onChange}
                value={this.state.date}
                calendarClassName="class2"
                locale="ua"
             />
             <input id="datetime" type="datetime-local" value={this.state.dateOtk} />
            </div>
        )
    }
}

export default GetOtk