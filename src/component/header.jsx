import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from 'react-router';    
import t1 from "../images/titan.jpeg";
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
const Header=()=>{
   const cartData = useSelector(state=>state.mycart.cart);
 const cartLength= cartData.length;
const navigate= useNavigate();
    return(
        <>
         <Navbar expand="dark" className="bg-body-tertiary">
      <Container fluid id="container">
      <div id="corma"><img src={t1} width="80%" height="80px" />
      </div>
<Nav.Link as={Link} to="home"><h5>Home</h5></Nav.Link>
<Nav.Link as={Link} to="menwatches"><h5>menwatches</h5></Nav.Link>
<Nav.Link as={Link} to="womenwatches"><h5>womenwatches</h5></Nav.Link>
<Nav.Link as={Link} to="kidswatches"><h5>kidswatches</h5></Nav.Link>    
<Form className="d-flex">
<Form.Control
              type="search"
              placeholder="search products"
              className="me-2"
              aria-label="Search"
  />
</Form>
{/* <button onchange="sing()" className="headers">Signup</button>
            <button onchange="logout()" className="headers">Logout</button> */}
             <div id="oo">become a<br/> supplier</div>
     <div id="oo">Investor<br/> Relations</div>
     <div id="oo">profile</div>
     <div id="header"> 
           {cartLength}
      <FaCartShopping onClick={()=>{navigate("/carddata")}}  style={{cursor:"pointer"}}/>
           </div>
  </Container>
    </Navbar>
     </>
    )
}
export default Header;