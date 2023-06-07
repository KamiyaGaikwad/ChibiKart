import errorImg from "../assets/zoro.png";
import {Link} from "react-router-dom";
import { BsFillArrowRightCircleFill} from 'react-icons/bs';

export function ErrorPage() {
  return (
    <Link to="/">
    <div className="error-page">
      <img src={errorImg} className="error-img" />
      {/* <Link to="/" className="home-btn">Go Back Home <BsFillArrowRightCircleFill className="right-arrow-circle"/></Link> */}
    </div>
    </Link>
  );
}
