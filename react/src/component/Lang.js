import React,{Component} from 'react'
import {store} from '../data/store'

class Lang extends Component {

	handleSetUa(e){
		e.preventDefault()
        //this.props.setLang('ua');
        store.lang = 'ua'
	}

	handleSetRu(e){
		e.preventDefault()
        //this.props.setLang('ru')
        store.lang = 'ru'
	}

	render(){
		
		return(
			<div className="header-switch-lang clearfix">
       <a href={"/"} onClick={this.handleSetUa.bind(this)}>
       	<span className={(store.lang==='ua')?"active-lang":"unactive-lang"}>Укр</span>
       </a>
       <a href={"/"} onClick={this.handleSetRu.bind(this)}>
       	<span className={(store.lang==='ru')?"active-lang":"unactive-lang"}>Рус</span>
       </a>
      </div>
		)
	}
}

export default Lang