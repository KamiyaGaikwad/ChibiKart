import {HiOutlineMail} from "react-icons/hi";
import {RiLockPasswordLine} from "react-icons/ri";
import {BsPerson} from "react-icons/bs";
import {Link} from "react-router-dom";
import bunnylevi from "../assets/bunny_levi.png";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {useState} from "react";
import { useLocation, useNavigate } from "react-router";
import { useContext } from "react";
import { ProductContext } from "..";
import { toast } from 'react-toastify';

export function Signup() {
    const [isShow,
        setIsShow] = useState(false);
    const [isShowtwo,
        setIsShowTwo] = useState(false);
    const [password,
        setPassword] = useState("");
    const [confirmPassword,
        setConfirmPassword] = useState("");
    const [passwordError,
        setPasswordError] = useState("");
    const [confirmPasswordError,
        setConfirmPasswordError] = useState("");
        const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useContext(ProductContext);
  const location = useLocation();
  const navigate = useNavigate();

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        const digitRegex = /\d.*\d/;
        if (newPassword.length < 8 || newPassword.length > 20 || !digitRegex.test(newPassword)) {
            setPasswordError("Password must be 8-20 characters long and contain at least 2 digits.");
        } else {
            setPasswordError("");
        }
    };

    const handleConfirmPasswordChange = (event) => {
        const newConfirmPassword = event.target.value;
        setConfirmPassword(newConfirmPassword);
        if (newConfirmPassword !== password) {
            setConfirmPasswordError("Passwords do not match.");
        } 
        else {
            setConfirmPasswordError("");
        }
    };

    const handleEmailChange = (event) => {
      const newEmail = event.target.value;
      setEmail(newEmail);
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(newEmail)) {
        setEmailError("Email should be in correct format");
      } else {
        setEmailError("");
      }
    };

    const signedInMsg = () => toast('🦄 You have signed in successfully!!!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

      const signedcheckMsg = () => toast('🦄 Please complete all fields properly', {
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
      if (!passwordError && !confirmPasswordError && !emailError && password.length>0 && confirmPassword.length>0 && email.length>0) {
        // Form submission logic goes here
        setIsLoggedIn(!isLoggedIn);
    console.log(location);
    navigate(location?.state?.from?.pathname ?? '/');
    signedInMsg();
      }
      else{
        signedcheckMsg();
      }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <img className="circle" src={bunnylevi} alt='bunny_levi'/>
                <h2>Sign Up</h2>
                <form>
                    <label className="input-field-label">
                        <HiOutlineMail className="mail-icon"/>
                        <input
                            required
                            type="email"
                            placeholder="klm@gmail.com"
                            className="neumorphic-input input-field"
                            value={email}
                            onChange={handleEmailChange}
                            />
                    </label>
                    {emailError && <p className="error-message">{emailError}</p>}
                    <label className="input-field-label">
                        <BsPerson className="mail-icon"/>
                        <input
                            required
                            type="text"
                            placeholder="First Name"
                            className="neumorphic-input input-field"/>
                    </label>
                    <label className="input-field-label">
                        <BsPerson className="mail-icon"/>
                        <input
                            required
                            type="text"
                            placeholder="Last Name"
                            className="neumorphic-input input-field"/>
                    </label>
                    <label className="input-field-label">
                        <RiLockPasswordLine className="lock-icon"/>
                        <input
                            required
                            type={isShow
                            ? "text"
                            : "password"}
                            placeholder="Password"
                            className="neumorphic-input input-field"
                            value={password}
                            onChange={handlePasswordChange}/>{isShow
                            ? <FaEyeSlash className="eye-hide-icon" onClick={() => setIsShow(false)}/>
                            : <FaEye className="eye-show-icon" onClick={() => setIsShow(true)}/>}</label>
                    {passwordError && <p className="error-message">{passwordError}</p>}
                    <label className="input-field-label">
                        <RiLockPasswordLine className="lock-icon"/>
                        <input
                            required
                            type={isShowtwo
                            ? "text"
                            : "password"}
                            placeholder="Confirm Password"
                            className="neumorphic-input input-field"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}/>{isShowtwo
                            ? <FaEyeSlash className="eye-hide-icon" onClick={() => setIsShowTwo(false)}/>
                            : <FaEye className="eye-show-icon" onClick={() => setIsShowTwo(true)}/>}</label>
                    {confirmPasswordError && <p className="error-message">{confirmPasswordError}</p>}
                    <button type="submit" className="login-button" onClick={handleSubmit}>
                        Sign up
                    </button>
                </form>
                <p>
                    Already have an account?
                    <Link to='/login'> Login</Link>
                </p>
            </div>
        </div>
    );
}
