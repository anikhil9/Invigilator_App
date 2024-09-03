import React, { Component } from "react";
import {Link} from "react-router";
import "./App7.css";



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



class App7 extends Component {

  constructor(props) {

    super(props);



    this.state = {

      firstName: null,

      lastName:null,

      dob: null,

      gender:"Male",

      state:"Andhra Pradesh",

      district:null,

      email: null,
      check1: 1,
      password: null,
      proceed: 0,

      formErrors: {

        firstName: "",

        lastName: "",

        email: "",

        password: ""

      }

    };

  }



  handleSubmit = e => {
    this.getdata();
    e.preventDefault();

    console.log("hi");



    if (formValid(this.state)) {

      console.log(`

        --SUBMITTING--
        check: ${this.state.check1}
         Name: ${this.state.firstName}

         DOB: ${this.state.dob}
         
         Gender: ${this.state.gender}

         State: ${this.state.state}

         District: ${this.state.district}

        Email: ${this.state.email}

        Username: ${this.state.lastName}

        Password: ${this.state.password}

      `);
      alert("Thanks for sigingup");

    } 
    else {
      if(this.state.check1)
      alert("Incorrect entry");
      else
      alert("wrong username");
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");

    }

  };

 




  handleChange = e => {

    e.preventDefault();

    const { name, value } = e.target;

    let formErrors = { ...this.state.formErrors };



    switch (name) {

      case "firstName":

        formErrors.firstName =

        value.length < 2  ? "minimum characaters required" : "";

        break;

      case "lastName":
       
          this.getdata3(value,formErrors)
        

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

  };

  getdata=()=>{
    var data= new URLSearchParams();
    data.append("name",this.state.firstName)
    data.append("dob",this.state.dob)
    data.append("gender",this.state.gender)
    data.append("state",this.state.state)
    data.append("district",this.state.district)
    data.append("email",this.state.email)
     data.append("username",this.state.lastName)
    data.append("password",this.state.password)
    data.append("p",0)
    fetch("http://localhost:8001/signup",{
      method:'post',
      body:data
    })
   .then(response =>{return response.json()})
   .then(response =>{
    this.setState({check1:response.log})
    if(this.state.check1===0)
     alert("Wrong username")
   console.log(this.state.login)
})
}

// getdata2=(value)=>{
//   console.log(value)
//   var data1= new URLSearchParams();
//    data1.append("value",value)
//    fetch("http://localhost:8000/signup",{
//     method:'post',
//     body:data1
//   })
//  .then(response =>{return response.json()})
//  .then(response =>{
//   this.setState({proceed:response.log})
//    console.log("proceed"+this.state.proceed)
   
// })
// }
getdata3=(value,formErrors)=>{
console.log(value)
var data1= new URLSearchParams();
 data1.append("value",value)
 fetch("http://localhost:8000/signup",{
  method:'post',
  body:data1
})
.then(response =>{return response.json()})
.then(response =>{
this.setState({proceed:response.log})
 console.log("proceed"+this.state.proceed)
//  formErrors.lastName =

// this.state.proceed===1 ? "Should be unique" : ""
if(this.state.proceed===1)
alert("The entered username already exist please enter a new one ");
})
}
  render() {

    const { formErrors } = this.state;



    return (

      <div className="wrapper">

        <div className="form-wrapper">

          <h1>Create Account</h1>

          <form onSubmit={this.handleSubmit} noValidate>

            <div className="firstName">

              <label htmlFor="firstName" style={{marginTop:'20px'}}>Name</label>
               
              <input

                className={formErrors.firstName.length > 0 ? "error" : null}
                style={{marginLeft:"70px",marginTop:'-25px',marginBottom:'10px'}}
                placeholder="Name"

                type="text"

                name="firstName"

                noValidate

                onChange={this.handleChange}

              />

              {formErrors.firstName.length > 0 && (

                <span className="errorMessage">{formErrors.firstName}</span>

              )}

            </div>
           
            <div className="dob" style={{marginLeft:"-0px",marginTop:'-5px'}} >

              <label htmlFor="dob">DOB</label>

              <input

                //className={formErrors.lastName.length > 0 ? "error" : null}
                style={{marginLeft:"70px",marginTop:'-30px'}}
                placeholder="dob"

                type="date"

                name="dob"

                noValidate

                onChange={this.handleChange}

              />

              

            </div>
           
            <div classname="gender" style={{marginTop:'10px'}}>
            <label htmlFor="gender">GENDER  </label>
            <select style={{marginTop:'-15px',marginLeft:"15px"}}
            name ="gender"
            placeholder="gender"

                type="text"

                name="gender"

                noValidate

                onChange={this.handleChange}><option>Male</option>
                <option>Female</option>
                <option>Other</option></select>
                <br/><br/>


            </div>

            

            <div classname="state" style={{marginLeft:"0px",marginTop:'10px'}}>
            <label htmlFor="state" >STATE</label>
            <select 
            name ="state"
            placeholder="state"

                type="text"

                name="state"

                noValidate

                onChange={this.handleChange}><option>Andhra pradesh</option>
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
                <option>West Bengal</option></select>
                <br/><br/>


            </div>

            <br/>
            <div className="district"  style={{marginTop:'10px'}}>

              <label htmlFor="district">DISTRICT</label>

              <input

                //className={formErrors.lastName.length > 0 ? "error" : null}
                style={{marginLeft:"10px",marginTop:'-10px'}}
                placeholder="district"

                type="text"

                name="district"

                noValidate

                onChange={this.handleChange}

              />

            

            </div>
            <br/><br/>
            

            <div className="email"  style={{marginTop:'20px'}}>

              <label htmlFor="email">Email</label>

              <input

                className={formErrors.email.length > 0 ? "error" : null}
                style={{marginLeft:"70px",marginTop:'-30px'}}
                placeholder="Email"

                type="email"

                name="email"

                noValidate

                onChange={this.handleChange}

              />

              {formErrors.email.length > 0 && (

                <span className="errorMessage">{formErrors.email}</span>

              )}

            </div>
                  <div className="lastName">

              <label htmlFor="lastName" style={{marginTop:'20px'}}>Username</label>
               
              <input

                className={formErrors.lastName.length > 0 ? "error" : null}
                style={{marginLeft:"5px",marginTop:'0px',marginBottom:"20px"}}
                placeholder="UserName"

                type="text"

                name="lastName"

                noValidate

                onChange={this.handleChange}

              />

              {formErrors.lastName.length > 0 && (

                <span className="errorMessage">{formErrors.lastName}</span>

              )}

            </div>
            <div className="password"  style={{marginTop:'10px'}}>

              <label htmlFor="password">Password</label>

              <input

                className={formErrors.password.length > 0 ? "error" : null}
                style={{marginLeft:"70px",marginTop:'-30px'}}
                placeholder="Password"

                type="password"

                name="password"

                noValidate

                onChange={this.handleChange}

              />

              {formErrors.password.length > 0 && (

                <span className="errorMessage">{formErrors.password}</span>

              )}

            </div>

            <div className="createAccount">

              <button type="submit">Create Account</button>

              <small>Already Have an Account?</small>

            </div>

          </form>

        </div>

      </div>

    );

  }

}



export default App7;