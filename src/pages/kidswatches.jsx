import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addtocart } from '../cartslice';
const Kidswatches=()=>{
    const [data,setData]=useState([]);
const Dispatch=useDispatch();
    const loaddata=async()=>{
        const response=await axios.get("http://localhost:3000/watches?category=kids");
        setData(response.data);
        console.log(response.data);
        
    }
    useEffect(()=>{
        loaddata();
    },[]);
    const ans=data.map((key)=>{
return(
    <>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={key.image} />
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
          Category:{key.category}<br/>

         Price : {key.price}
        <Button variant="primary" onClick={()=>{addtocart({id:key.id,name:key.name,category:key.category,price:key.price})}}>buy</Button>
      </Card.Body>
    </Card>
    </>
)
    })
    return(
        <>
        <h1>kids watches</h1>
        <div className='cardData'>{ans}</div>
        </>
    )
}
export default Kidswatches;