import React, { useState } from 'react';
import {FaPlusSquare} from "react-icons/fa";
import { useContext } from 'react';
import { ProductContext } from '..';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ModalForm = () => {
  const {state:{addresses},dispatch} = useContext(ProductContext);
  console.log(addresses)
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    id:'',
    name: '',
    address: '',
    pincode: '',
    mobile: ''
  });

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addressExist = () => toast('🦄 Address already exist!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    // // Perform form submission logic here
    // console.log(formData);
    addresses.some((add)=>add.address === formData.address)?addressExist():
    dispatch({type:'ADD_ADDRESS',payload:{...formData,id:addresses.length+1}});
    setFormData({
        name: '',
        address: '',
        pincode: '',
        mobile: ''
      })
    toggleModal();
  };

  return (
    <div>
        <div className="add-address-btn" onClick={toggleModal}><FaPlusSquare className="square-plus-icon"/>Add Address</div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close" onClick={toggleModal}>&times;</span>
            <h2>Address Form</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  required
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Address:
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  required
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Pincode:
                <input
                  type="number"
                  name="pincode"
                  value={formData.pincode}
                  required
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Mobile:
                <input
                  type="number"
                  name="mobile"
                  value={formData.mobile}
                  required
                  onChange={handleInputChange}
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalForm;
