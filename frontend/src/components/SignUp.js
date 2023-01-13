import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const registerUser = async () => {
    const res = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    });

    const data = await res.json();

    if (data.status === 402 ) {
      window.alert("You have already registered. Please login");
      console.log("You have already registered. Please login");

      navigate('/login');
    }    else if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful. Now you can login!");
      console.log("Registration Successful");

      navigate('/login');
    }
  }

  return <>
    <div className="overflow-x:hidden w-3/4 h-3/4 mx-auto sm:mx-0 mt-10 sm:mt-10">
      <div className="flex flex-col justify-center items-center bg-[#F9F9F9] pr-2 pb-4 rounded-sm">
        <div className="title text-center">
          <p className="text-2xl text-black py-6"> SignUp for <b>VIT MarketPlace</b></p>
        </div>
        <div className="form py-4 flex flex-col item-center">
          <input type="text" placeholder="Name" className="w-5/6 md:1 sm:w-11/12 h-10 border-2 m-3  border-gray-300 rounded-md p-2" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Email" className="w-5/6 md:1 sm:w-11/12 h-10 border-2 m-3  border-gray-300 rounded-md p-2" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="Password" className="w-5/6 md:1 sm:w-11/12 h-10 border-2 m-3  border-gray-300 rounded-md p-2" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="button">
          <button onClick={registerUser} className="bg-[#0071FF] text-xl text-white px-8 h-10 rounded-md cursor-pointer">Sign Up</button>
        </div>
        <div className="pb-8">
          <p className="text-sm text-black py-6">Already have a account? <b className="cursor-pointer" onClick={() => { navigate('/login') }}>Login</b></p>
          <br /><br />
        </div>
      </div>
    </div>
  </>;
};

export default SignUp;
