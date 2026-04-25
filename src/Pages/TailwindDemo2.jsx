import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const TailwindDemo2 = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#f4f6fc] flex flex-col font-sans">
      <nav className="flex justify-between items-center px-10 pt-8 pb-6">
        <div className="text-2xl font-extrabold tracking-tight">co</div>
        <div className="flex space-x-10 text-gray-600 font-medium gap-5">
          <button
            onClick={() => navigate("/")}
            className="relative text-black font-semibold pb-1 border-b-2 border-blue-500">
            Color Oracle
          </button>
          <button onClick={() => navigate("/")}>Manual</button>
          <button onClick={() => navigate("/")}>Design Tips</button>
          <button onClick={() => navigate("/")}>Useful Link</button>
        </div>
      </nav>
      <div className="w-full h-16 bg-gradient-to-b from-[#f4f6fc] to-[#e9ebf7] rounded-bl-[100px] rounded-br-[100px]"></div>
      <main className="flex flex-col items-center justify-center flex-1 px-4-mt-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mt-6 mb-4 text-center">
          Design for the color impaired
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mb-12">
          Color Oracle is a free color blindness simulator for Windows, Mac and
          Linux. It takes the guesswork out of designing for color blindness by
          showing you in real time what people with common color vision
          impairments will see.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full">
          <div className="bg-white rounded-2x1 shadow-md px-10 py-10 flex flex-col items-center w-80">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZnl0smicihjEpIXL3HAI0KWl_CjfgOaPHYg&s"
              alt="Mac logo"
              className="w-16 h-16 object-contain mb-8"
            />
            <button className="border border-gray-300 text-gray-700 font-medium rounded-md px-6 py-2 hover:bg-gray-50 transition">
              Download for Mac
            </button>
          </div>
          <div className="bg-white rounded-2xl shadow-md px-10 py-10 flex flex-col items-center w-80">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd2DM26R71xJ54jS-5a40bFxEFdcWxWaw28A&s"
              alt="Window logo"
              className="w-17 h-17 object-contain mb-8"
            />
            <button className=" bg-blue-600 text-white font-medium rounded-md px-6 py-2 hover:bg-blue-700 transition">
              Download For Window
            </button>
          </div>
          <div className="bg-white rounded-2x1 shadow-md px-10 py-10 flex flex-col items-center w-80">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQsavDdPGBK_cfi-hsR4Qjl5qwTpqGXni_Zw&s"
              alt="Linux logo"
              className="w-16 h-16 object-contain mb-8"
            />
            <button className="border border-gray-300 text-gray-700 font-medium rounded-md px-6 py-2 hover:bg-gray-50 transition">
              Download for Linux
            </button>
          </div>
        </div>
      </main>
      <fotter className="bg-[#f4f6fc] mt-16 border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8 text-sm text-gray-600">
          <div>
            <span className="font-semibold">About</span>
            <br />
            Developmennt:Bernie jenny, Monash University, Australia.
            Ideas,testing and icon: Nathaniel Vaughn kelso,california.
          </div>
          <div>
            <span className="font-semibold">About</span>
            <br />
            Developmennt:Bernie jenny, Monash University, Australia.
            Ideas,testing and icon: Nathaniel Vaughn kelso,california.
          </div>
          <div>
            <span className="font-semibold">About</span>
            <br />
            Developmennt:Bernie jenny, Monash University, Australia.
            Ideas,testing and icon: Nathaniel Vaughn kelso,california.
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-6">
          @2006-2018 by Bernie jenny, Monash university,
          Melbourne,Australia.Last site update:5 May 2018.
        </div>
      </fotter>
    </div>
  );
};

export default TailwindDemo2;
