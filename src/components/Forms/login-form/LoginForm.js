import { event } from "jquery";
import React, { Component } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, TextField } from "@mui/material";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(username + password);
    navigate("/home");
  };

  return (
    <form className="container bg-light p-4" onSubmit={onSubmit}>
      <div className="form-group p-3 pt-4 text-center">
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {/* <!-- <small *ngIf="submitted && loginForm.controls['username'].errors" className="text text-danger"> Please enter the username</small> --> */}
      </div>
      <div className="form-group p-3 text-center">
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <!-- <small *ngIf="loginForm.controls['password'].invalid" className="text text-danger"> Please enter the password</small> --> */}
      </div>
      <div className="text-center mt-4 pb-4">
        <Button
          variant="contained"
          className="btn btn-primary w-50"
          type="submit"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
