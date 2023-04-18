import { useState } from "react";
import { deleteRequest, getRequest, postRequest } from "../../handlers/api";
import { useEffect } from "react";
import { isDisabled } from "@testing-library/user-event/dist/utils";

export default function Forms(props){
    const [title,setTitle] = useState(props.title);
    const [details,setDetails] = useState(props.details);
    const [celler,setCopydetails] = useState(props.details);
    const [url,setURl] = useState(props.url);
    const [all,setAll] = useState([]);
    function doSubmit(){
        postRequest(`${url}/create`, details).then(res=>{
            setDetails(res);
            setCopydetails(res);
        })
    }
   
    useEffect(()=>{
            getRequest(`${url}/all`).then(res=>{
                setAll(res);
            });
    },[celler])
    function doDelete(id){
        deleteRequest(`${url}/delete/${id}`).then(res=>{
            console.log(res);
        })
    }
    function SellerList(){
        return (
            <table>
                {  
                    all.map(elt=>{
                        let obj =  Object.keys(elt).map((key,index)=>{
                            return <td>{elt[key]}</td>
                        })
                        return <tr>{obj}<td><button onClick={()=>doDelete(elt.id)}>X</button></td></tr>;
                    })  
                }
            </table>
        )
    }
    return (
        <>
            <div className="container">
                <h1>{title}</h1>
                {
                Object.keys(details).map(elt=>{
                    let isDisabled = elt=="id";
                    return <input placeholder={elt} value={details[elt]} disabled={isDisabled} onChange={(value,elt)=>{
                        details[value.target.placeholder]=value.target.value
                        setDetails({...details})
                    }}
                    ></input>
                })}
                <button onClick={doSubmit}>SAVE</button>
                <button onClick={doDelete}>DELTE</button>
            </div> 
            <SellerList></SellerList>
        </>
    )
}