import Img from "./images/iphon6.jpg"
import "./index.css"
function Description() {
    return(
        <>
        <div className="description">
       <img className="iphone-img" src={Img}  alt=""/>
            <h1> louis store</h1>
            <p>best place to get all </p>
            <p>mobile and electronic devices</p>
        </div>
        </>
    )
}
export default Description