import React from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const handle = () => {
    navigate("/main");
  };
  return (
    <div>
        
      <button onClick={handle}>ToMain</button>
    </div>
  );
};

export default Login;
