import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../https";
import { enqueueSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom"; 
import GradientText from '../../reactbits/GradientText.jsx'

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate(loginData);
  };

  const loginMutation = useMutation({
    mutationFn: (reqData) => login(reqData),
    onSuccess: (res) => {
      const { data } = res;
      const { _id, name, email, phone, role } = data.data;
      localStorage.setItem("accessToken", data.accessToken);
      dispatch(setUser({ _id, name, email, phone, role }));
      navigate("/");
    },
    onError: (error) => {
      enqueueSnackbar(error.response?.data?.message || "Login failed", {
        variant: "error",
      });
    },
  });

  return (
    <form className="sign-in-form" onSubmit={handleLoginSubmit}>
      <h2 className="title">Sign in</h2>

      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input
          type="email"
          name="email"
          value={loginData.email}
          onChange={handleLoginChange}
          placeholder="Email"
          required
        />
      </div>

      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleLoginChange}
          placeholder="Password"
          required
        />
      </div>

      <input type="submit" value="Login" className="btn solid" />

      {/* <button className="btn solid">
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class"
      >
        Login
      </GradientText>
    </button> */}
    </form>
  );
};

export default Login;
