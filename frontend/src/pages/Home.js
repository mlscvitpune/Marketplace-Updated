import React from "react";
import Login from "../components/Login";
import Signup from "../components/SignUp";

const Home = (props) => {
  return <>
    <div className="flex flex-col lg:flex-row h-full sm:h-full w-fit sm:w-full overflow-x-hidden overflow-y-auto">
      <div className=" basis-1/3 bg-white">
        <div className="flex flex-col justify-center items-center">
          <div className="welcome mx-5 mt-12">
            <p className="text-3xl sm:text-4xl text-black py-6">Welcome to</p>
            <b className="text-5xl sm:text-6xl">VIT MarketPlace</b>
          </div>
          <div className="description mx-5 mt-3">
            <p className="text-xl text-black py-6">A place where you can buy and sell your products</p>
          </div>
          <div className="about-us hidden sm:inline-flex mx-5 mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusantium iure totam quidem neque saepe dignissimos, quae recusandae! Corporis commodi earum, mollitia cupiditate perferendis beatae eius? Quam animi suscipit maxime, repellendus est et explicabo exercitationem repellat repudiandae dignissimos dicta quod accusantium molestias sunt? Perferendis asperiores placeat sunt veritatis ex tempora.
          </div>
          {/* <div className="images hidden md:inline-flex mx-5 mt-12">
            <img src="/image1.jpeg" className="rotate-[40deg] hover:rotate-45" alt="image1"/>
          </div> */}
        </div>
      </div>
      <div className="basis-1/3 bg-[#F9F9F9]">
        <div className="logo my-2">
          <img src="/logo512.png" className="w-3/4 m-auto" alt="logo" border="0" />
        </div>
        {/* <div className="images hidden md:flex mx-5 ">
          <img src="/image2.jpeg" className="rotate-[-20deg] hover:rotate-45 mt-6" alt="image1"/>
        </div>
        <div className="images hidden md:flex align-right">
          <img src="/image3.jpeg" className="hover:rotate-[20deg] mt-6" alt="image1" />
        </div> */}
      </div>
        <div className="pb-6 basis-1/3 bg-[#0071FF]">
          {
            props.isLogin ? <Login /> : <Signup />
          }
        </div>
        <div className="inline:flex sm:hidden">
          <div>
            {/* <Footer /> */}
          </div>
        </div>
      </div>
    </>
};

    export default Home;
