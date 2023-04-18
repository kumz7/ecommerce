import "./header.css";
export default function Header(props){
    return (
        <>
            <div id="banner">
                <h1>{props.display}</h1>
            </div>
        </>
    )
}