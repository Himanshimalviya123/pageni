import { Outlet } from "react-router";
import Header from "./component/header";
import Topmenu from "./component/topmenu";

const Layout=()=>{
    return(
        <>
        <Topmenu/>
        <Header/>
        <Outlet/>
        </>
    )
}
export default Layout;