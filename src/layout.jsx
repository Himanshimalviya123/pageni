import { Outlet } from "react-router";

import Topmenu from "./component/topmenu";
import Footer from "./component/footer";

const Layout=()=>{
    return(
        <>
        <Topmenu/>
        <Outlet/>
        <hr />
        <Footer/>
        </>
    )
}
export default Layout;