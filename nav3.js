import React, { useState,Component ,ReactRadioButtonGroup} from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import {Jumbotron,Row,Col,Image,Button,Container,Grid,OverlayTrigger,Nav,Modal,Radio} from 'react-bootstrap';
import { withRouter } from "react-router"
import PropTypes from "prop-types"
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import './nav3.css'
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


class NavbarPage2 extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      }
    constructor(props) {
        super(props);
        this.state = { firstName: null,

          lastName:null,
    
          dob: null,
    
          gender:"Male",
    
          state:"Andhra Pradesh",show: false,show1 : false,  check1: 1,proceed: 0,show2 : false,show3 : false ,setShow: "false",pname:'',pdob:'',pemail:'',pgender:'',pstate:'',pdistrict:'',name:'',dob:'',email:'',district:'',f1:'',f2:'',f3:'',f4:'',f5:'',selectedValue :'',a:'',b:'',c:'',d:'',e:'',value:'',value1:'',
        formErrors: {
  
          firstName: "",
  
          lastName: "",
  
          email: "",
  
          password: ""
  
        }
      };
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose1 = this.handleClose1.bind(this);
        this.handleShow1 = this.handleShow1.bind(this);
        this.handleClose2 = this.handleClose2.bind(this);
        this.handleShow2 = this.handleShow2.bind(this);
        this.handleClose3 = this.handleClose3.bind(this);
        this.handleShow3 = this.handleShow3.bind(this);
        this.handleSwitch2 = this.handleSwitch2.bind(this);
        this.handleSwitch3 = this.handleSwitch3.bind(this);
        this.handleChange1=this.handleChange1.bind(this);
        this.displayPage = this.displayPage.bind(this);
      }

      handleSubmit =e => {
      
   
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
          this.getdata3();
        } 
        else {
          if(this.state.check1)
          alert("Incorrect entry");
          else
          alert("wrong username");
          console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    
        }
    };
//
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
     
        this.getdata4(value,formErrors)
      

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
//
      handleChange1(event) {
        if (event.target.name === "complain"){
          this.setState({value: event.target.value});
          }
          if (event.target.name === "subject"){
            this.setState({value1: event.target.value});
            }
            if (event.target.name === "f1") {
              const re = /^[1-5\b]+$/;
          if (event.target.value === '' || re.test(event.target.value)) {
             this.setState({f1:event.target.value})
          }
          }
          if (event.target.name === "f2") {
            const re = /^[1-5\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
           this.setState({f2:event.target.value})
        }
        }
        if (event.target.name === "f3") {
          const re = /^[1-5\b]+$/;
      if (event.target.value === '' || re.test(event.target.value)) {
         this.setState({f3:event.target.value})
      }
      }
      if (event.target.name === "f4") {
        const re = /^[1-5\b]+$/;
    if (event.target.value === '' || re.test(event.target.value)) {
       this.setState({f4:event.target.value})
    }
    }
    if (event.target.name === "f5") {
      const re = /^[1-5\b]+$/;
  if (event.target.value === '' || re.test(event.target.value)) {
     this.setState({f5:event.target.value})
  }
  }
      }
       handleClose() 
       { 
        
           this.setState({ show: false });
           
       }
       handleShow() 
       {
            this.setState({ show: true });
        }
    
        getdata=()=>{
            console.log(this.state.username)
            var data= new URLSearchParams();
            data.append("name",this.state.username)
            data.append("p","0")
            fetch("http://localhost:8000/",{
              method:'post',
              body:data
            })
           .then(response =>{return response.json()})
           .then(response =>{
            this.setState({pname:response.name})
            this.setState({pdob:response.dob})
            this.setState({pemail:response.email})
            this.setState({pgender:response.gender})
            this.setState({pstate:response.state})
            this.setState({pdistrict:response.district})
           console.log(this.state.pname)
           console.log(this.state.pdob)
           console.log(this.state.pemail)
           this.handleShow()
   })
   }

   handleClose1() 
       { 
        
           this.setState({ show1: false });
           this.getdata1()
       }
       handleShow1() 
       {
            this.setState({ show1: true });
        }

   getdata1=()=>{
    console.log("hi feedback")
    var data= new URLSearchParams();
    data.append("name",this.state.username)
    data.append("f1",this.state.f1)
    data.append("f2",this.state.f2)
    data.append("f3",this.state.f3)
    data.append("f4",this.state.f4)
    data.append("f5",this.state.f5)
    data.append("p","1")
    fetch("http://localhost:8000/",{
      method:'post',
      body:data
    })
}

handleClose2() 
       { 
        
           this.setState({ show2: false });
           this.getdata2()
           
       }
handleShow2() 
       {
            this.setState({ show2: true });
        }

 getdata2=()=>{
    console.log(this.state.username)
    console.log(this.state.value1)
    var data= new URLSearchParams();
    data.append("value",this.state.value)
    data.append("subject",this.state.value1)
    data.append("name",this.state.username)
    data.append("p","2")
    fetch("http://localhost:8000/",{
      method:'post',
      body:data
    })
   .then(response =>{return response.json()})
}
//
getdata5=()=>{
  console.log("method5")
  alert("Your Complaint has been downloaded ,You can Use it as your proof")
  console.log(this.state.value1)
  var data= new URLSearchParams();
  data.append("value",this.state.value)
  data.append("subject",this.state.value1)
  data.append("name",this.state.username)
  data.append("p","5")
  fetch("http://localhost:8000/",{
    method:'post',
    body:data
  })
 
}
//
handleClose3()
       { 
        
           this.setState({ show3: false });
            this.getdata3()
           
       }

handleSwitch2() 
       {
       this.handleClose2();
       this.getdata3();
        }
handleShow3() 
       {
              this.setState({ show3: true });
        }

        getdata3=()=>{
          console.log("hi gsddhshd")
          var data= new URLSearchParams();
          data.append("name",this.state.username)
          data.append("pname",this.state.firstName)
          data.append("p","8")
           fetch("http://localhost:8000/",{
            method:'post',
            body:data
          })
        
      }
      getdata4=(value,formErrors)=>{
      console.log(value)
      var data1= new URLSearchParams();
       data1.append("value",value)
       data1.append("p","1")
       fetch("http://localhost:8000/signup",{
        method:'post',
        body:data1
      })
      .then(response =>{return response.json()})
      .then(response =>{
      this.setState({proceed:response.log})
       console.log("proceed"+this.state.proceed)
      if(this.state.proceed===1)
      alert("The entered username already exist please enter a new one ");
      })
      }
handleSwitch3()
{
  this.getdata6()

}
      getdata6=(value,formErrors)=>{
        console.log(value)
        var data1= new URLSearchParams();
         data1.append("name",this.state.username)
         data1.append("p","7")
         fetch("http://localhost:8000/",{
          method:'post',
          body:data1
        })
          console.log("proceed"+this.state.proceed)
           
      }
        
      displayPage=() =>//displayPage is a function with some flag variable(index) as a param
      {
                    return   this.props.history.push('/n')
      }

render() {
  this.state.username=this.props.location.state.detail
  return (
      <div style={{backgroundcolor: "rgb(71, 68, 68)",marginLeft:"10px",marginRight:"1100px",borderRadius:"10px",marginTop:"30px",border:"3px solid grey"}} className="a">
<Nav  className="flex-column" style={{marginLeft:"30px",paddingRight:"50px"}}>
<Image src={require('./Min.jpg')}  roundedCircle  width="100px" height="100px" style={{marginTop:"40px",marginLeft:"50px",marginBottom:"50px",marginRight:"-50px"}}/>
  {/* <Nav.Link href="/news" className="a">profile</Nav.Link> */}

  <Button variant="primary" onClick={this.getdata}>
        Profile
      </Button>
 <Modal show={this.state.show} onHide={this.handleClose} style={{color:"black",fontSize:"20px"}}>
        <Modal.Header closeButton>
          <Modal.Title><center>USER PROFILE</center></Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <pre> Name :  {this.state.pname}</pre>
           <br></br>
           <br></br>
           <pre> Date of Birth :  {this.state.pdob}</pre>
           <br></br>
           <br></br>
           <pre> Gender :  {this.state.pgender}</pre>
           <br></br>
           <br></br>
           <pre> Email :  {this.state.pemail}</pre>
           <br></br>
           <br></br>
           <pre> State :  {this.state.pstate}</pre>
           <br></br>
           <br></br>
           <pre> District :  {this.state.pdistrict}</pre>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
            <Button variant="primary" onClick={this.handleShow3}style={{marginTop:"10px"}}>
            Update Name
          </Button>
      <Modal show={this.state.show3} onHide={this.handleClose} style={{color:"black",fontSize:"20px"}}>
        <Modal.Header closeButton>
          <Modal.Title><center>Enter name</center></Modal.Title>
        </Modal.Header>
        <Modal.Body>
     
        <div className="wrapper" style={{marginTop:"50px",marginBottom:"50px"}}>
        Name<input
        style={{marginLeft:"70px",marginTop:'-25px',marginBottom:'10px'}}
         placeholder="Name"

type="text"

name="firstName"

noValidate

onChange={this.handleChange}

/>

</div>  
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.handleClose3}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
<br></br>
<Nav.Link eventKey="/remove" className="a" onClick={this.handleSwitch3}>Remove Your Credentials from account</Nav.Link>
      <br></br>
  <hr className="a"></hr>
  <Nav.Link eventKey="/feedback" className="a" onClick={this.handleShow1}>Feedback</Nav.Link>

  <Modal show={this.state.show1} onHide={this.handleClose1} style={{color:"black",fontSize:"20px"}}>
        <Modal.Header submitButton>
          <Modal.Title><center>Feedback</center></Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <div class='feedback'> 
           {/* <form id="form2" onSubmit={this.handleSubmit} name="fbform"  >
             <pre>How much would you rate for Health care<br></br>Activities taken by Safe Waste Management<br></br>Authorities ?</pre>
             <input type="radio"  name='a5' value={this.state.a5} checked={true} onChange={this.handleChange} />
            5
            <input type="radio" value="a4"  />
            4
            <input type="radio" value="a3" />
            3
            <input type="radio" value="a2"  />
            2
            <input type="radio" value="a1" />
            1
            </form> */}
            <pre>1) How much would you rate for the health care<br></br>Activities taken by Safe Waste Management<br></br>Authorities?</pre>
            <input type="text" value={this.state.f1} name="f1"  placeholder='' onChange={this.handleChange1} /> <br/><br/>
            <pre><br></br>2) How much would you rate for the Waste<br></br>Transport Facilities done properly and by time ?<br></br>Authorities?</pre>
            <input type="text" value={this.state.f2} name="f2"  placeholder='' onChange={this.handleChange1} /> <br/><br/>
            <pre><br></br>3) How much would you rate for the Waste<br></br>collected and managed seperately based on <br></br>biodegradable and non-biodegradable?</pre>
            <input type="text" value={this.state.f3} name="f3"  placeholder='' onChange={this.handleChange1} /> <br/><br/>
            <pre><br></br>4) How much would you rate for the health care<br></br>Activities taken by Safe Waste Management<br></br>Authorities?</pre>
            <input type="text" value={this.state.f4} name="f4"  placeholder='' onChange={this.handleChange1} /> <br/><br/>
            <pre><br></br>5) How much would you rate for the health care<br></br>Activities taken by Safe Waste Management<br></br>Authorities?</pre>
            <input type="text" value={this.state.f5} name="f5"  placeholder='' onChange={this.handleChange1} /> <br/><br/>
           </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.handleClose1}>
            submit
          </Button>
        </Modal.Footer>
      </Modal>
      <br></br>

  <hr className="a"></hr>
  <Nav.Link eventKey="/complaint" className="a" onClick={this.handleShow2}>Complaints</Nav.Link>

  <Modal show={this.state.show2} onHide={this.handleClose2} style={{color:"black",fontSize:"20px"}}>

        <Modal.Header closeButton>
          <Modal.Title><center>Complaint</center></Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <pre> Please enter your complaint</pre>
           <br></br>
           <br></br>
           <form >
        <label>
        <p style={{marginTop:"-40px",marginBottom:"-30px"}}>Subject:</p> 
        <input type="text" value={this.state.value1} name="subject"  placeholder='subject' onChange={this.handleChange1} style={{marginTop:"-40px",marginBottom:"-30px",marginLeft:"170px"}}></input> <br/><br/>
         <p>Explaination:</p> 
          <textarea value={this.state.value} onChange={this.handleChange1} name="complain" placeholder='Reason' rows="10" cols="30" style={{marginTop:"-40px",marginBottom:"-30px",marginLeft:"170px"}}/>
        </label>
          </form>
          </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={this.handleSwitch2}>
            Download
          </Button> 
          <Button variant="primary" onClick={this.handleClose2}>
            Submit
          </Button> 
        </Modal.Footer>
          </Modal>

  <hr className="a"></hr>
  <Nav.Link eventKey="/home" href="/form_proj" className="a">Logout</Nav.Link>
</Nav>
</div>
    );
  }
}

export default NavbarPage2;