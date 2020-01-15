import React, {Component} from 'react'
import {connect} from 'react-redux' 
import {PaySumm} from '../component/PaySumm'


class CommitPage extends Component {

    handleButtonCommitClick(){
        console.log('DOIT!')
    }

    render(){
        return(
            <div className="make-polis-dialog">
                <header>
                    <div className="title"><h3>Підтвердження</h3></div>
                    <div className="result">{PaySumm(100500,'ru')}</div>                    
                </header>
                <form  className="client-form container">    
                    <main>
                        <div className="row">
                            <div className="row">    
                                <div className="col-md-12"><h5>Параметри</h5></div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 debug">1</div>
                                <div className="col-md-6 debug">2</div>
                            </div>
                        </div>
                        <div>
                            <h5>Страхувальник</h5>
                        </div>
                        <div>
                            <h5>Об'єкт страхування</h5>
                        </div>
                    </main> 
                </form>
                <footer>
                    <button className="btn-main-form-navigate btn-next" 
                        onClick={this.handleButtonCommitClick.bind(this)} >оформити
                    </button>
                </footer>
            </div>    
        )
    }
}

export default CommitPage