import React from 'react';
// import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
// import Modal from 'react-modal';
// import { Modal } from "flowbite-react";
// "use client";
import {  Modal } from "flowbite-react";
import { useState } from "react";

export function Show() {
  const navigate=useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');
  const LoginPage=()=>{
    setOpenModal(false)
    navigate('/ LoginSignup')
  }

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }

  return (
    <>
      <button  onClick={() => setOpenModal(true)} className="btn1" >Sign in</button>
      <Modal show={openModal} size="md" onClose={onCloseModal}  className='my-modal'>
      
 <Modal.Body>
        <div class="modal">
        <div class="modal-content">
            <div className='cross-con'> 
            <i onClick={onCloseModal} class="fa-solid fa-xmark"></i>
            </div>
                
                
        <h2>Get Started</h2>
      
      <button class="login-button google " onClick={LoginPage}> <i class="fa-brands fa-google icons-set1 "> </i>  Continue with Google</button>
      <button class="login-button email"><i class="fa-regular fa-envelope icons-set1"></i>Continue with Email </button>
      <button class="login-button apple"> <i class="fa-brands fa-apple icons-set1"></i>Continue with Apple</button>
      <div class="or-separator">OR</div>

      <button class="login-button mobile">+91 Continue with mobile number </button>
      <div class="terms"> I agree to the <a href="#">Terms & Conditions</a> & <a href="#">Privacy Policy</a>  </div>
          
            </div>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}