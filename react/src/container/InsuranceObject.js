import React, {Component} from 'react' 
import {connect} from 'react-redux' 

import {actionSaveInsObject} from '../action/InsObjectAction'

import {checkIntegerStr,getCurrentYear} from '../lib/functions'

import FormHeader from './FormHeader'
import {QuestionDropdown} from '../component/templates/QuestionDropdown'

//import {markDS} from '../data/markds.js'
//import {modelDS} from '../data/modelds.js'

import {markDS} from '../data/devmarkds.js'
import {modelDS} from '../data/devmodelds.js'

// ввод даних про об'ект страхування
class InsuranceObject extends Component {
    constructor(props){
        super(props)
        this.state = {
            auto: this.props.vehicle,
            models:null,
            modelsLength:0,
            dataValid: false,

            msgValidMarka:'',
            msgValidModel:'',
            msgValidYear:'',
            msgValidNo:'',
            msgValidVin:'',            
        }
        this.validateData = this.validateData.bind(this)
        this.clearMessages = this.clearMessages.bind(this)
        this.saveData = this.saveData.bind(this) 
     
    }

    
    saveData(){
        // установить DMarkName DMarkID    DModelName    на основании    

        const markId = this.state.auto.DMarkID
  

        const markData = markDS.filter( item => item.id === markId )
        let markName = ''
        if(markData.length > 0){
            markName = markData[0].name 
        }
    
        const modelId = this.state.auto.DModelID
        const modelData = modelDS.filter( item => item.id === modelId )

        let modelName = ''
        if(modelData.length > 0){
            modelName = modelData[0].name 
        }

        
        
        const tmpState = this.state
        tmpState.auto.DMarkName = markName
        tmpState.auto.DModelName = modelName


        this.setState(tmpState)
        
 
    }



    getModelsList(DMarkID = '0'){
        let models = []
        modelDS.forEach(element => {
            if(element.mark_id === this.props.vehicle.DMarkID){
                models.push(element)
            }
        });
        return models     
    }


    validateData(){
        const tmpState = this.state
        const auto = this.state.auto;
        tmpState.dataValid = true
        if( ( +auto.ProdYear < 1950 ) || ( +auto.ProdYear > getCurrentYear()) ){
            tmpState.dataValid = false
            tmpState.msgValidYear= 'незаповнені, або некоректні данні'
        }

        if( (auto.RegNo.length === 0)|| (auto.RegNo.length > 10) ){
            tmpState.dataValid = false
            tmpState.msgValidNo = 'незаповнені, або некоректні данні'
        }

        if( (auto.VIN.length === 0)|| (auto.VIN.length > 20) ){
            tmpState.dataValid = false;
            tmpState.msgValidVin= 'незаповнені, або некоректні данні'
        }

        if((auto.DMarkID === '')||(auto.DMarkID === '0')){
            tmpState.dataValid = false;
            tmpState.msgValidMarka= 'незаповнені, або некоректні данні'
        }

        if((auto.DModelID === '')||(auto.DModelID === '0')||(auto.DModelID === 0)){
            tmpState.dataValid = false;
            tmpState.msgValidModel= 'незаповнені, або некоректні данні'
        }
        this.setState(tmpState)
      
    }

    clearMessages(){
        const tmpState = this.state
        tmpState.msgValidMarka = 
        tmpState.msgValidModel = 
        tmpState.msgValidYear = 
        tmpState.msgValidNo = 
        tmpState.msgValidVin = '';
        this.setState(tmpState)
    }

 
 
    handleNextButton(){
        this.validateData()
        this.saveData()
        this.props.saveParameters(this.state)

        if(this.state.dataValid){ 
             this.props.nextTab()
        }
    }    

    handleMarkaChanged(event){
        const DMarkID = event.currentTarget.value
        
        //console.log(event.currentTarget.selectedIndex)
      //  console.log(event.currentTarget.text)        

        const auto = this.state.auto
        auto.DMarkID = DMarkID
        auto.DModelID = 0
        const modelsArr = modelDS.filter(item => item.mark_id === DMarkID)
        this.setState({models:modelsArr,auto:auto,msgValidMarka:''})
    }

    handleModelChanged(event){
        const auto = this.state.auto
        const DModelID = event.currentTarget.value
        auto.DModelID = DModelID
        const selectedModel = this.state.models.filter(model=> model.DModelID === DModelID )
        auto.model = selectedModel.Name
        this.setState({auto:auto,msgValidModel:''})
    }

    handleNoChanged(event){
        const auto = this.state.auto
        auto.RegNo = event.currentTarget.value
        this.setState({auto:auto, msgValidNo:''})
    }

    handleVINChanged(event){
        const auto = this.state.auto
        auto.VIN = event.currentTarget.value
        this.setState({auto:auto, msgValidVin:''})
    }

    handleYearChanged(event){
        // контроль  нга цифр и длину
        if(checkIntegerStr(event.currentTarget.value,4)){
            const auto = this.state.auto
            auto.ProdYear = event.currentTarget.value
            this.setState({auto:auto})
        }
        this.setState({msgValidYear:''})
    }

    handleDescrChanged(event){
        const auto = this.state.auto
        auto.AutoDescr = event.currentTarget.value
        this.setState({auto:auto})
    }

    render(){
        const markArray = markDS
        const modelsArr =  this.getModelsList(this.state.auto.DMarkID) // modelDS.filter(item => item.mark_id = this.state.auto.DMarkID)
        return(
            <div className="make-polis-dialog">
                <header>
                    <FormHeader title="Об`єкт страхування" />            
                </header>
                <form  className="tab-form">    
                <main>
               
                <div className="input-object-form-row form-input-row">
                    <div className="select-widget">
                    <label className="block-label">марка:</label>
                    <div  className="select-input">
                    <select onChange={this.handleMarkaChanged.bind(this)} defaultValue={this.state.auto.DMarkID}>
                    <option key={0} value="0">---</option>
                        { markArray.map((mark,index) =>
                            <option key={index}  value={mark.id} >{mark.name}</option>      
                        )}
                    </select>
                    
                    </div>  
                    <span className="input-error-message">{this.state.msgValidMarka}</span>
                    </div>  
                    <div className="select-widget">
                    <label className="block-label">модель:</label>
                    <div  className="select-input">
                    <select onChange={this.handleModelChanged.bind(this)} defaultValue={this.state.auto.DModelID} >
                    <option key="0" value="0">---</option>
                    {(modelsArr)&&
                        modelsArr.map((model,index) =>
                            <option key={index} value={model.id}>{model.name}</option>
                    )}
                    </select>  
                    </div>
                    <span className="input-error-message">{this.state.msgValidModel}</span>
                    </div>  
                </div>                
                <div className="input-object-form-row">
                    <div className="form-input-item-sm">
                        <label className="block-label">рік випуску:</label>
                        <input 
                            value={this.state.auto.ProdYear} 
                            onChange={this.handleYearChanged.bind(this)} 
                        />
                        <span className="input-error-message">{this.state.msgValidYear}</span>
                    </div>

                    <div className="form-input-item-md">
                        <label className="block-label">держномер:</label>
                        <input 
                            value={this.state.auto.RegNo} 
                            onChange={this.handleNoChanged.bind(this)} 
                        />
                        <span className="input-error-message">{this.state.msgValidNo}</span>
                    </div>   
                                 
                    <div className="form-input-item-md">
                        
                        <label className="block-label">VIN:</label>
                        <div className="vin-widget">
                        <input 
                            value={this.state.auto.VIN} 
                            onChange={this.handleVINChanged.bind(this)} 

                        />
                        {QuestionDropdown('Vehicle Identification Number (VIN) - це унікальний ідентифікаційний номер автомобіля, в якому міститься 17 символів.')} 
                        </div> 
                        <span className="input-error-message">{this.state.msgValidVin}</span>
                    </div>                

                 </div>

                <div className="input-object-form-row">        
                    <label className="block-label">опис:</label>
                    <input value={this.state.auto.AutoDescr} onChange={this.handleDescrChanged.bind(this)} />
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


const mapStateToProps = store => {
    return {
        insobject: store.insobject,
        vehicle: store.parameters.vehicle,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveParameters: (vehicle) => dispatch(actionSaveInsObject(vehicle)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(InsuranceObject)

