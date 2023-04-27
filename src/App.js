import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Verify from "./pages/Verify";
import { checkLogin } from "./features/user/userSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const userToken = localStorage.getItem("user_token");
  const userGlobal = useSelector((state) => state.user.user);

  useEffect(() => {
    console.log(userToken);
    dispatch(checkLogin(userToken));
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/verify/:token" element={<Verify />} />
      </Routes>
    </div>
  );
}

export default App;
