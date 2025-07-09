import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
const CheckOut=()=>{
      const CartData= useSelector(state=>state.mycart.cart);
      const navigate = useNavigate();
       let netAmount=0;
    const ans=CartData.map(key=>{
        netAmount+=key.price*key.qnty;
    });
    const handleSubmit=(e)=>{
         e.preventDefault();
         navigate("/paydone");
    }
    return(
        <>
          <h1> Shipping Address</h1>
          <h2 align="right" style={{color:"green"}}> Net Payable Amount {netAmount}</h2>
          <Form style={{width:"300px", margin:"auto"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter city</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Address</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Mobile</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Pin code</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}
export default CheckOut;