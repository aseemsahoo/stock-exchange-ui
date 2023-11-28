import React, { Component } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, TextField } from "@mui/material";

const SignupForm = () => {
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(`${username} ${password}`);
    alert("To be implemented;....")
    // navigate("/home");
  };

  return (
    <form class="container-fluid justify-content-center bg-light p-4"  onSubmit={onSubmit}>
      <div class="row">
        <div class="col">
          <div class="form-group p-2 py-4">
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>
        <div class="col">
          <div class="form-group p-2 py-4">
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-group p-2">
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div class="col">
          <div class="form-group p-2">
            <TextField
              id="outlined-basic"
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div class="text-center mt-4 pb-4">
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

export default SignupForm;
