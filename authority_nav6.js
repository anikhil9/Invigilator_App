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
        this.state = { show: false,show1 : false,show2 : false ,setShow: "false",name:'',dob:'',email:'',gender:'',state:'',district:'',selectedValue :'',a:'',b:'',c:'',d:'',e:'',value:'',value1:'',subject:[],reason:[],pname:[],list:[],value2:[],value3:[],value4:[],value5:[],value6:[],value7:[],value8:[],value9:[],value10:[],value11:[],value12:[],value13:[],value14:[],value15:[],value16:[],value17:[],value18:[],value19:[],value20:[]};
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
    console.log("hi from authority");
    var data= new URLSearchParams();
    data.append("name",this.state.username)
    data.append("p","10")
    fetch("http://localhost:8000/",{
      method:'post',
      body:data
    })
   .then(response =>{return response.json()})
   .then(response =>{
    this.setState({value2:response.value2})
    this.setState({value3:response.value3})
    this.setState({value4:response.value4})
    this.setState({value5:response.value5})
    this.setState({value6:response.value6})
    this.setState({value7:response.value7})
    this.setState({value8:response.value8})
    this.setState({value9:response.value9})
    this.setState({value10:response.value10})
    this.setState({value11:response.value11})
    this.setState({value12:response.value12})
    this.setState({value13:response.value13})
    this.setState({value14:response.value14})
    this.setState({value15:response.value15})
    this.setState({value16:response.value16})
    this.setState({value17:response.value17})
    this.setState({value18:response.value18})
    this.setState({value19:response.value19})
    this.setState({value20:response.value20})

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
     console.log(this.state.value19)
     console.log(this.state.value20)
   this.handleShow2()
})
}

getdata7=()=>{
   alert("Your report is  downloaded")
  console.log(this.state.value)
  console.log("hi from download");
  var data= new URLSearchParams();
  data.append("name",this.state.username)
  data.append("n","1")
  data.append("p","10")
  fetch("http://localhost:8000/",{
    method:'post',
    body:data
  })
}

getdata8=()=>{
  alert("Your overall feedback is  downloaded")
 console.log(this.state.value)
 console.log("hi from download");
 var data= new URLSearchParams();
 data.append("name",this.state.username)
 data.append("n","1")
 data.append("p","11")
 fetch("http://localhost:8000/",{
   method:'post',
   body:data
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
  var n1= this.state.value2.length
  var n2= this.state.value3.length
  var n3= this.state.value4.length
  var n4= this.state.value5.length
  var n5= this.state.value6.length
  var n6= this.state.value7.length
  var n7= this.state.value8.length
  var n8= this.state.value9.length
  var n9= this.state.value10.length
  var n10= this.state.value11.length
  var n11= this.state.value12.length
  var n12= this.state.value13.length
  var n13= this.state.value14.length
  var n14= this.state.value15.length
  var n15= this.state.value16.length
  var n16= this.state.value17.length
  var n17= this.state.value18.length
  var n18= this.state.value19.length
  var n19= this.state.value20.length
 
  return (
 <div style={{backgroundcolor: "rgb(71, 68, 68)",marginLeft:"10px",marginRight:"1100px",borderRadius:"10px",marginTop:"30px",border:"3px solid grey"}} className="a">
<Nav  className="flex-column" style={{marginLeft:"30px",paddingRight:"50px"}}>
<Image src={require('./Min.jpg')}  roundedCircle  width="100px" height="100px" style={{marginTop:"40px",marginLeft:"50px",marginBottom:"50px",marginRight:"-50px"}}/>
  <br></br>
  <Nav.Link eventKey="/complaint" className="a" onClick={this.getdata2}>Reports Recieved</Nav.Link>

<Modal show={this.state.show2} onHide={this.handleClose2} style={{color:"black",fontSize:"20px"}}>

      <Modal.Header closeButton>
        <Modal.Title><center>Reports Recieved</center></Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Accordion >
      <Card>
      <Accordion.Toggle as={Card.Header} eventKey="0">
         <pre>ReportId   <span>{this.state.value2[n1-1]}</span></pre> 
         <br></br>
         <pre>Survey Name:  <span>{this.state.value3[n2-1]}</span></pre> 
         <br></br>
         <pre>Date:  <span>{this.state.value4[n3-1]}</span></pre> 
         
       </Accordion.Toggle>
       <Accordion.Collapse eventKey="0">
    <Card.Body>
        <p>Amount of waste collected</p>
        <br></br>
        <pre>Orgaic Waste : <span>{this.state.value5[n4-1]}</span></pre> 
        <br></br>
        <pre>Liquid Waste : <span>{this.state.value6[n5-1]}</span></pre> 
        <br></br>
        <pre>Solid Waste : <span>{this.state.value7[n6-1]}</span></pre> 
        <br></br>
        <pre>Harzardous Waste : <span>{this.state.value8[n7-1]}</span></pre> 
        <br></br>
        <pre>Recylable Waste : <span>{this.state.value9[n8-1]}</span></pre> 
        <br></br>
        <p>Number of Compliants filed on :</p>
        <br></br>
        <pre>Service : <span>{this.state.value10[n9-1]}</span></pre> 
        <br></br>
        <pre>Regularity : <span>{this.state.value11[n10-1]}</span></pre> 
        <br></br>
        <pre>Behaviour : <span>{this.state.value12[n11-1]}</span></pre> 
        <br></br>
        <pre>Seperation : <span>{this.state.value13[n12-1]}</span></pre> 
        <br></br>
        <pre>Maintenance : <span>{this.state.value14[n13-1]}</span></pre> 
        <br></br>
        <p>Measures on : </p>
        <br></br>
        <pre>Orgaic Waste : <span>{this.state.value15[n14-1]}</span></pre> 
        <br></br>
        <pre>Liquid Waste : <span>{this.state.value16[n15-1]}</span></pre> 
        <br></br>
        <pre>Solid Waste : <span>{this.state.value17[n16-1]}</span></pre> 
        <br></br>
        <pre>Harzardous Waste : <span>{this.state.value18[n17-1]}</span></pre> 
        <br></br>
        <pre>Recylable Waste : <span>{this.state.value19[n18-1]}</span></pre> 
        <br></br>
        <pre>Recylability: <span>{this.state.value20[n19-1]}</span></pre> 
        <br></br>
    </Card.Body>
       </Accordion.Collapse>
    </Card>
     <Card>
  <Accordion.Toggle as={Card.Header} eventKey="1">
         <pre>ReportId   <span>{this.state.value2[n1-2]}</span></pre> 
         <br></br>
         <pre>Survey Name:  <span>{this.state.value3[n2-2]}</span></pre> 
         <br></br>
         <pre>Date:  <span>{this.state.value4[n3-2]}</span></pre> 
  </Accordion.Toggle>
  <Accordion.Collapse eventKey="1">
    <Card.Body> 
    <p>Amount of waste collected</p>
        <br></br>
        <pre>Orgaic Waste : <span>{this.state.value5[n4-2]}</span></pre> 
        <br></br>
        <pre>Liquid Waste : <span>{this.state.value6[n5-2]}</span></pre> 
        <br></br>
        <pre>Solid Waste : <span>{this.state.value7[n6-2]}</span></pre> 
        <br></br>
        <pre>Harzardous Waste : <span>{this.state.value8[n7-2]}</span></pre> 
        <br></br>
        <pre>Recylable Waste : <span>{this.state.value9[n8-2]}</span></pre> 
        <br></br>
        <p>Number of Compliants filed on :</p>
        <br></br>
        <pre>Service : <span>{this.state.value10[n9-2]}</span></pre> 
        <br></br>
        <pre>Regularity : <span>{this.state.value11[n10-2]}</span></pre> 
        <br></br>
        <pre>Behaviour : <span>{this.state.value12[n11-2]}</span></pre> 
        <br></br>
        <pre>Seperation : <span>{this.state.value13[n12-2]}</span></pre> 
        <br></br>
        <pre>Maintenance : <span>{this.state.value14[n13-2]}</span></pre> 
        <br></br>
        <p>Measures on : </p>
        <br></br>
        <pre>Orgaic Waste : <span>{this.state.value15[n14-2]}</span></pre> 
        <br></br>
        <pre>Liquid Waste : <span>{this.state.value16[n15-2]}</span></pre> 
        <br></br>
        <pre>Solid Waste : <span>{this.state.value17[n16-2]}</span></pre> 
        <br></br>
        <pre>Harzardous Waste : <span>{this.state.value18[n17-2]}</span></pre> 
        <br></br>
        <pre>Recylable Waste : <span>{this.state.value19[n18-2]}</span></pre> 
        <br></br>
        <pre>Recylability: <span>{this.state.value20[n19-2]}</span></pre> 
        <br></br>
        
   </Card.Body>
  </Accordion.Collapse>
</Card>:
</Accordion>
        </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={this.handleClose2}>
          close
        </Button> 
      </Modal.Footer>
        </Modal>
<br></br>
  <hr className="a"></hr>
  <Nav.Link eventKey="/st" className="a" onClick={this.getdata7}>Download the statistics</Nav.Link>
  <hr className="a"></hr>
  <Nav.Link eventKey="/ff" className="a" onClick={this.getdata8}>Download the overall feedback</Nav.Link>
  <hr className="a"></hr>
  <Nav.Link eventKey="/home" href="/form_proj" className="a">Logout</Nav.Link>
</Nav>
</div>
    );
  }
}

export default NavbarPage2;