import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[80px] border-b">
      <div className="flex justify-between m-auto w-3/4 h-full items-center ">
        <div className="text-5xl font-serif font-bold text-[#20B486]">Casa</div>

        <div className="flex items-center gap-4">
          <button onClick={() => navigate("/")}>Home</button>
          <button>About</button>
          <button>Platform</button>
          <button>Pricing</button>
        </div>

        <div className="flex gap-7">
          <button
            className="px-3 py-2 rounded-md bg-[#20B486] text-white font-bold"
            onClick={() => navigate("/register")}
          >
            Register your account
          </button>
          <button onClick={() => navigate("/login")}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
