import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";

function Verify() {
  let { token } = useParams();
  const navigate = useNavigate();

  const tokenVerification = async () => {
    try {
      if (token) {
        const response = await Axios.post(
          "http://localhost:8001/auth/verify",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data.success) {
          alert(response.data.message);
          navigate("/login");
        }
        console.log(response);
      }
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    tokenVerification();
  }, []);

  return (
    <div>
      <h1>Your Account is being Verified</h1>
      <h1>{token}</h1>
    </div>
  );
}

export default Verify;
