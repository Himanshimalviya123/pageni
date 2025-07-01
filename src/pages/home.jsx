import Carousel from 'react-bootstrap/Carousel';
import img1 from "./images/slide1.webp";
import img2 from "./images/slide2.webp";
import img3 from "./images/slide3.webp";
import img4 from "./images/slide4.webp";
import img5 from "./images/slide5.webp";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Home =()=>{
    return(
        <>
         <Carousel>
      <Carousel.Item>
<img src={img1} width="100%" height="400px"/>     
    </Carousel.Item>
      <Carousel.Item>
<img src={img2} width="100%" height="400px"/>         
      </Carousel.Item>
      <Carousel.Item>
<img src={img3} width="100%" height="400px"/>     
      </Carousel.Item>
      <Carousel.Item>
<img src={img4} width="100%" height="400px"/>     
        <Carousel.Caption>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
<img src={img5} width="100%" height="400px"/>     
      </Carousel.Item>
    </Carousel>
<h1>product of many watches</h1>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </>
    )
}
export default Home;
