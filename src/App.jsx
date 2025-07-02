import { BrowserRouter,Routes,Route } from "react-router";
import Layout from "./layout";
import Home from "./pages/home";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>



      </Route>
    </Routes>
    </BrowserRouter>

   
    </>
  )
}
export default App;