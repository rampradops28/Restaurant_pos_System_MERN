import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { register } from "../../https";
import { enqueueSnackbar } from "notistack";

const Signup = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleRoleSelect = (role) => {
    setRegisterData({ ...registerData, role });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    registerMutation.mutate(registerData);
  };

  const registerMutation = useMutation({
    mutationFn: (reqData) => register(reqData),
    onSuccess: (res) => {
      enqueueSnackbar(res.data.message, { variant: "success" });
      setRegisterData({
        name: "",
        email: "",
        phone: "",
        password: "",
        role: "",
      });
    },
    onError: (error) => {
      enqueueSnackbar(error.response?.data?.message || "Signup failed", {
        variant: "error",
      });
    },
  });

  return (
    <form className="sign-up-form" onSubmit={handleRegisterSubmit}>
      <h2 className="title">Sign up</h2>

      <div className="input-field">
        <i className="fas fa-user"></i>
        <input
          type="text"
          name="name"
          value={registerData.name}
          onChange={handleRegisterChange}
          placeholder="Username"
          required
        />
      </div>

      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input
          type="email"
          name="email"
          value={registerData.email}
          onChange={handleRegisterChange}
          placeholder="Email"
          required
        />
      </div>

      <div className="input-field">
        <i className="fas fa-phone"></i>
        <input
          type="number"
          name="phone"
          value={registerData.phone}
          onChange={handleRegisterChange}
          placeholder="Phone"
          required
        />
      </div>

      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          name="password"
          value={registerData.password}
          onChange={handleRegisterChange}
          placeholder="Password"
          required
        />
      </div>

      <div className="role-selection">
        <p>Choose your role</p>
        <div className="role-buttons">
          {["Waiter","User", "Admin"].map((role) => (
            <button
              type="button"
              key={role}
              className={`role-btn ${
                registerData.role === role ? "active" : ""
              }`}
              onClick={() => handleRoleSelect(role)}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      <input type="submit" value="Sign up" className="btn solid" />
    </form>
  );
};

export default Signup;
