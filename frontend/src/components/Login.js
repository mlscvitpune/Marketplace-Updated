import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const userLogin = async () => {
    const res = await fetch('http://localhost:5000/api/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    });

    const data = await res.json();
    if (res.status === 400 || res.status === 404) {
      window.alert("Invalid Credentials");
    } else {
      localStorage.setItem('user', name)
      window.localStorage.setItem("token",data.token);
      window.alert("Login Successful");
      navigate('/shop');
    }
  }

  return <>
    <div className="overflow-x:hidden w-3/4 h-3/4 mx-auto sm:mx-0 mt-10 sm:mt-10">
      <div className="flex flex-col justify-center items-center bg-[#F9F9F9] pr-2 rounded-lg">
        <div className="title text-center">
          <p className="text-2xl text-black py-6"> Login to <b>VIT MarketPlace</b></p>
        </div>
        <div className="form py-4 flex flex-col item-center">
            <input type="text" placeholder="Name" className="w-5/6 sm:w-11/12 h-10 border-2 m-3  border-gray-300 rounded-md p-2" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Email" className="w-5/6 sm:w-11/12 h-10 border-2 m-3  border-gray-300 rounded-md p-2" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Password" className="w-5/6 sm:w-11/12 h-10 border-2 m-3  border-gray-300 rounded-md p-2" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="button">
          <button onClick={userLogin} className="bg-[#0071FF] text-xl text-white px-8 h-10 rounded-md">Login</button>
        </div>
        <div className="pb-8">
          <p className="text-sm text-black py-6">Don't have an account? <b className="cursor-pointer" onClick={() => { navigate('/signup') }}>Sign Up</b></p>
          <br /><br />
        </div>        
      </div>
    </div>
  </>;
};

export default Login;
