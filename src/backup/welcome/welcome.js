import { useLocation } from "react-router-dom"
import Header from "../header/header";
import Footer from "../footer/footer";
import { useState } from "react";

export default function Welcome(){
    const param = useLocation();
    const [un,setUn] = useState(param.state.un)
    return (
        <>
            <Header display={"Welcome back home "+un}></Header>
            <Footer></Footer>
        </>
    )
}