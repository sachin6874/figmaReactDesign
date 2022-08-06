import airbnb from "../images/airbnb 1.png"
import ThemeToggler from "./ThemeToggler";

const Head=()=>(
    <div className="header">
        <img src={airbnb} alt="sometext" ></img>
        <ThemeToggler/>
    </div>
)
export default Head;