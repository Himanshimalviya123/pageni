import Carousel from 'react-bootstrap/Carousel';
import img1 from "../images/slide1.webp";
import img2 from "../images/slide2.webp";
import img3 from "../images/slide3.webp";
import img4 from "../images/slide4.webp";
import img5 from "../images/slide5.webp";
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
  <Card style={{ width: '18rem' }}>
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

<div className='div1'><h1>product of many watches</h1></div>
<div className='product'>
{ans}
</div>
 
        </>
    )
}
export default Home;
