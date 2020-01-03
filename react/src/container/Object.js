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
                markaId: null,
                modelId: null,
            },
            models:null,
        }
    }


    handleMarkaChanged(event){
        const markaID = event.currentTarget.value
        const auto = this.state.auto
        auto.markaID = markaID
        const modelsArr = models.filter(item => item.DMarkID === markaID)
        this.setState({models:modelsArr,auto:auto})
    }
    handleModelChanged(event){
        const auto = this.state.auto
        const modelID = event.currentTarget.value
        auto.modelID = modelID
        const selectedModel = this.state.models.filter(model=> model.DModelID === modelID )
        auto.model = selectedModel.Name
        this.setState({auto:auto})
        console.log(this.state)
    }

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
                            (mark.IsActive === '1')&&<option key={index} value={mark.DMarkID}>{mark.Name}</option>
                        )}
                    </select>  
                    </div>  
                </div>
                <div className="form-input-row">
                    <div>
                    <label>модель:</label>
                    <select onChange={this.handleModelChanged.bind(this)}>
                    
                    {(this.state.models)&&this.state.models.map((model) =>    
                        <option key={model.DModelID} value={model.DModelID}>{model.Name}</option>
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