import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { FaPlusSquare } from "react-icons/fa";

import { FaMinusSquare } from "react-icons/fa";

import { qtyDecr,qtyIncr,proRemove } from "../cartslice"
import { FaRupeeSign } from "react-icons/fa";

const MyCart =()=>{
    const cartData = useSelector(state=>state.mycart.cart);
    const Dispatch = useDispatch();

    let TotAmount=0;
   const ans = cartData.map((key) => {
  TotAmount += key.qnty * key.price;
  return (
    <tr key={key.id}>
      <td>
        <img src={key.image} width="200" height="150" />
      </td>
      <td>{key.name}</td>
      <td>{key.category}</td>
      <td style={{ fontSize: "20px" }}>
        <FaMinusSquare onClick={() => { Dispatch(qtyDecr({ id:key.id })) }} style={{ cursor:"pointer" }} />
        {key.qnty}
       <FaPlusSquare onClick={() => { Dispatch(qtyIncr({ id:key.id })) }} style={{ cursor:"pointer" }} />
      </td>
      <td>{key.price}</td>
      <td>{key.qnty*key.price}</td>
      <td>
        <button onClick={() => { Dispatch(proRemove({ id:key.id })) }}>Remove</button>
      </td>
    </tr>
  );
});
    return(
      <>
 

        
           <h1 className="heading"> My Cart Products</h1> 
           <h2 align="center"><FaRupeeSign /> : {TotAmount}</h2> 
           <hr />
           <Table striped bordered hover variant="light" style={{width:"80%", margin:"auto", marginTop:"20px",border:"2px solid black"}}>
     <thead>
  <tr>
    
    <th>Image</th>
    <th>Product Name</th>
    <th>Category</th>
    <th>Quantity</th>
    <th>Price</th>
    <th>Amount</th>
    <th>Remove</th>
  </tr>
</thead>
      <tbody>
          {ans}
        </tbody>
        </Table>
        </>
    )
}
export default MyCart;
