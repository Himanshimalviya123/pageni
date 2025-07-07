import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MdShoppingCart } from "react-icons/md";

import t1 from "../images/titan.jpeg"


const Topmenu=()=>{
    return(

<>
 <Navbar bg="dark" data-bs-theme="dark">
        <Container id="topheader">
<Navbar.Brand href="#" id="titan"></Navbar.Brand>        
          <Nav className="me-auto" >
            <img src={t1} width="100px" height="60px"/>
             <Nav.Link as={Link} to="home"><h5>Home</h5></Nav.Link>
            <Nav.Link as={Link} to="menwatches"><h5>menwatches</h5></Nav.Link>
            <Nav.Link as={Link} to="womenwatches"><h5>womenwatches</h5></Nav.Link>
            <Nav.Link as={Link} to="kidswatches"><h5>kidswatches</h5></Nav.Link> 
           <Nav.Link as={Link} to="mycartslice">Mycart</Nav.Link> 
   
             <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"/>
            <Button variant="outline-success">Search</Button>
            <MdShoppingCart  />
          </Form>
          </Nav>
        </Container>
      </Navbar>
        
               </>
    )
}
export default Topmenu; 

 