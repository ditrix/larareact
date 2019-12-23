import React, {Component} from 'react'
import {GetK1} from '../component/GetK1'
import {GetTaxi} from '../component/GetTaxi'
import {GetPrivilege} from '../component/GetPrivilege'
import GetOtk from '../component/GetOtk'

class Parameters extends Component{
    constructor(props){
        super(props)
        this.state = {
            k1Value: '',
            isTaxi: false,
            isPrivileg:false,
            isOtk: false,
        }
    }
    render(){
        return(
            <form className="polis-parameters">
               <GetK1 />
                
               <GetPrivilege />
                
               <GetTaxi />
                
               <GetOtk />
            </form>   
        )
    }
}

export default Parameters
