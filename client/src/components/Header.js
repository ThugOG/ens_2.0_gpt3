// import Button from "./Button"
import { Link } from "react-router-dom"

const Header = () => {
    return(
        <div className="header_components">
            <div className="header_img">
                <Link to="/"><img src="https://i.ibb.co/CvFRc8m/logo-no-back.png"></img></Link>
            </div>
            <div>
            <Link to="/app"><button className="btn-carousal">Launch App</button></Link>
            </div>
        </div>
    )
}
export default Header