import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';
// import a1 from "../images/a1.webp";
// import a2 from "../images/a2.webp";
import a3 from "../images/a3.webp";
import a4 from "../images/a4.webp";
import a5 from "../images/a5.webp";
// import a6 from "../images/a6.webp";
// import a7 from "../images/a7.webp";









const Header=()=>{
    return(
<>
  <Navbar bg="light" data-bs-theme="dark" id="downnav">
        <Container className='container1'>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto1">
            <Nav.Link href="#home">home</Nav.Link>
            <Nav.Link as={Link} to="menwatches"><img src={a3}/></Nav.Link>
            <Nav.Link as={Link} to="womenwatches"><img src={a4}/></Nav.Link>
                        <Nav.Link as={Link} to="kidswatches"><img src={a5}/></Nav.Link>

             
          </Nav>
        </Container>
      </Navbar>
</>
    )
}
export default Header;