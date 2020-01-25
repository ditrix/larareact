import React,{Component} from 'react'
import {connect} from 'react-redux'
import {actionSwitchLang} from '../action/AppStateAction'
import {store} from '../data/store'

class Lang extends Component {

	handleSetUa(e){
		e.preventDefault()
        //this.props.setLang('ua');
		store.lang = 'ua'
		this.props.switchLang('ua')
	}

	handleSetRu(e){
		e.preventDefault()
        //this.props.setLang('ru')
		store.lang = 'ru'
		this.props.switchLang('ru')
	}

	render(){
		
		return(
			<div className="header-switch-lang clearfix">
       <a  className={(this.props.lang==='ua')?"active-lang":"unactive-lang"} href={"/"} onClick={this.handleSetUa.bind(this)}>
       	<span>Укр</span>
       </a>
       <a  className={(this.props.lang==='ru')?"active-lang":"unactive-lang"} href={"/"} onClick={this.handleSetRu.bind(this)}>
       	<span>Рус</span>
       </a>
      </div>
		)
	}
}

const mapStateToProps = state => {
	return {
		lang: state.appstate.lang
	}
}


const mapDispatchToProps = dispatch => {
    return {
      switchLang: (lang) => dispatch(actionSwitchLang(lang)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Lang)