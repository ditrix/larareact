import React, {Component} from 'react' 

import {markList} from '../data/marks.js'
import {models} from '../data/models.js'
// ввод даних про об'ект страхування
class Object extends Component {
    constructor(props){
        super(props)
        this.state = {

            auto: {
                marka: '',
                model: '',
                year: '',
                no: '',
                vin: '',
                descr: '',
            },
            models:null,
        }
    }


    handleMarkaChanged(event){
        console.log(event.currentTarget.value)
    }
    handleModelChanged(event){}

    handleNoChanged(event){
        const auto = this.state.auto
        auto.no = event.currentTarget.value
        this.setState({auto:auto})
    }

    handleVINChanged(event){
        const auto = this.state.auto
        auto.vin = event.currentTarget.value
        this.setState({auto:auto})
    }

    handleYearChanged(event){
        const auto = this.state.auto
        auto.year = event.currentTarget.value
        this.setState({auto:auto})

    }

    handleDescrChanged(event){
        const auto = this.state.auto
        auto.descr = event.currentTarget.value
        this.setState({auto:auto})
    }

    render(){
        return(
            <div className="client-form">
                <header><h3>авто</h3></header>
                <main>
                <div className="form-input-row">
                    <div>
                    <label>марка:</label>
                    <select onChange={this.handleMarkaChanged.bind(this)}>
                        {markList.map((mark,index) =>    
                            
                                <option key={index} value={mark.MarkID}>{mark.Name}</option>
                            
                        )}
                    </select>  
                    </div>  
                </div>
                <div className="form-input-row">
                    <div>
                    <label>модель:</label>
                    <select onChange={this.handleModelChanged.bind(this)}>
                    {(this.state.models)&&this.state.models.map((model) =>    
                        <option key={model.ModelID} value={model.ModelID}>{model.Name}</option>
                    )}
                    </select>  
                    </div>  
                </div>                
                
                <div className="form-input-item">
                    <label className="block-label">рік випуску:</label>
                    <input value={this.state.auto.year} onChange={this.handleYearChanged.bind(this)} />
                </div>


                <div className="form-input-item">
                    <label className="block-label">держномер:</label>
                    <input value={this.state.auto.no} onChange={this.handleNoChanged.bind(this)} />
                </div>                
                <div className="form-input-item">
                    <label className="block-label">VIN:</label>
                    <input value={this.state.auto.vin} onChange={this.handleVINChanged.bind(this)} />
                </div>                

                <div className="form-input-item">
                    <label className="block-label">опис:</label>
                    <input value={this.state.auto.descr} onChange={this.handleDescrChanged.bind(this)} />
                </div>                


                </main>
                <footer>
 
                
                </footer>
            </div>
                
        )
    }
}

export default Object