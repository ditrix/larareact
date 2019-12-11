import React, {Component} from 'react'
import axios from 'axios'

class Main extends Component {
    render(){
        return(
           <div className="app-form">
            <input type="submit" className="btn btn-primary" onClick={this.loadByAxios.bind(this)} value="send axios"/><hr />
            <input type="submit" className="btn btn-primary" onClick={this.loadByFetch.bind(this)} value="send fetch"/>
           </div>
    )}


    loadByAxios(e){
      //  e.preventDefault()
        console.log('LoadByAxios -----------------------------')
        axios.get('http://larareact/public/vehicle',
           {
		    headers: {
			    'Access-Control-Allow-Origin': '*',
			    'Content-Type': 'application/json',
		        },
             } 
             )
            .then(response => console.log('response: ', response))
            .catch(error => console.log('some error: ',error))
        console.log('--------------------------LoadByAxios') 
    }

    loadByFetch(e){
        e.preventDefault()
        console.log('loadByFetch ------------------------')

        const url = this.state.url
        let data = this.state.data        
        fetch(url, {
            method: 'POST', // или 'PUT'
            mode: 'no-cors',
            body: data, // данные могут быть 'строкой' или {объектом}!
            headers: {
			    'Access-Control-Allow-Origin': '*',
			    'Accept': 'application/json',
			    'Content-Type': 'application/json',

            }
          })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.log(error))

        console.log('------------------------ loadByFetch')

    }



}

export default Main