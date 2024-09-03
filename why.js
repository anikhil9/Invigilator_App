import React from "react";
import './form_proj.css';
import {Link} from  'react-router-dom'
import {Jumbotron,Row,Col,Image,Button,Container,Grid,OverlayTrigger} from 'react-bootstrap';
class why extends React.Component { 
    render() {
        
        return (
           
            <Container>
       <Row style={{paddingTop:"100px",paddingLeft:"150px"}}>
       <Col xs={6} md={4}>
         <a  href="https://www.linkedin.com/pulse/importance-waste-management-recycling-dee-mohammed">  <Image src={require('./s1.png')}  roundedCircle  width="200px" height="200px"/></a>
         </Col>
      <Col xs={6} md={4}>  
     <p style={{color:"White",marginLeft:"0px",marginTop:"50px",fontSize:"30px"}}><strong>Importance of Waste Mangement System and Recycling </strong></p>
     </Col>
         </Row>
         <Row style={{paddingTop:"100px",paddingLeft:"150px"}}>
         <Col xs={6} md={4}>         
     <a  href="https://timesofindia.indiatimes.com/india/india-generates-100000-metric-tonnes-of-waste-per-day/articleshow/57917862.cms">  <Image src={require('./s4.jpg')}  roundedCircle  width="200px" height="200px"/></a>
     </Col>
     <Col xs={6} md={4}>  
     <p style={{color:"White",marginLeft:"0px",marginTop:"50px",fontSize:"30px"}}><strong>Satistics Of Waste produced in India </strong></p>
     </Col>
     </Row>
     <Row style={{paddingTop:"100px",paddingLeft:"150px",paddingBottom:"200px"}}>
     <Col xs={6} md={4}>  
     <a  href="https://siteresources.worldbank.org/INTURBANDEVELOPMENT/Resources/336387-1334852610766/Chap3.pd">  <Image src={require('./s3.jpg')}  roundedCircle  width="200px" height="200px"/></a>
     </Col>
     <Col xs={6} md={4}>  
     <p style={{color:"White",marginLeft:"0px",marginTop:"50px",fontSize:"30px"}}><strong>Satistics Of Waste produced in World</strong></p>
     </Col>
   </Row>
 </Container>
             
           
            
        )
    }
}
export default why
