import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';

import Carousel from 'react-bootstrap/Carousel';
import img1 from "../images/slide1.webp";
import img2 from "../images/slide2.webp";
import img3 from "../images/slide3.webp";
import img4 from "../images/slide4.webp";
import img5 from "../images/slide5.webp";

const Topmenu=()=>{
    return(
        <>
     
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="home"><h5>Home</h5></Nav.Link>
            <Nav.Link as={Link} to="menwatches"><h5>menwatches</h5></Nav.Link>
                        <Nav.Link as={Link} to="womenwatches"><h5>womenwatches</h5></Nav.Link>
            <Nav.Link as={Link} to="kidswatches"><h5>kidswatches</h5></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Carousel>
      <Carousel.Item>
<img src={img1} width="100%" height="400px" />      
      </Carousel.Item>
      <Carousel.Item>
<img src={img2}  width="100%" height="400px" />  
      </Carousel.Item>
      <Carousel.Item>
<img src={img3}  width="100%" height="400px" />  
        </Carousel.Item>
      <Carousel.Item>
<img src={img4}  width="100%" height="400px"/>  
      </Carousel.Item>
      <Carousel.Item>
<img src={img5}  width="100%" height="400px"/>  
        </Carousel.Item>
    </Carousel>
        </>
    )
}
export default Topmenu; 