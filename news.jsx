import React, { Component } from 'react'
import {Jumbotron,Row,Col,Image,Button,Container,Grid,Carousel,Card,ListGroup,OverlayTrigger,Popover} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import "./news.css"
export default class News extends Component {
    render() {
        const popover1 = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Popover right</Popover.Title>
              <Popover.Content>
              The OnePlus Metro from OnePlus Systems is an ultrasonic trash can sensor that lets you know how full your waste container is at all times. And the Wasteforce Platform allows you to easily monitor the capacity of your container from anywhere, providing detailed analytics to help your business or organization track your waste. Having complete visibility of your container can help to reduce the costs that come with overfilling a dumpster. This data can also help reduce fuel emissions by optimizing trash pickup schedules. 
              </Popover.Content>
            </Popover>
          );
       
          const popover2 = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Popover right</Popover.Title>
              <Popover.Content>
              Operating all over the world, including North and South America, Europe and the Middle East, Ecube Labs is an innovative company providing eco-friendly waste technology for various sectors. Their solar-powered trash compactor – CleanCUBE – can hold up to eight times more garbage compared to non-compacting bins, reducing collection frequency up to 80 percent. Their ultrasonic fill-level sensor – CleanFLEX – helps waste management companies increase collection efficiency by up to 50 percent.

Other smart waste technologies from Ecube Labs include an integrated fleet management tracker and CleanCityNetworks, a cloud platform that combines waste container monitoring, route optimization, data analytics and fill-level forecasting.  
              </Popover.Content>
            </Popover>
          );

          const popover3 = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Popover right</Popover.Title>
              <Popover.Content>
              Based in San Francisco, CA, Compology provides image-based trash can sensors that automatically monitor fullness and contents. On top of that, the device features GPS tracking to help optimize driver routes and fuel efficiency along with tilt monitoring, which records when a container gets picked up and put down. 

This smart waste technology system allows roll-off haulers to manage container inventory, build better routes and even accept orders through automated text messages. And for front-load haulers, the software automatically determines which containers need service each day, then schedules routes and evenly distributes jobs to drivers.


              </Popover.Content>
            </Popover>
          );

          const popover4 = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Popover right</Popover.Title>
              <Popover.Content>
              With over 2,800 kiosks in malls, large retailers and grocery stores across the U.S., ecoATM offers instant payment for old electronic devices.  This smart waste collection system is a convenient option for managing e-waste, helping divert more than 14 million smartphones and tablets from landfills. Simply bring your old devices to the kiosk nearest you and your device will be properly recycled or refurbished for resale. 

Consumers looking to trade in devices can receive a quote based on the condition and type of gadget. And if you’re looking to purchase, Gazelle’s online marketplace offers great deals on gently used electronics.
              </Popover.Content>
            </Popover>
          );

          const popover5 = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Popover right</Popover.Title>
              <Popover.Content>
              Next on the list of fancy garbage cans is the EvoBin from EvoEco. This smart waste bin tells you which items should be composted, trashed or recycled at your organization. As objects are tossed into the bin, a scale system detects the change in weight and triggers a customizable message that slides, scrolls or pops onto the screen. The content can be modified to show items that are typically tossed at your specific venue. This smart waste system offers a dynamic, educational experience designed to reward users for responsible waste disposal.


              </Popover.Content>
            </Popover>
          );

          const popover6 = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Popover right</Popover.Title>
              <Popover.Content>
              Bin-E is a smart waste container that automatically recognizes, sorts and compresses waste using a camera, sensors and artificial intelligence. Once the device identifies the material, shape and color of the waste, it is distributed into the appropriate bin within the container – plastics, paper or glass. After that, the waste is compressed so the total volume can be up to five times less. Once full, this self-sorting waste bin automatically notifies your trash collection company. This allows for collection routes to be optimized for improved fuel efficiency.

Not only does Bin-E solve the problem of improper waste sorting, but it also tracks and sends data about the collected waste to an integrated cloud. Your business can then use this information to identify consumer consumption patterns and determine more eco-friendly product options.
              </Popover.Content>
            </Popover>
          );
       
       
       
       
       
       
          return (
            <div>
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('./n1.jpg')}
      alt="First slide"
      width="100px"
      height="400px"
    />
    <Carousel.Caption>
      <h3 style={{marginTop:"100px",color:"blue"}}><strong>Composting wet waste:</strong></h3>
      <p>Govt staff to show how</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('./pic2.jpg')}
      alt="Third slide"
      width="100px"
      height="400px"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('./pic3.jpg')}
      alt="Third slide"
      width="100px"
      height="400px"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<Accordion  style={{paddingTop:"30px",color:"black"}}>
  <Card  bg="dark" text="white" style={{borderRadius:"20px",borderColor:"grey"}}>
    <Accordion.Toggle as={Card.Header} eventKey="0" >
     <center>News Articles</center> 
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <ListGroup style={{color:"black"}}  >
      <a  href="https://www.sciencedirect.com/science/article/pii/S0956053X19305495">  <ListGroup.Item variant="secondary" action style={{paddingTop:"5px"}}>
      <center>Life cycle costing of energy recovery from solid recovered fuel produced in MBT plants in Italy</center></ListGroup.Item></a>
      <a  href="https://www.sciencedirect.com/science/article/pii/S0956053X19305483">  <ListGroup.Item variant="secondary" action style={{paddingTop:"5px"}}><center>Sewage sludge incineration ash for coimmobilization of lead, zinc and copper: Mechanisms of metal incorporation and competition</center> </ListGroup.Item></a>
      <a  href="https://www.sciencedirect.com/science/article/pii/S0956053X19305598">  <ListGroup.Item variant="secondary" action style={{paddingTop:"5px"}}><center>Combination of sodium hypochlorite pretreatment and flotation towards separation of polycarbonate from waste plastic mixtures</center> </ListGroup.Item></a>
      <a  href="https://www.sciencedirect.com/science/article/pii/S0956053X19305689">  <ListGroup.Item variant="secondary"action style={{paddingTop:"5px"}}><center>Thermal degradation kinetics study of polyvinyl chloride (PVC) sheath for new and aged cables</center> </ListGroup.Item></a>
      <a  href="https://www.sciencedirect.com/science/article/pii/S0956053X19305422">  <ListGroup.Item variant="secondary" action style={{paddingTop:"5px"}}><center>Formalizing the informal? A perspective on informal waste management in the BRICS through the lens of institutional economics</center> </ListGroup.Item></a>
  </ListGroup>
      </Card.Body>
    </Accordion.Collapse>
  </Card>

  
  <Card  bg="dark" text="white" style={{borderRadius:"20px",marginTop:"10px",borderColor:"grey"}}>
    <Accordion.Toggle as={Card.Header} eventKey="1">
    <center>New Inovations</center> 
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
          
<Row>
      <Card style={{ width: '18rem',color:"black",marginLeft:"100px" }}>
      <Card.Img variant="top" src={require('./pp1.jpg')} width="200px" height="200px" />
      <Card.Body>
      <Card.Title>Monitor Waste With OnePlus Systems</Card.Title>
      <hr width="2px"></hr>
      {/* <Card.Text>
     “With hundreds of clients across the waste, recycling, waste oils and even charitable clothing sectors, OnePlus Systems has become the benchmark for container monitoring. We value our customer insights and continuously improve on our technology, with a particular focus on our software platform, WasteForce."      </Card.Text> */}
     <Row>
      <OverlayTrigger trigger="click" placement="right" overlay={popover1}>
       <Button variant="success" style={{marginLeft:"30px"}}>Details</Button>
      </OverlayTrigger>
      <a  href="https://oneplussystems.com">  <Button variant="primary" style={{marginLeft:"10px"}}>More Info</Button> </a>
      </Row>
      </Card.Body>
      </Card>      

      
      <Card style={{ width: '18rem',color:"black",marginLeft:"150px" }}>
      <Card.Img variant="top" src={require('./pp2.jpg')} width="200px" height="200px" />
      <Card.Body>
      <Card.Title>Streamline Trash Pickups With Ecube Labs</Card.Title>
      <hr width="2px"></hr>
      {/* <Card.Text>
     “With hundreds of clients across the waste, recycling, waste oils and even charitable clothing sectors, OnePlus Systems has become the benchmark for container monitoring. We value our customer insights and continuously improve on our technology, with a particular focus on our software platform, WasteForce."      </Card.Text> */}
      <Row>
      <OverlayTrigger trigger="click" placement="right" overlay={popover2}>
       <Button variant="success" style={{marginLeft:"30px"}}>Details</Button>
      </OverlayTrigger>
      <a  href="https://www.ecubelabs.com/solution/">  <Button variant="primary" style={{marginLeft:"10px"}}>More Info</Button> </a>
      </Row>
      </Card.Body>
      </Card>     

      <Card style={{ width: '18rem',color:"black",marginLeft:"150px" }}>
      <Card.Img variant="top" src={require('./pp3.jpg')} width="200px" height="200px" />
      <Card.Body>
      <Card.Title>Track Your Trash With Compology</Card.Title>
      <hr width="2px"></hr>
      {/* <Card.Text>
     “With hundreds of clients across the waste, recycling, waste oils and even charitable clothing sectors, OnePlus Systems has become the benchmark for container monitoring. We value our customer insights and continuously improve on our technology, with a particular focus on our software platform, WasteForce."      </Card.Text> */}
      <Row>
      <OverlayTrigger trigger="click" placement="right" overlay={popover3}>
       <Button variant="success" style={{marginLeft:"30px"}}>Details</Button>
      </OverlayTrigger>
      <a  href="https://compology.com">  <Button variant="primary" style={{marginLeft:"10px"}}>More Info</Button> </a>
      </Row>
      </Card.Body>
      </Card> 

</Row>

<Row style={{marginTop:"50px" }}>
      <Card style={{ width: '18rem',color:"black",marginLeft:"100px" }}>
      <Card.Img variant="top" src={require('./pp4.jpg')} width="200px" height="200px" />
      <Card.Body>
      <Card.Title>Recycle Electronics at ecoATM Gazelle Kiosks</Card.Title>
      <hr width="2px"></hr>
      {/* <Card.Text>
     “With hundreds of clients across the waste, recycling, waste oils and even charitable clothing sectors, OnePlus Systems has become the benchmark for container monitoring. We value our customer insights and continuously improve on our technology, with a particular focus on our software platform, WasteForce."      </Card.Text> */}
      <Row>
      <OverlayTrigger trigger="click" placement="right" overlay={popover4}>
       <Button variant="success" style={{marginLeft:"30px"}}>Details</Button>
      </OverlayTrigger>
      <a  href="https://www.ecoatm.com/">  <Button variant="primary" style={{marginLeft:"10px"}}>More Info</Button> </a>
      </Row>
      </Card.Body>
      </Card>      

      
      <Card style={{ width: '18rem',color:"black",marginLeft:"150px" }}>
      <Card.Img variant="top" src={require('./pp5.jpg')} width="200px" height="200px" />
      <Card.Body>
      <Card.Title>Trash Smarter With EvoEco</Card.Title>
      <hr width="2px"></hr>
      {/* <Card.Text>
     “With hundreds of clients across the waste, recycling, waste oils and even charitable clothing sectors, OnePlus Systems has become the benchmark for container monitoring. We value our customer insights and continuously improve on our technology, with a particular focus on our software platform, WasteForce."      </Card.Text> */}
      <Row>
      <OverlayTrigger trigger="click" placement="right" overlay={popover5}>
       <Button variant="success" style={{marginLeft:"30px"}}>Details</Button>
      </OverlayTrigger>
      <a  href="http://evoeco.com/">  <Button variant="primary" style={{marginLeft:"10px"}}>More Info</Button> </a>
      </Row>
      </Card.Body>
      </Card>     

      <Card style={{ width: '18rem',color:"black",marginLeft:"150px" }}>
      <Card.Img variant="top" src={require('./pp3.jpg')} width="200px" height="200px" />
      <Card.Body>
      <Card.Title>Let Your Trash Sort Itself With Bin-E</Card.Title>
      <hr width="2px"></hr>
      {/* <Card.Text>
     “With hundreds of clients across the waste, recycling, waste oils and even charitable clothing sectors, OnePlus Systems has become the benchmark for container monitoring. We value our customer insights and continuously improve on our technology, with a particular focus on our software platform, WasteForce."      </Card.Text> */}
      <Row>
      <OverlayTrigger trigger="click" placement="right" overlay={popover6}>
       <Button variant="success" style={{marginLeft:"30px"}}>Details</Button>
      </OverlayTrigger>
      <a  href="http://bine.world/howitworks/">  <Button variant="primary" style={{marginLeft:"10px"}}>More Info</Button> </a>
      </Row>
      </Card.Body>
      </Card> 

</Row>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
<Row>
<marquee behavior="scroll" direction="left" style={{marginTop:"10px"}}><strong>Trending: there is a lot of waste being prodduced in xyz factory </strong></marquee>
</Row>  
            </div>
        )
    }
}
