import { BrowserRouter,Routes,Route } from "react-router";
import Layout from "./layout";
import Home from "./pages/home";
import Kidswatches from "./pages/kidswatches";
import Womenwatches from "./pages/womenwatches";
import Menwatches from "./pages/menwatches";

import CartData from "./pages/carddata";
import CheckOut from "./pages/checkout";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="kidswatches" element={<h1><Kidswatches/></h1>}/>
      <Route path="womenwatches" element={<Womenwatches/>}/>
      <Route path="menWatches" element={<Menwatches/>}/>
      <Route path="carddata" element={<CartData/>}/>
       <Route path="checkout" element={<CheckOut/>}/>





      </Route>
    </Routes>
    </BrowserRouter>

   
    </>
  )
}
export default App;