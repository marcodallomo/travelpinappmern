import React, { useState } from "react";
import "./register.css";
import RoomIcon from "@mui/icons-material/Room";

import CancelIcon from "@mui/icons-material/Cancel";
import { useRef } from "react";
import { axiosInstance } from "../config";
const Register = ({ setShowRegister }) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      await axiosInstance.post("/users/register", newUser);
      setSuccess(true);
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="registerContainer">
      <div className="logo">
        <RoomIcon />
        TravelPinApp
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" ref={nameRef} />
        <input type="email" placeholder="Email" ref={emailRef} />
        <input type="password" placeholder="Passsword" ref={passwordRef} />
        <button className="registerBtn">Register</button>
        {success && <span className="success">Successfull. You can login now!</span>}

        {error && <span className="failure">Something went wrong!</span>}
      </form>
      <CancelIcon className="registerCancel" onClick={() => setShowRegister(false)} />
    </div>
  );
};

export default Register;
