import { event } from "jquery";
import React, { Component } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import axios from 'axios';
import AuthService from "../../../services/AuthService";

const LoginForm = () => {
  const navigate = useNavigate();

  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);

  const [formErrors, setFormErrors] = useState({}); // this state is used for form errors

  const validateForm = () => {
    let errors = {};
    if (!formValues.username.trim()) {
      errors.username = "Please enter a username.";
    }
    if (!formValues.password.trim()) {
      errors.password = "Please enter a password.";
    }
    setFormErrors(errors);

    return Object.keys(errors).length === 0;  // returns true if no errors
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const doJwtLogin = (token) => { // set the token in localStorage
    AuthService.setToken(token);
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      axios.post('http://localhost:8080/auth/loginSubmit', {
          username: formValues.username,
          password: formValues.password,
      }).then((response) => {
          const token = response.data["jwt-token"];
          doJwtLogin(token);
          navigate("/home/stocks");
      })
      .catch((error) => {
        console.error('Error inside login API call:', error);
      });
    };
  }

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
          type="password"
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
