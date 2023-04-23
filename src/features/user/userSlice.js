import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      id: "",
      username: "",
      phone: "",
      store: "",
      email: "",
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;

export function loginUser(data) {
  return async (dispatch) => {
    const response = await Axios.post("http://localhost:8001/auth/login", data);
    if (response.data.success) {
      dispatch(setUser(response.data.data));
      // localStorage.setItem("user_token", response.data.token);
      console.log(response.data);
      alert("im success");
    } else {
      alert(response.data.message);
    }
  };
}
