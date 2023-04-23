import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="bg-cyan-600  flex flex-row justify-between m-auto px-20 py-5 ">
      <div className="text-3xl font-serif font-bold">kasa</div>
      <div className="flex gap-10">
        <button onClick={() => navigate("/register")}>Register</button>
        <button onClick={() => navigate("/login")}>Login</button>
      </div>
    </div>
  );
}

export default Navbar;
