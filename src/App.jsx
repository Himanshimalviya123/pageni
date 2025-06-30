import { BrowserRouter,Routes,Route } from "react-router";
import Layout from "./layout";
import Carousel from 'react-bootstrap/Carousel';
import img1 from "./images/slide1.webp";
import img2 from "./images/slide2.webp";
import img3 from "./images/slide3.webp";
import img4 from "./images/slide4.webp";
import img5 from "./images/slide5.webp";
const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>

      </Route>
    </Routes>
    </BrowserRouter>

    <Carousel>
      <Carousel.Item>
<img src={img1} width="100%" height="400px"/>     
   <Carousel.Caption>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
<img src={img2} width="100%" height="400px"/>     
        <Carousel.Caption>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
<img src={img3} width="100%" height="400px"/>     
        <Carousel.Caption>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
<img src={img4} width="100%" height="400px"/>     
        <Carousel.Caption>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
<img src={img5} width="100%" height="400px"/>     
        <Carousel.Caption>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}
export default App;