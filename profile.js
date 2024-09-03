import React from "react";
import './form_proj.css';
import {Link} from  'react-router-dom'
import H from './home'
import NewWindow from 'react-new-window'

class FormElementCombined extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value1: '', value2: '',value3: 'authorities',name:''};
        this.getdata = this.getdata.bind(this);
       
    }
    getdata=()=>
    {
      console.log("dffff,")
     var data= new URLSearchParams();
     data.append("name","ganesh")
     fetch("http://localhost:8001/profile",{
       method:'post',
       body:data
     })
    .then(response =>{return response.json()})
    .then(response =>{
     this.setState({name:response.name})
     
    console.log(this.state.name)
})
}

  render() {
        return (
           
        <div class='login' style={{marginTop:"-500px"}} >
            
                     {this.getdata()}
                <h1>hiS</h1>
                </div>
             
           
            
        )
    }
}
export default FormElementCombined
