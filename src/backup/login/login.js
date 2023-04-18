import { useState } from "react"
import { Request } from "../service/request";
import { BrowserRouter, Navigate, Outlet, useNavigate } from "react-router-dom";
import './login.css'
export default function Login(){
    const [un,setUn] = useState("tester");
    const [pwd,setPwd] = useState("test");
    const [login, setLogin] = useState(false);
    const navigate = useNavigate();
    function doLogin(){
        Request("db/login.json").then((res)=>{
            res = (res.un==un && res.pwd == pwd);
            if(res)
                navigate("/welcome",{state:{un:un}})
            else{
                setLogin(false);
            }
        });
    }
    return ( 
        <div id="log">
            <div data-testid="error">{login==false && "Invalid user "}</div>
            <label htmlFor="un">username</label>
            <input type="text" name="un" value={un} id="un" placeholder="username" onChange={(event)=>setUn(event.target.value)}></input>
            <label htmlFor="pwd">password</label>
            <input name="pwd" type="password"  value={pwd} id="pwd" placeholder="password" onChange={(event)=>setPwd(event.target.value)}></input>
            <button id="login" onClick={doLogin}>Login</button>
        </div>
    )
}