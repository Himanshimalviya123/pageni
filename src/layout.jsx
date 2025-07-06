import { Outlet } from "react-router";

import Topmenu from "./component/topmenu";
import Footer from "./component/footer";
import Header from "./component/header";

const Layout=()=>{
    return(
        <>
        <Topmenu/>
                <Header/>

        <Outlet/>
        
        <hr />
        <Footer/>
        </>
    )
}
export default Layout;