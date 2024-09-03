import React from "react";
import './signupform.css';

import {Link} from "react-router";
import {Jumbotron,Row,Col,Image,Button,Container,Grid,Carousel} from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar'
const emailRegex = RegExp(

    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  
  );

  const formValid = ({ formErrors, ...rest }) => {

    let valid = true;
  
  
  
    // validate form errors being empty
  
    Object.values(formErrors).forEach(val => {
  
      val.length > 0 && (valid = false);
  
    });
  
  
  
    // validate the form was filled out
  
    Object.values(rest).forEach(val => {
  
      val === null && (valid = false);
  
    });
  
  
  
    return valid;
  
  };

class FormElementCombined extends React.Component {

    constructor(props) {
        super(props);
        this.state = { firstName: '', dob: '',gender: '', state: '',district: '', email: '',username: '', password: '', formErrors: {

            firstName: "",

            dob:"",

            gender : "",

            state :"",

            district:"",
    
            email: "",

            username:"",
    
            password: ""
    
          }};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        e.preventDefault();

        const { name, value } = e.target;
    
        let formErrors = { ...this.state.formErrors };
    
    
    
        switch (name) {
    
          case "firstName":
    
            formErrors.firstName =
    
              value.length < 3 ? "minimum characaters required" : "";
    
            break;
    
          case "lastName":
    
            formErrors.lastName =
    
              value.length < 3 ? "minimum 3 characaters required" : "";
    
            break;
    
          case "email":
    
            formErrors.email = emailRegex.test(value)
    
              ? ""
    
              : "invalid email address";
    
            break;
    
          case "password":
    
            formErrors.password =
    
              value.length < 6 ? "minimum 6 characaters required" : "";
    
            break;
    
          default:
    
            break;
    
        }
    
    
    
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    
    }

    handleSubmit =e => {
        this.getdata();
        e.preventDefault();
    
    
    
        if (formValid(this.state)) {
    
          console.log(`
    
            --SUBMITTING--
    
             Name: ${this.state.firstName}
    
             DOB: ${this.state.dob}
             
             Gender: ${this.state.gender}
    
             State: ${this.state.state}
    
             District: ${this.state.district}
    
            Email: ${this.state.email}
    
            Password: ${this.state.password}
    
          `);
    
        } else {
    
          console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    
        }
    };
    getdata=()=>{
          var data= new URLSearchParams();
        data.append("name",this.state.name)
        data.append("dob",this.state.dob)
        data.append("gender",this.state.gender)
        data.append("state",this.state.state)
        data.append("district",this.state.district)
        data.append("email",this.state.email)
        data.append("username",this.state.value7)
        data.append("password",this.state.password)
        fetch("http://localhost:8000/signup",{
          method:'post',
          body:data
        })
       .then(response =>{return response.json()})
       .then(response =>{
        this.setState({login:response.log})
        this.displayPage(this.state.login);
       console.log(this.state.login)
   })
   }
    render() {
        return (
        
   <div>          <ProgressBar striped variant="success" now={40} />
 
        <div class='hh'  >
                     <form  onSubmit={this.handleSubmit} name="myform">
                         
                         <h1>Sign Up</h1> 
                          <hr></hr>   
                        
                          
                     <p style={{marginTop:"10px"}}><span>ppp</span><input type="text" value={this.state.firstName} name="name" placeholder='Name' onChange={this.handleChange} style={{width:"600px",marginLeft:"120px",height:"30px",borderRadius:"50px"}}/></p><br></br>
                     <p style={{marginTop:"10px"}}><span>DOB</span> <input type="date" value={this.state.dob} name="dob" placeholder='DOB' onChange={this.handleChange} style={{width:"250px",marginLeft:"125px",height:"30px",borderRadius:"50px",marginTop:"10px"}}/></p> 
                     <p ><span style={{marginTop:"100px"}}>Gender</span><select  name='gender' value={this.state.gender} onChange={this.handleChange} style={{width:"250px",marginLeft:"110px",height:"30px",borderRadius:"50px",marginTop:"30px"}}>
                                     <option>Male</option>
                                     <option>Female</option>
                                     <option>Other</option>
                                     </select>
                                     </p>
                    <p style={{marginTop:"30px"}}><span>State</span><select  name='state' value={this.state.state} onChange={this.handleChange} style={{width:"250px",marginLeft:"130px",height:"30px",borderRadius:"50px"}}>
                                     <option>Andhra pradesh</option>
                                     <option>Arunachal Pradesh</option>
                                     <option>Assam</option>
                                     <option>Bihar</option>
                                     <option>Chhattisgarh</option>
                                     <option>Goa</option>
                                     <option>Gujarat</option>
                                     <option>Haryana</option>
                                     <option>Himachal Pradesh</option>
                                     <option>Jammu and Kashmir</option>
                                     <option>Jharkhand</option>
                                     <option>Karnataka</option>
                                     <option>Kerala</option>
                                     <option>Madhya Pradesh</option>
                                     <option>Maharashtra</option>
                                     <option>Manipur</option>
                                     <option>Meghalaya</option>
                                     <option>Mizoram</option>
                                     <option>Nagaland</option>
                                     <option>Odisha</option>
                                     <option>Punjab</option>
                                     <option>Rajasthan</option>
                                     <option>Sikkim</option>
                                     <option>Tamil Nadu</option>
                                     <option>Telangana</option>
                                     <option>Tripura</option>
                                     <option>Uttar Pradesh</option>
                                     <option>Uttarkhand</option>
                                     <option>West Bengal</option>
                                     </select>
                                   
                   <span style={{marginLeft:"10px"}}>District</span><input type="text" value={this.state.district} name="district" placeholder='District' onChange={this.handleChange} style={{width:"250px",marginLeft:"30px",height:"30px",borderRadius:"50px"}}/></p>
                   <p><span>E-Mail</span><input type="text" value={this.state.email} name="email" placeholder='E-mail' onChange={this.handleChange} style={{width:"300px",marginLeft:"115px",height:"30px",borderRadius:"50px"}} /> </p> 
                   <p><span>Username</span><input type="text" value={this.state.value7} name="uname" placeholder='Username' onChange={this.handleChange} style={{width:"250px",marginLeft:"95px",height:"30px",borderRadius:"50px"}}/></p>  
                   <p><span>Password</span><input type="password" value={this.state.password} name="password" placeholder='Password' onChange={this.handleChange} style={{width:"250px",marginLeft:"95px",height:"30px",borderRadius:"50px"}}/></p>  
                   <p><span>Confirm Passowrd</span><input type="password" value={this.state.value9} name="cpass" placeholder='Confirm Password' onChange={this.handleChange} style={{width:"250px",marginLeft:"30px",height:"30px",borderRadius:"50px"}}/></p>  
                 <div className="bb"><input type="submit" value="submit" /></div> 
                </form>
                </div>
                </div>
           
            
        )
    }
}
export default FormElementCombined
