
import "./style.css";
import Forms from "../../template/forms";
let sellerDetail = {id:"" ,name:"",description:"",mobile:"",mail:"",rating:0}
let productDetail = {id:"",name:"",rating:"",description:"",offers:"",imageURl:"",createdDate:"",updatedDate:""}
export default function SellerDetails(){
    return <><Forms title="seller detail" details={sellerDetail} url='seller'></Forms> <Forms title="product detail" details={productDetail} url='seller'></Forms></>;
}