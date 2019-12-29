import React, {Component} from 'react' 

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
            }
        }
    }

    handleMarkaChanged(){}
    handleModelChanged(){}
    handleNoChanged(){}
    handleVINChanged(){}
    handleYearChanged(){}
    handleDescrChanged(){}

    render(){
        return(
            <div className="client-form">
                <header><h3>авто</h3></header>
                <main>
                <div className="form-input-row">
                    <div>
                    <label>марка:</label>
                    <select onChange={this.handleMarkaChanged.bind(this)}>
                        <option value='12'>ваз</option>
                        <option value='9'>бмв</option>
                    </select>  
                    </div>  
                </div>
                <div className="form-input-row">
                    <div>
                    <label>модель:</label>
                    <select onChange={this.handleModelChanged.bind(this)}>
                        <option value='12'>2106</option>
                        <option value='12'>2107</option>
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
                <footer></footer>
            </div>
                
        )
    }
}

export default Object