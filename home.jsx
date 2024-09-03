import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Jumbotron,Row,Col,Image,Button,Container,Grid,OverlayTrigger} from 'react-bootstrap';
import './home.css'

export default class Home extends Component {
       
  render() {    

    const renderTooltip1 = props => (
      <div
        {...props}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          padding: '2px 10px',
          color: 'white',
          borderRadius: 3,
          ...props.style,
        }}
      >
        What is waste management and differt types of waste
      </div>
    );   

    const renderTooltip2 = props => (
      <div
        {...props}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          padding: '2px 10px',
          color: 'white',
          borderRadius: 3,
          ...props.style,
        }}
      >
        Why should we do it
      </div>
    );   

    const renderTooltip3 = props => (
      <div
        {...props}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          padding: '2px 10px',
          color: 'white',
          borderRadius: 3,
          ...props.style,
        }}
      >
        How can we do it
      </div>
    );   
        return (     

  <Container>
           <h1 style={{paddingTop:"50px",paddingLeft:"50px",fontFamily:"comic",color:"white"}}>"Come , Aquire And Share"</h1>
  <Row style={{paddingTop:"100px",paddingLeft:"150px",paddingBottom:"200px"}}>
    <Col xs={6} md={4}>
    <OverlayTrigger
    placement="right-start"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip1}>
   <a  href="/what">  <Image src={require('./pic.jpg')}  roundedCircle  width="200px" height="200px"/></a>
    </OverlayTrigger>
        <h1 style={{color:"White",marginLeft:"-55px",marginTop:"-125px"}}><strong>What?</strong></h1>
    </Col>
    <Col xs={6} md={4}>
    <OverlayTrigger
    placement="right-start"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip2}>
    <a  href="/why">  <Image src={require('./pic2.jpg')}  roundedCircle  width="200px" height="200px"/></a>
    </OverlayTrigger>
    <h1 style={{color:"White",marginLeft:"-55px",marginTop:"-125px"}}><strong>Why?</strong></h1>
    </Col>
    <Col xs={6} md={4}>
    <OverlayTrigger
    placement="right-start"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip3}>
    <a  href="https://www.wikihow.life/Manage-Your-Home-Waste">  <Image src={require('./pic10.jpg')}  roundedCircle  width="200px" height="200px"/></a>
    </OverlayTrigger>
    <h1 style={{color:"White",marginLeft:"-55px",marginTop:"-125px"}}><strong>How?</strong></h1>
    </Col>
  </Row>
</Container>
           

            
        )
    }
}
