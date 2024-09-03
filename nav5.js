import React, { useState,Component ,ReactRadioButtonGroup} from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import {Jumbotron,Row,Col,Image,Button,Container,Grid,OverlayTrigger,Nav,Modal,Radio,Card} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import { withRouter } from "react-router"
import PropTypes from "prop-types"
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import './nav3.css'


class NavbarPage2 extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      }
    constructor(props) {
        super(props);
        this.state = { show: false,show1 : false,show2 : false ,setShow: "false",name:'',dob:'',email:'',gender:'',state:'',district:'',selectedValue :'',a:'',b:'',c:'',d:'',e:'',value:'',value1:'',subject:[],reason:[],pname:[],list:[],value2:'',value3:'',value4:'',value5:'',value6:'',value7:'',value8:'',value9:'',value10:'',value11:'',value12:'',value13:'',value14:'',value15:'',value16:'',value17:'',value18:''};
        this.handleClose1 = this.handleClose1.bind(this);
        this.handleShow1 = this.handleShow1.bind(this);
        this.handleClose2 = this.handleClose2.bind(this);
        this.handleShow2 = this.handleShow2.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.display=this.display.bind(this);
      }
      handleChange(event) {
        if (event.target.name === "complain"){
        this.setState({value: event.target.value});
        }
        if (event.target.name === "subject"){
          this.setState({value1: event.target.value});
          }
            if (event.target.name === "timeperiod"){
              this.setState({value2: event.target.value});
            }
            if (event.target.name === "o_waste") {
              const re = /^[0-9\b]+$/;
          if (event.target.value === '' || re.test(event.target.value)) {
             this.setState({value3:event.target.value})
          }
          }
          if (event.target.name === "l_waste") {
            const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
           this.setState({value4:event.target.value})
        }
        }
        if (event.target.name === "s_waste") {
          const re = /^[0-9\b]+$/;
      if (event.target.value === '' || re.test(event.target.value)) {
         this.setState({value5:event.target.value})
      }
      }
      if (event.target.name === "h_waste") {
        const re = /^[0-9\b]+$/;
    if (event.target.value === '' || re.test(event.target.value)) {
       this.setState({value6:event.target.value})
    }
    }
    if (event.target.name === "r_waste") {
      const re = /^[0-9\b]+$/;
  if (event.target.value === '' || re.test(event.target.value)) {
     this.setState({value7:event.target.value})
  }
  }
  if (event.target.name === "o_compliant") {
    const re = /^[0-9\b]+$/;
if (event.target.value === '' || re.test(event.target.value)) {
   this.setState({value8:event.target.value})
}
}
if (event.target.name === "l_compliant") {
  const re = /^[0-9\b]+$/;
if (event.target.value === '' || re.test(event.target.value)) {
 this.setState({value9:event.target.value})
}
}
if (event.target.name === "s_compliant") {
  const re = /^[0-9\b]+$/;
if (event.target.value === '' || re.test(event.target.value)) {
 this.setState({value10:event.target.value})
}
}
if (event.target.name === "h_compliant") {
  const re = /^[0-9\b]+$/;
if (event.target.value === '' || re.test(event.target.value)) {
 this.setState({value11:event.target.value})
}
}
if (event.target.name === "r_compliant") {
  const re = /^[0-9\b]+$/;
if (event.target.value === '' || re.test(event.target.value)) {
 this.setState({value12:event.target.value})
}
}
            if (event.target.name === "o_m") {
              //const re = /^[a-z\b]+$/;
         // if (event.target.value === '' || re.test(event.target.value)) {
             this.setState({value13:event.target.value})
         // }
          }
          if (event.target.name === "l_m") {
            //const re = /^[a-z\b]+$/;
       // if (event.target.value === '' || re.test(event.target.value)) {
           this.setState({value14:event.target.value})
       // }
        }
        if (event.target.name === "s_m") {
        //  const re = /^[a-z\b]+$/;
   // if (event.target.value === '' || re.test(event.target.value)) {
         this.setState({value15:event.target.value})
     // }
      }
      if (event.target.name === "h_m") {
      //  const re = /^[a-z\b]+$/;
   // if (event.target.value === '' || re.test(event.target.value)) {
       this.setState({value16:event.target.value})
    //}
    }
    if (event.target.name === "r_m") {
   //   const re = /^[a-z\b]+$/;
//  if (event.target.value === '' || re.test(event.target.value)) {
     this.setState({value17:event.target.value})
 // }
  }
  if (event.target.name === "mm") {
  //  const re = /^[a-z\b]+$/;
//if (event.target.value === '' || re.test(event.target.value)) {
   this.setState({value18:event.target.value})
//}
}

      }
         
   handleClose1() 
       { 
        
           
        
        if (this.state.value2 === '' || this.state.value3 === ''||this.state.value4 === '' || this.state.value5 === ''|| this.state.value6 === ''||this.state.value7 === '' || this.state.value8 === ''|| this.state.value9 === ''||this.state.value10 === '' || this.state.value11 === ''|| this.state.value12 === ''||this.state.value13 === '' || this.state.value14 === ''|| this.state.value15 === ''||this.state.value16 === '' || this.state.value17 === ''|| this.state.value18 === '')
        {
          alert("please enter the values ")
         }
         else
         {
          this.setState({ show1: false });
          this.getdata1()
         }
        
       }
       handleShow1() 
       {
            this.setState({ show1: true });
        }

   getdata1=()=>{
    console.log(this.state.username)
    console.log(this.state.value2)
    console.log(this.state.value3)
    console.log(this.state.value4)
    console.log(this.state.value5)
    console.log(this.state.value6)
    console.log(this.state.value7)
    console.log(this.state.value8)
    console.log(this.state.value9)
    console.log(this.state.value10)
    console.log(this.state.value11)
    console.log(this.state.value12)
    console.log(this.state.value13)
    console.log(this.state.value14)
    console.log(this.state.value15)
    console.log(this.state.value16)
    console.log(this.state.value17)
    console.log(this.state.value18)

    var data= new URLSearchParams();
    data.append("name",this.state.username)
    data.append("value2",this.state.value2)
    data.append("value3",this.state.value3)
    data.append("value4",this.state.value4)
    data.append("value5",this.state.value5)
    data.append("value6",this.state.value6)
    data.append("value7",this.state.value7)
    data.append("value8",this.state.value8)
    data.append("value9",this.state.value9)
    data.append("value10",this.state.value10)
    data.append("value11",this.state.value11)
    data.append("value12",this.state.value12)
    data.append("value13",this.state.value13)
    data.append("value14",this.state.value14)
    data.append("value15",this.state.value15)
    data.append("value16",this.state.value16)
    data.append("value17",this.state.value17)
    data.append("value18",this.state.value18)
    data.append("p","4")
    fetch("http://localhost:8000/",{
      method:'post',
      body:data
    })
   .then(response =>{return response.json()})
   .then(response =>{
    this.setState({name:response.name})
    this.setState({dob:response.dob})
    this.setState({email:response.email})
    this.setState({gender:response.gender})
    this.setState({state:response.state})
    this.setState({district:response.district})
   console.log(this.state.name)
   console.log(this.state.dob)
   console.log(this.state.email)
   })
}

handleClose2() 
       { 
        
           this.setState({ show2: false });
           
       }
handleShow2() 
       {
        console.log("hi nbye");
            this.setState({ show2: true });
        }

 getdata2=()=>{
   
    console.log(this.state.value)
    console.log("hi from survey");
    var data= new URLSearchParams();
    data.append("name",this.state.username)
    data.append("p","3")
    fetch("http://localhost:8000/",{
      method:'post',
      body:data
    })
   .then(response =>{return response.json()})
   .then(response =>{
    this.setState({pname:response.pname})
    this.setState({subject:response.subject})
    this.setState({reason:response.reason})
     console.log(this.state.pname)
   console.log(this.state.subject)
   console.log(this.state.reason)
   this.handleShow2()
})
}
display() 
       {
         var n= this.state.pname.length
           console.log("kokks");
            for(var i=0;i<n;i++)
            {
              return   (this.state.pname.pop(1))
            }
        }

render() {
  this.state.username=this.props.location.state.detail
  var n= this.state.pname.length
  var n1= this.state.subject.length
  var n2= this.state.reason.length
  return (
      
      <div style={{backgroundcolor: "rgb(71, 68, 68)",marginLeft:"10px",marginRight:"1100px",borderRadius:"10px",marginTop:"30px",border:"3px solid grey"}} className="a">
<Nav  className="flex-column" style={{marginLeft:"30px",paddingRight:"50px"}}>
<Image src={require('./Min.jpg')}  roundedCircle  width="100px" height="100px" style={{marginTop:"40px",marginLeft:"50px",marginBottom:"50px",marginRight:"-50px"}}/>
  {/* <Nav.Link href="/news" className="a">profile</Nav.Link> */}
<br></br>
  <hr className="a"></hr>
  <Nav.Link eventKey="/feedback" className="a" onClick={this.handleShow1}>Generate a Report</Nav.Link>

  <Modal show={this.state.show1} onHide={this.handleClose1} style={{color:"black",fontSize:"20px"}}>
        <Modal.Header submitButton>
          <Modal.Title><center>Report</center></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class='Report'  >
                     <form  name="myform" method="get">
    
                 <p style={{marginleft:"70px",marginTop:"30px"}}>Time Period :   </p>  
                 
               <input type="date" value={this.state.value2} name="timeperiod" placeholder='00:00' onChange={this.handleChange} style={{marginTop:"30px",marginleft:"55px"}}/> <br/><br/>
                    <hr></hr>
                 <p style={{marginTop:"30px"}}><b>Amount of waste generated :</b></p>   
                  <br></br>
                 <p style={{marginTop:"80px",marginLeft:"-235px"}}> Organic Waste :</p>
                 
                 <input type="text" value={this.state.value3} name="o_waste"  placeholder='Organic Waste' onChange={this.handleChange} style={{marginTop:"80px"}}/>  
                   <p style={{marginTop:"50px",marginLeft:"45px"}}>Liquid Waste :</p>  <input type="text" value={this.state.value4} name="l_waste"  placeholder='Liquid Waste' onChange={this.handleChange} style={{marginTop:"50px"}}/>  
                   <p style={{marginTop:"50px",marginLeft:"45px"}}>Solid Waste :</p> <input type="text" value={this.state.value5} name="s_waste"  placeholder='Solid Waste' onChange={this.handleChange} style={{marginTop:"50px",marginLeft:"45px"}}/> 
                   <p style={{marginTop:"50px",marginLeft:"45px"}}>Hazardous Waste :</p> <input type="text" value={this.state.value6} name="h_waste"  placeholder='Hazardous Waste' onChange={this.handleChange} style={{marginTop:"50px"}}/> 
                   <p style={{marginTop:"50px",marginLeft:"45px"}}>Recyclable Waste :</p> <input type="text" value={this.state.value7} name="r_waste"  placeholder='Recyclable Waste' onChange={this.handleChange} style={{marginTop:"50px"}}/> 
                    
                   <p style={{marginleft:"70px",marginTop:"30px"}}><b> Number of compliants filed :</b></p><br></br>

                    <p style={{marginTop:"80px",marginLeft:"-245px"}}>Service :</p>
                    <input type="text" value={this.state.value8} name="o_compliant"  placeholder='' onChange={this.handleChange} style={{marginTop:"80px"}}/> <br/><br/> 
                    <p style={{marginTop:"40px",marginLeft:"55px"}}>Regularity :</p>
                     <input type="text" value={this.state.value9} name="l_compliant"  placeholder='' onChange={this.handleChange} />  
                     <p style={{marginTop:"40px",marginLeft:"55px"}}>Behaviour :</p> 
                     <input type="text" value={this.state.value10} name="s_compliant"  placeholder='' onChange={this.handleChange} /> 
                    <p style={{marginTop:"40px",marginLeft:"55px"}}>Seperation :</p>
                    <input type="text" value={this.state.value11} name="h_compliant"  placeholder='' onChange={this.handleChange} /> 
                   <p style={{marginTop:"40px",marginLeft:"55px"}}>Maintenance :</p> <input type="text" value={this.state.value12} name="r_compliant"  placeholder='' onChange={this.handleChange} />

                    <p><b>Are the measures taken properly ? (yes/no) :</b></p><br></br>

                  <p style={{marginTop:"40px",marginLeft:"55px"}}>Oraganic Waste :</p>  
                  <input type="text" value={this.state.value13} name="o_m"  placeholder='yes/no' onChange={this.handleChange} /> <br/><br/> 
                  <p style={{marginTop:"40px",marginLeft:"55px"}}>Liquid Waste :</p> 
                  <input type="text" value={this.state.value14} name="l_m"  placeholder='yes/no' onChange={this.handleChange} />  
                  <p style={{marginTop:"40px",marginLeft:"55px"}}>Solid Waste :</p>
                  <input type="text" value={this.state.value15} name="s_m"  placeholder='yes/no' onChange={this.handleChange} /> 
                  <p style={{marginTop:"40px",marginLeft:"55px"}}>Hazardous Waste :</p>
                  <input type="text" value={this.state.value16} name="h_m"  placeholder='yes/no' onChange={this.handleChange} style={{marginLeft:"-5px"}}/> 
                   <p style={{marginTop:"40px",marginLeft:"55px"}}>Recyclable Waste :</p>
                   <input type="text" value={this.state.value17} name="r_m"  placeholder='yes/no' onChange={this.handleChange}  style={{marginLeft:"-5px"}}/>

                  <p style={{marginTop:"40px",marginLeft:"55px"}}>Is the waste recycled properly ? (yes/no) :</p> 
                   <input type="text" value={this.state.value18} name="mm"  placeholder='yes/no' onChange={this.handleChange}  style={{marginTop:"-5px"}}/> <br/><br/> 

                  
                </form>
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
  <Nav.Link eventKey="/complaint" className="a" onClick={this.getdata2}>Complaints Recieved</Nav.Link>

  <Modal show={this.state.show2} onHide={this.handleClose2} style={{color:"black",fontSize:"20px"}}>

        <Modal.Header closeButton>
          <Modal.Title><center>Complaints Recieved</center></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Accordion >
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
           <pre>Name:   <span>{this.state.pname[n-1]}</span></pre> 
           <br></br>
           <pre>Subject: <span>{this.state.subject[n1-1]}</span></pre> 
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body><pre>Reason: <span>{this.state.reason[n2-1]}</span></pre> </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
           <pre>Name:   <span>{this.state.pname[n-2]}</span></pre> 
           <br></br>
           <pre>Subject: <span>{this.state.subject[n1-2]}</span></pre> 
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body> <pre>Reason: <span>{this.state.reason[n2-2]}</span></pre> </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.handleClose2}>
            close
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