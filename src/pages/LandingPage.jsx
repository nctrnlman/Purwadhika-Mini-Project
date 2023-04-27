import React from "react";
import cas from "../assets/cas.png";
import company1 from "../assets/company 1.jpg";
import company2 from "../assets/company 2.jpg";
import company3 from "../assets/company 3.jpg";

function LandingPage() {
  return (
    <div className="w-full bg-white py-24">
      <div className="m-auto w-3/4 grid grid-cols-2">
        <div className="flex flex-col justify-start gap-4">
          <p className="text-2xl font-medium text-[#20B486]">Start With Casa</p>
          <h1 className="text-5xl font-semibold">
            access to many features <br />
            that can grow your business
          </h1>
          <p className="text-lg text-grey-600 py-1">
            Various versions have evolved over the years.
          </p>
          <form className="p-5 shadow-lg rounded-md w-[500px] my-2">
            <input
              type="text"
              className="bg-white"
              placeholder="What do want to know?"
            />
          </form>
        </div>
        <img src={cas} alt="" className="rounded-md" />
      </div>

      <div className="m-auto w-3/4 py-24 ">
        <h1 className="text-center text-2xl font-bold text-[#536E96]">
          Trusted by over 20,000 Store around the world.
        </h1>
        <p className="text-[#536E96] text-center text-xl">
          Everything Will be easy with Casa
        </p>
        <div className="flex justify-center py-2">
          <img src={company1} alt="" width="100px" />
          <img src={company2} alt="" width="100px" />
          <img src={company3} alt="" width="100px" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
