import React from "react";

const TailwindDemo = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f3f7fa] via-[#fdf6f6] to-[#fff7ed] py-12 ">
    <div className="flex flex-col md:flex-row gap-8 bg-white bg-opacity-60 rounded-2x1 p-10 shadow-xl">
      <div className="flex flex-col items-center bg-white rounded-x1 shadow-md p-8 w-72 ">
        <h2 className="text-2x1 font-semibold mb-2">Free</h2>
        <div className="text-4x1 font-bold mb-1">$0</div>
        <div className="text-gray-500 mb-4">Free for your whole team</div>
        <p className="mb-6 text-center text-gray-700">
          For individuals or teams looking to organize anything.
        </p>
        <button className=" bg-purple-200 text-purple-800 font-semibold px-6 py-2 rounded-lg hover:bg-purple-300 transition">
          Get started
        </button>
      </div>

      <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-8 w-72">
        <h2 className="text-2x1 font-semibold mb-2">Standard</h2>
        <div className="text -4x1 font-bold mb-1">$6</div>
        <div className="text-gray-500 mb-4">per user per month</div>
        <p className="mb-6 text-center text-gray-700">
          For teams that need to manage more work.
        </p>
        <button className="rounded-tl-lg bg-sky-200 text-sky-800 font-semibold px-6 py-2 rounded-lg hover:bg-sky-300 transition">
          Upgrade Now
        </button>
      </div>

      <div className="flex flex-col items-center bg-white rounded-x1 shadow-md p-8 w-72">
        <h2 className="text-2x1 font-semibold mb-2">Premium</h2>
        <div className="text -4x1 font-bold mb-1">$12</div>
        <div className="text-gray-500 mb-4">per user per month</div>
        <p className="mb-6 text-center text-gray-700">
          Best for teams that need to track multiple projects.
        </p>
        <button className="bg-orange-200 text-orange-800 font-semibold px-6 py-2 rounded-lg hover:bg-orange-300 transition">
          Upgrade Now
        </button>
      </div>
    </div>
  </div>
);

export default TailwindDemo;
