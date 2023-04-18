import { useState } from 'react'
import SellerDetails from './seller/details/seller-details'
import './welcome.css'
export default function Welcome(){
    const [isSeller, setIsSeller] = useState(false);

    return (
        <>
            <button onClick={()=>setIsSeller(true)}>seller</button>
            <button onClick={()=>setIsSeller(false)}>buyer</button> 
            {isSeller && <SellerDetails></SellerDetails>}
            {!isSeller && "welcome user"}
        </>
    )
}