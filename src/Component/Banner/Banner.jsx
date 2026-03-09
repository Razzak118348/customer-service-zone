import React from 'react';
import vector from "../../../public/vector1.png";

const Banner = ({ inProgress, resolved }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-16 text-center'>


      <div className="relative overflow-hidden bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white p-5 rounded-xl shadow-md h-40 flex flex-col justify-center">

        <img
          src={vector}
          alt="vector"
          className="absolute left-0 top-0 h-full opacity-20"
        />

        <img
          src={vector}
          alt="vector"
          className="absolute right-0 top-0 h-full opacity-20 rotate-180"
        />

        <h2 className="text-lg font-semibold relative z-10">In Progress</h2>
        <p className="text-2xl font-bold relative z-10">{inProgress}</p>

      </div>


      <div className="relative overflow-hidden bg-gradient-to-r from-[#54CF68] to-[#00827A] text-white p-5 rounded-xl shadow-md h-40 flex flex-col justify-center">

        <img
          src={vector}
          alt="vector"
          className="absolute left-0 top-0 h-full opacity-20"
        />

        <img
          src={vector}
          alt="vector"
          className="absolute right-0 top-0 h-full opacity-20 rotate-180"
        />

        <h2 className="text-lg font-semibold relative z-10">Resolved</h2>
        <p className="text-2xl font-bold relative z-10">{resolved}</p>

      </div>

    </div>
  );
};

export default Banner;