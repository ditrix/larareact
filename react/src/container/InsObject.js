import React, {Component} from 'react' 
import {checkIntegerStr,getCurrentYear} from '../lib/functions'

import {markList} from '../data/marks.js'
import {models} from '../data/models.js'
import {PaySumm} from '../component/PaySumm'


// ввод даних про об'ект страхування
class InsObject extends Component {
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
                markaId: 0,
                modelId: 0,
            },
            models:null,
            dataValid: false,

            msgValidMarka:'',
            msgValidModel:'',
            msgValidYear:'',
            msgValidNo:'',
            msgValidVin:'',            
        }
    }

    handleNextButton(){
        let dataValid= true;
        const auto = this.state.auto;
        
        if( ( +auto.year < 1950 ) || ( +auto.year > getCurrentYear()) ){
            dataValid = false;
            this.setState({msgValidYear: 'некорректні данні'})
        }

        if( (auto.no.length == 0)|| (auto.no.length > 10) ){
            dataValid = false;
            this.setState({msgValidNo: 'незаповнені, або некоректні данні'})
        }

        if( (auto.no.length == 0)|| (auto.no.length > 20) ){
            dataValid = false;
            this.setState({msgValidVin: 'незаповнені, або некоректні данні'})
        }

        auto.markaId = 100
        this.setState({auto:auto})

    }    


    componentDidMount(){
        console.log(this.state.auto)
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
        console.log('model changed',this.state.auto)
    }

    handleNoChanged(event){
        const auto = this.state.auto
        auto.no = event.currentTarget.value
        this.setState({auto:auto, msgValidNo:''})
    }

    handleVINChanged(event){
        const auto = this.state.auto
        auto.vin = event.currentTarget.value
        this.setState({auto:auto, msgValidVin:''})
    }

    handleYearChanged(event){
        // контроль  нга цифр и длину
        if(checkIntegerStr(event.currentTarget.value,4)){
            const auto = this.state.auto
            auto.year = event.currentTarget.value
            this.setState({auto:auto})
        }
        this.setState({msgValidYear:''})
    }

    handleDescrChanged(event){
        const auto = this.state.auto
        auto.descr = event.currentTarget.value
        this.setState({auto:auto})
    }

    render(){
        return(
            <div className="make-polis-dialog">
                <header>
                    <div className="title"><h3>Об`єкт страхування</h3></div>
                    <div className="result">{PaySumm(100500,'ru')}</div>                    
                </header>
                <form>    
                <main>
               
                <div className="input-object-form-row">
                    <div className="select-widget">
                    <label className="block-label">марка:</label>
                    <div  className="select-input">
                    <select onChange={this.handleMarkaChanged.bind(this)}>
                        {markList.map((mark,index) =>    
                            (mark.DMarkID === this.state.auto.markaID)?
                            <option key={index} selected value={mark.DMarkID}>{mark.Name}</option>
                            :<option key={index}  value={mark.DMarkID}>{mark.Name}</option>
                        )}
                    </select>
                    </div>  
                    </div>  
                    <div className="select-widget">
                    <label className="block-label">модель:</label>
                    <div  className="select-input">
                    <select onChange={this.handleModelChanged.bind(this)}>
                    
                    {(this.state.models)&&this.state.models.map((model) =>    
                        <option key={model.DModelID} value={model.DModelID}>{model.Name}</option>
                    )}
                    </select>  
                    </div>
                    </div>  
                </div>                
                <div className="input-object-form-row">
                    <div className="form-input-item-sm">
                        <label className="block-label">рік випуску:</label>
                        <input 
                            value={this.state.auto.year} 
                            onChange={this.handleYearChanged.bind(this)} 
                        />
                        <span className="input-error-message">{this.state.msgValidYear}</span>
                    </div>

                    <div className="form-input-item-md">
                        <label className="block-label">держномер:</label>
                        <input 
                            value={this.state.auto.no} 
                            onChange={this.handleNoChanged.bind(this)} 
                        />
                        <span className="input-error-message">{this.state.msgValidNo}</span>
                    </div>                

                    <div className="form-input-item-md">
                        <label className="block-label">VIN:</label>
                        <input 
                            value={this.state.auto.vin} 
                            onChange={this.handleVINChanged.bind(this)} 
                        />
                        <span className="input-error-message">{this.state.msgValidVin}</span>
                    </div>                

                </div>

                <div className="input-object-form-row">        
                    <div className="form-input-item-xxl">
                        <label className="block-label">опис:</label>
                        <input value={this.state.auto.descr} onChange={this.handleDescrChanged.bind(this)} />
                    </div>                
                </div>


                
                </main>
                </form>
                <footer>
                    <nav  className="clearfix">
                        <button className="btn-main-form-navigate btn-prev" 
                            onClick={this.props.prevTab} >попередня
                        </button>
                        <button className="btn-main-form-navigate btn-next" 
                            onClick={this.handleNextButton.bind(this)} >оформити
                        </button>
                    </nav>
            </footer>    
            </div>
                
        )
    }
}

export default InsObject