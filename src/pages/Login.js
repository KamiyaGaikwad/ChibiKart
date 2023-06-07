import {HiOutlineMail} from "react-icons/hi";
import {RiLockPasswordLine} from "react-icons/ri";
import {Link} from "react-router-dom";
import bunnylevi from "../assets/bunny_levi.png";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {useState} from "react";
import { useLocation, useNavigate } from "react-router";
import { useContext } from "react";
import { ProductContext } from "..";
import { toast } from 'react-toastify';

export function Login() {
  const [isShow,setIsShow] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(ProductContext);
  const location = useLocation();
  const navigate = useNavigate();

  const loggedInMsg = () => toast('🦄 You have logged in successfully!!!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  const handleSubmit = (event) => {
    event.preventDefault();
      // Form submission logic goes here
      setIsLoggedIn(!isLoggedIn);
  console.log(location);
  navigate(location?.state?.from?.pathname ?? '/');
  loggedInMsg();
  };

  return (
    <div className="login-container">
      <div className="login-form">
      <img className="circle" src={bunnylevi} alt='bunny_levi' />
        <h2>Login</h2>
        <form>
          <label className="input-field-label">
            <HiOutlineMail className="mail-icon" />
          <input required type="email" placeholder="klm@gmail.com" className="neumorphic-input input-field" value="klm@gmail.com" />
          </label>
          <label className="input-field-label">
            <RiLockPasswordLine className="lock-icon" />
          <input
            required
            type={isShow?"text":"password"}
            placeholder="Password"
            className="neumorphic-input input-field" value="klmpassword123"
          />{isShow?<FaEyeSlash className="eye-hide-icon" onClick={()=>setIsShow(false)}/>:<FaEye className="eye-show-icon"  onClick={()=>setIsShow(true)}/>}</label>
          <button type="submit" className="login-button" onClick={handleSubmit}>
            Login
          </button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
