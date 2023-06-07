import dancing from "../assets/logout.gif";
import { BsFillArrowRightCircleFill} from 'react-icons/bs';
import { Link } from "react-router-dom";

export function Logout() {
  return (
    <div className="logout-page">
      <div className="logout-content">
      <Link to="/" className="shop-now-btn">Go Back Home <BsFillArrowRightCircleFill className="right-arrow-circle"/></Link>
      <h1>You have successfully logged Out</h1>
      </div>
      <img src={dancing} alt='aot_dancing' />
    </div>
  );
}
