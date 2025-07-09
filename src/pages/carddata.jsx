import { useSelector,useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";

import {qntyIncrease, qntyDecrease, dataRemove} from "../pages/cartslice";
import Button from 'react-bootstrap/Button';
import { FaRupeeSign } from "react-icons/fa";

import { useNavigate } from "react-router";
const CartData=()=>{
    const CartData= useSelector(state=>state.mycart.cart);
    const dispatch= useDispatch();
    const navigate = useNavigate();
   let netAmount=0;
    const ans=CartData.map(key=>{
        netAmount+=key.price*key.qnty;
        return(
            <>
             <tr>
                <td>
                    <img src={key.image} width="70" height="70" />
                </td>
                     <td>
                        {key.name}
                     </td>
                     <td>
                        {key.category}
                     </td>
                     <td>
                        {key.price}
                     </td>
                     <td>
                       <FaPlusSquare onClick={()=>{dispatch(qntyIncrease({id:key.id}))}} />
                        {key.qnty}
                        <FaMinusSquare  onClick={()=>{dispatch(qntyDecrease({id:key.id}))}} />
                     </td>
                     <td>
                        {key.price * key.qnty}
                     </td>
                     <td>
                        <button onClick={()=>{dispatch(dataRemove({id:key.id}))}}>Remove</button>
                     </td>     
             </tr>
            </>
        )
    })
    return(
        <>
           <h1> Our Cart Data</h1> 
           <div style={{textAlign:"right", marginBottom:"10px"}}>
             <h2><FaRupeeSign  /> : {netAmount}</h2>
           <Button variant="warning" onClick={()=>{navigate("/checkout")}}>CheckOut</Button>
           </div>
          

            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Amount</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {ans}
        <tr>
          <th>#</th>
          <th></th>
          <th></th>
          <th></th>
          <th>Net Amount: </th>
          <th> {netAmount} </th>
        </tr>
        </tbody>       
        </Table>
        </>
    )
}
export default CartData;