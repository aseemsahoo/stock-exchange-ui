import { event } from "jquery";
import React, { Component } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, TextField } from "@mui/material";

const LoginForm = () => {
  const navigate = useNavigate();

  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);

  // this state is used for form errors
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!formValues.username.trim()) {
      errors.username = "Please enter a username.";
    }
    if (!formValues.password.trim()) {
      errors.password = "Please enter a password.";
    }
    setFormErrors(errors);

    // returns true if no errors
    return Object.keys(errors).length === 0;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    console.log(formValues);

    if (validateForm()) {
      alert("No user authentication yet....");
      navigate("/home");
    }
  };

  return (
    <form className="container bg-light p-4" onSubmit={onSubmit}>
      <div className="form-group p-3 pt-4 text-center">
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          name="username"
          defaultValue={formValues.username}
          onChange={onChange}
        />
      </div>
      <div className="text-center">
        {formErrors.username && (
          <small className="text text-danger">{formErrors.username}</small>
        )}
      </div>
      <div className="form-group p-3 text-center">
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
          defaultValue={formValues.password}
          onChange={onChange}
        />
      </div>
      <div className="text-center">
        {formErrors.username && (
          <small className="text text-danger">{formErrors.username}</small>
        )}
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
