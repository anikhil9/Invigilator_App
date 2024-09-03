import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Jumbotron,Row,Col,Image,Button,Container,Grid,Accordion,Card,OverlayTrigger,Popover} from 'react-bootstrap';
import './home.css'
export default class What extends Component {
    render() {
        const popover1 = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Popover right</Popover.Title>
              <Popover.Content>
              Liquid waste is commonly found both in households as well as in industries. This waste includes dirty water, organic liquids, wash water, waste detergents and even rainwater.

You should also know that liquid waste can be classified into point and non-point source waste. All manufactured liquid waste is classified as point source waste. On the other hand, natural liquid waste is classified as non-point source waste.

Tt is best get in touch with waste removal experts, such as 4 Waste Removals, to dispose of liquid waste properly.              </Popover.Content>
            </Popover>
          );
       
          const popover2 = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Popover right</Popover.Title>
              <Popover.Content>
                  <Row>
              Solid rubbish can include a variety of items found in your household along with commercial and industrial locations.
              </Row>
              <Row>
Solid rubbish is commonly broken down into the following types:
</Row>
<Row>
Plastic waste – This consists of bags, containers, jars, bottles and many other products that can be found in your household. Plastic is not biodegradable, but many types of plastic can be recycled. Plastic should not be mix in with your regular waste, it should be sorted and placed in your recycling bin.
Paper/card waste – This includes packaging materials, newspapers, cardboards and other products. Paper can easily be recycled and reused so make sure to place them in your recycling bin or take them to your closest Brisbane recycling depot.
Tins and metals – This can be found in various forms throughout your home. Most metals can be recycled. Consider taking these items to a scrap yard or your closest Brisbane recycling depot to dispose of this waste type properly.
Ceramics and glass – These items can easily be recycled. Look for special glass recycling bins and bottle banks to dispose them correctly.
If you still cannot grasp the concept of recycling, then an incredibly easy and efficient way to dispose solid rubbish is by hiring a Brisbane waste removal company, like 4 Waste Removals, to take care of your recycling for you. We will removal all of your rubbish and ensure it is disposed of properly.
</Row>
              </Popover.Content>
            </Popover>
          );

          const popover3 = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Popover right</Popover.Title>
              <Popover.Content>
              Organic waste is another common household. All food waste, garden waste, manure and rotten meat are classified as organic waste. Over time, organic waste is turned into manure by microorganisms. However, this does not mean that you can dispose them anywhere.

Organic waste in landfills causes the production of methane, so it must never be simply discarded with general waste. Instead, look to get a green bin from the Brisbane council, or hire a green skin bin or garden bag for proper waste disposal.
              </Popover.Content>
            </Popover>
          );
    
          const popover4 = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Popover right</Popover.Title>
              <Popover.Content>
              Recyclable rubbish includes all waste items that can be converted into products that can be used again. Solid items such as paper, metals, furniture and organic waste can all be recycled.

Instead of throwing these items in with regular waste, which then ends up in landfills, place them in your yellow recycling bin or take them to your local Brisbane recycling depot.

If you’re unsure whether an item is recyclable or not, look at the packaging or the diagrams on the lid of your yellow recycling bin. Most products will explicitly state whether they are recyclable or not
              </Popover.Content>
            </Popover>
          );

          const popover5 = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Popover right</Popover.Title>
              <Popover.Content>
              Hazardous waste includes all types of rubbish that are flammable, toxic, corrosive and reactive.

These items can harm you as well as the environment and must be disposed of correctly. Therefore, I recommend you make use of a waste removal company for proper disposal of all hazardous waste.
              </Popover.Content>
            </Popover>
          );
        return (
        
          <div>
               <b><h1 style={{color:"white",marginTop:"30px"}}>Waste Management</h1></b>
           <Container >
               <Row >
                  <Jumbotron style={{marginTop:"30px"}}>
                       <p style={{color:"black"}}>
                      " Waste management (or waste disposal) are the activities and actions required to manage waste from its inception to its final disposal. This includes the collection, transport, treatment and disposal of waste, together with monitoring and regulation of the waste management process.

Waste can be solid, liquid, or gas and each type has different methods of disposal and management. Waste management deals with all types of waste, including industrial, biological and household. In some cases, waste can pose a threat to human health. Waste is produced by human activity, for example, the extraction and processing of raw materials. Waste management is intended to reduce adverse effects of waste on human health, the environment or aesthetics.

Waste management practices are not uniform among countries (developed and developing nations); regions (urban and rural areas), and residential and industrial sectors can all take different approaches.

A large portion of waste management practices deal with municipal solid waste (MSW) which is the bulk of the waste that is created by household, industrial, and commercial activity."
                       </p>
                   </Jumbotron>
               </Row>
      <Row>
         <Accordion >
              <Card bg="dark" text="white" style={{borderRadius:"20px",borderColor:"grey"}}>
               <Accordion.Toggle as={Card.Header} eventKey="0">
               <h3>Principles of waste management</h3>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
              <Card.Body>
                  <Row>
                  <u><strong>Waste hierarchy</strong></u>
The waste hierarchy refers to the "3 Rs" reduce, reuse and recycle, which classifies waste management strategies according to their desirability in terms of waste minimisation. The waste hierarchy is the cornerstone of most waste minimisation strategies. The aim of the waste hierarchy is to extract the maximum practical benefits from products and to generate the minimum amount of end waste; see: resource recovery. The waste hierarchy is represented as a pyramid because the basic premise is that policies should promote measures to prevent the generation of waste. The next step or preferred action is to seek alternative uses for the waste that has been generated i.e. by re-use. The next is recycling which includes composting. Following this step is material recovery and waste-to-energy. The final action is disposal, in landfills or through incineration without energy recovery. This last step is the final resort for waste which has not been prevented, diverted or recovered. The waste hierarchy represents the progression of a product or material through the sequential stages of the pyramid of waste management. The hierarchy represents the latter parts of the life-cycle for each product.<br></br>
</Row>
<Row style={{marginTop:"10px"}}>
<u><strong>Life-cycle of a product</strong></u>
The life-cycle begins with design, then proceeds through manufacture, distribution, and primary use and then follows through the waste hierarchy's stages of reduce, reuse and recycle. Each stage in the life-cycle offers opportunities for policy intervention, to rethink the need for the product, to redesign to minimize waste potential, to extend its use. Product life-cycle analysis is a way to optimize the use of the world's limited resources by avoiding the unnecessary generation of waste.
</Row>
<Row style={{marginTop:"10px"}}>
<u><strong>Resource efficiency</strong></u>
Resource efficiency reflects the understanding that global economic growth and development can not be sustained at current production and consumption patterns. Globally, humanity extracts more resources to produce goods than the planet can replenish. Resource efficiency is the reduction of the environmental impact from the production and consumption of these goods, from final raw material extraction to last use and disposal.
</Row>
<Row style={{marginTop:"10px"}}>
<u><strong>Polluter-pays principle</strong></u>
The polluter-pays principle mandates that the polluting party pays for the impact on the environment. With respect to waste management, this generally refers to the requirement for a waste generator to pay for appropriate disposal of the unrecoverable material.
</Row>
</Card.Body>
              </Accordion.Collapse>
               </Card>
               
               <Card bg="dark" text="white" style={{borderRadius:"20px",borderColor:"grey",marginTop:"20px",width:"1000px"}}>
               <Accordion.Toggle as={Card.Header} eventKey="1">
              <h3>History</h3> 
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
               <Card.Body>Throughout most of history, the amount of waste generated by humans was insignificant due to low population density and low societal levels of the exploitation of natural resources as well as industrial since a few decades ago. Common waste produced during pre-modern times was mainly ashes and human biodegradable waste, and these were released back into the ground locally, with minimum environmental impact. Tools made out of wood or metal were generally reused or passed down through the generations.

However, some civilizations do seem to have been more profligate in their waste output than others. In particular, the Maya of Central America had a fixed monthly ritual, in which the people of the village would gather together and burn their rubbish in large dumps.
<Row style={{marginTop:"10px"}}>
<u><strong>Modern era</strong></u>

Following the onset of industrialisation and the sustained urban growth of large population centres in England, the buildup of waste in the cities caused a rapid deterioration in levels of sanitation and the general quality of urban life. The streets became choked with filth due to the lack of waste clearance regulations. Calls for the establishment of a municipal authority with waste removal powers occurred as early as 1751, when Corbyn Morris in London proposed that "... as the preservation of the health of the people is of great importance, it is proposed that the cleaning of this city, should be put under one uniform public management, and all the filth be...conveyed by the Thames to proper distance in the country".

However, it was not until the mid-19th century, spurred by increasingly devastating cholera outbreaks and the emergence of a public health debate that the first legislation on the issue emerged. Highly influential in this new focus was the report The Sanitary Condition of the Labouring Population in 1842 of the social reformer, Edwin Chadwick, in which he argued for the importance of adequate waste removal and management facilities to improve the health and wellbeing of the city's population.

In the UK, the Nuisance Removal and Disease Prevention Act of 1846 began what was to be a steadily evolving process of the provision of regulated waste management in London. The Metropolitan Board of Works was the first citywide authority that centralized sanitation regulation for the rapidly expanding city and the Public Health Act 1875 made it compulsory for every household to deposit their weekly waste in "moveable receptacles" for disposal—the first concept for a dust-bin.
</Row>
<Row>
The dramatic increase in waste for disposal led to the creation of the first incineration plants, or, as they were then called, "destructors". In 1874, the first incinerator was built in Nottingham by Manlove, Alliott & Co. Ltd. to the design of Alfred Fryer. However, these were met with opposition on account of the large amounts of ash they produced and which wafted over the neighbouring areas.

Similar municipal systems of waste disposal sprung up at the turn of the 20th century in other large cities of Europe and North America. In 1895, New York City became the first U.S. city with public-sector garbage management.

Early garbage removal trucks were simply open bodied dump trucks pulled by a team of horses. They became motorized in the early part of the 20th century and the first closed body trucks to eliminate odours with a dumping lever mechanism were introduced in the 1920s in Britain. These were soon equipped with 'hopper mechanisms' where the scooper was loaded at floor level and then hoisted mechanically to deposit the waste in the truck. The Garwood Load Packer was the first truck in 1938, to incorporate a hydraulic compactor.
</Row>
</Card.Body>
</Accordion.Collapse>
 </Card>

             <Card bg="dark" text="white" style={{borderRadius:"20px",borderColor:"grey",marginTop:"20px",width:"1000px",marginBottom:"50px"}}>
               <Accordion.Toggle as={Card.Header} eventKey="2">
              <h3>Types of Waste</h3> 
               <h6>(Click to get details)</h6>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
               <Card.Body>

               <Container>
  <Row style={{paddingLeft:"50px"}}>
    <Col xs={6} md={4}>
    <OverlayTrigger trigger="click" placement="right" overlay={popover1}>
   <Image src={require('./pt1.jpg')}  roundedCircle  width="250px" height="250px"/>
    </OverlayTrigger>
        <h1 style={{color:"White",marginLeft:"-5px",marginTop:"-160px",color:"dark blue"}}>Liquid Waste</h1>
    </Col>
    <Col xs={6} md={4} style={{paddingLeft:"30px"}}>
    <OverlayTrigger trigger="click" placement="right" overlay={popover2}>
      <Image src={require('./pt2.jpg')}  roundedCircle  width="250px" height="250px"/>
    </OverlayTrigger>
    <h1 style={{color:"White",marginLeft:"5px",marginTop:"-175px"}}>Solid Rubbish</h1>
    </Col>
    <Col xs={6} md={4} style={{paddingLeft:"30px"}}>
    <OverlayTrigger trigger="click" placement="right" overlay={popover3}>
     <Image src={require('./pt3.jpg')}  roundedCircle  width="250px" height="250px"/>
    </OverlayTrigger>
    <h1 style={{color:"White",marginLeft:"",marginTop:"-175px",color:"white"}}><strong><b>Organic Waste</b></strong></h1>
    </Col>
  </Row>
  <Row style={{marginLeft:"200px",marginTop:"120px",marginBottom:"30px"}}>
    <Col xs={6} md={4}>
    <OverlayTrigger trigger="click" placement="right" overlay={popover4}>
   <Image src={require('./pt4.jpg')}  roundedCircle  width="250px" height="250px"/>
    </OverlayTrigger>
        <h1 style={{color:"White",marginLeft:"5px",marginTop:"-175px",color:"black"}}>Recyclable Waste</h1>
    </Col>
    <Col xs={6} md={4} style={{marginLeft:"50px"}}>
    <OverlayTrigger trigger="click" placement="right" overlay={popover5}>
      <Image src={require('./pt5.jpg')}  roundedCircle  width="250px" height="250px"/>
    </OverlayTrigger>
    <h1 style={{color:"White",marginLeft:"5px",marginTop:"-175px",color:"Red"}}><strong><b>Hazardous Waste</b></strong></h1>
    </Col>
    
  </Row>
</Container>

               </Card.Body>
               </Accordion.Collapse>
             </Card>

            
         </Accordion>
     </Row>
           </Container>

            </div>
            
        )
    }
}
