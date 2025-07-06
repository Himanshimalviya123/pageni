import Carousel from 'react-bootstrap/Carousel';
import img1 from "../images/slide1.webp";
import img2 from "../images/slide2.webp";
import img3 from "../images/slide3.webp";
import img4 from "../images/slide4.webp";
import img5 from "../images/slide5.webp";

import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import p3 from "../images/p3.jpg";
import p4 from "../images/p4.jpg";
import p5 from "../images/p5.jpg";
import p6 from "../images/p6.jpg";
import p7 from "../images/p7.jpg";
import p8 from "../images/p8.jpg";



import m1 from "../images/m1.jpg";
import m2 from "../images/m2.webp";
import m3 from "../images/m3.webp";
import m4 from "../images/m4.webp";
import m5 from "../images/m5.webp";

import axios from 'axios';
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Home =()=>{
  const[mydata,setMydata]=useState([])

  const loaddata=async()=>{
    const respnse=await axios.get("http://localhost:3000/watches")
    console.log(respnse.data);
    setMydata(respnse.data)
    
  }
  useEffect(()=>{
    loaddata(),[]
  })
  const ans=mydata.map((key)=>{
    return(
      <>
  <Card style={{ width: '18rem' }} className='card'>
      <Card.Img variant="top" src={key.image} />
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
         price:- {key.price} <br/>
             category:- {key.category} <br/>
                description:- {key.description }<br/>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </>
    )
  })
    return(
        <>
        
<Carousel>
      <Carousel.Item>
<img src={img1} width="100%" height="500px" />      
      </Carousel.Item>
      <Carousel.Item>
<img src={img2}  width="100%" height="500px" />  
      </Carousel.Item>
      <Carousel.Item>
<img src={img3}  width="100%" height="500px" />  
        </Carousel.Item>
      <Carousel.Item>
<img src={img4}  width="100%" height="500px"/>  
      </Carousel.Item>
      <Carousel.Item>
<img src={img5}  width="100%" height="500px"/>  
        </Carousel.Item>
    </Carousel>
  
    <div className='heading'>
      <h1>Shop By Brands</h1>
      </div>
      <div className='shop'>
        <div><img src={p1} width="300px" height="350px" /></div>
        <div><img src={p2} width="300px" height="350px"/></div>
        <div><img src={p3} width="300px" height="350px"/></div>
        <div><img src={p4} width="300px" height="350px"/></div>
        <div><img src={p5} width="300px" height="350px"/></div>
        <div><img src={p6} width="300px" height="350px"/></div>
        <div><img src={p7} width="300px" height="350px"/></div>
        <div><img src={p8} width="300px" height="350px"/></div>

      
    </div>
 <div className='heading' ><h1>Movement in Time</h1></div>
 <div className='movement'>
  <div><img src={m1} /></div>
  <div className='movein'>
    <div><img src={m2} /></div>
    <div><img src={m3} /></div>
    <div><img src={m4} /></div>
    <div><img src={m5} /></div>
  </div>
 </div>

<div className='heading'><h1>product of many watches</h1></div>
 <div className='cardData'>
      {ans} 
      </div>

        </>
    )
}
export default Home;
