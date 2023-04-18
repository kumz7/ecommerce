import { Outlet, useLocation, useNavigate } from "react-router-dom"
import "./footer.css"
export default function Footer(){
    const navigate = useNavigate();
    return (
        <>
        <h1 onClick={()=>navigate("/")}>Home</h1>
        <div id="footer">
            all rights reserved 2023 - 2024
        </div>
                 <Outlet  />
    </>
    )
}