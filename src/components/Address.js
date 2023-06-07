import { ProductContext } from "..";
import { useContext } from "react";
import {MdEdit} from "react-icons/md";
import {FaTrash} from "react-icons/fa";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Address = ({ id,name, address, pincode, mobile, chosenAddress }) => {
  const {state:{addresses},dispatch} = useContext(ProductContext);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
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

  const addressEdited = () => toast('🦄 Address edited successfully!', {
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
    dispatch({type:'EDIT_ADDRESS',payload:formData});
    addressEdited();
    setFormData({
        id:'',
        name: '',
        address: '',
        pincode: '',
        mobile: ''
      })
    toggleModal();
  };
  return (
    <label className="address-container" key={id} style={{background:chosenAddress?`#D5EEEF`:null}}>
      <input name="address" type="radio" checked={chosenAddress} onChange={()=>dispatch({type:'CHOSEN_ADDRESS',payload:id})} />
      <div className="address-card">
        <h2>{name}</h2>
        <p><b>Address:</b> {address}</p>
        <p><b>Pincode:</b> {pincode}</p>
        <p><b>Mobile:</b> {mobile}</p>
      </div>
      <div className="address-action-btns"><span><MdEdit className="edit-icon" onClick={()=>{setFormData(addresses.find((add)=>add.id === id));toggleModal()}}/></span><span><FaTrash className="trash-icon" onClick={()=>dispatch({type:'REMOVE_ADDRESS',payload:id})} /></span></div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close" onClick={toggleModal}>&times;</span>
            <h2>Address Form</h2>
            <form onSubmit={handleSubmit} id="form">
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  required
                  className="modal-input"
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Address:
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  required className="modal-input"
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Pincode:
                <input
                  type="number"
                  name="pincode"
                  value={formData.pincode}
                  required className="modal-input"
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Mobile:
                <input
                  type="number"
                  name="mobile"
                  value={formData.mobile}
                  required className="modal-input"
                  onChange={handleInputChange}
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </label>
  );
};
