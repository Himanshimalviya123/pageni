 import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import {  addToCart} from '../cartslice';
import axios from 'axios';
const Menwatches=()=>{
  const [data,setData]=useState([]);
  const Dispatch=useDispatch();
  const loaddata=async()=>{
    const response=await axios.get("http://localhost:3000/watches?category=men")
    console.log(response.data);
setData(response.data)    

  }
  useEffect(()=>{
    loaddata();
  },[])
  const ans=data.map((key)=>{
    return(
      <>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={key.image} />
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
       category:{key.category}<br/>
       price:{key.price}<br/>
        <Button variant="primary" onClick={()=>{Dispatch( addToCart({id:key.id,name:key.name,category:key.category,price:key.price}))}}>buy</Button>
      </Card.Body>
    </Card>
      </>
    )
  })
  return(
    <>
    <h1>men watches</h1>
    <div className='cardData'>{ans}</div>
    </>
  )
}

export default Menwatches;