import React from 'react';
import Input from '../Component/Signup/Input';
import "../styles/Signup/Imageinput.css";
import signupImg from "../assets/Signup-signin/image.avif"

const Signup = () => {


  return (
    <div className='d-lg-flex w-100'>
        <div className='d-none d-lg-block w-50'>
            <img src={signupImg} alt="" className='position-fixed' width="50%" height="100%"/>
        </div>
        <div className='signup-page-field'>
        <Input/>
        </div>
    </div>
  );
};

export default Signup;
