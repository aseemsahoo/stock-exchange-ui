import React, { Component } from "react";
import FormButton from "../form-button/FormButton";
import { Routes, Route, useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import SignupForm from "../signup-form/SignupForm";
import Navigation from "../Navigation/Navigation"

import LoginForm from "../login-form/LoginForm";

export default class Form extends Component {
  render() {
    return (
      <>
      <Navigation></Navigation>
      <div className="container-fluid w-75 justify-content-center">
        <div className="container w-100 mt-4 mb-4 text-center">
          <FormButton text="Login" />
          <FormButton text="Signup" />
        </div>
        <div className="w-50 mb-5 mx-auto">
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
          </Routes>
        </div>
      </div>
      </>
    );
  }
}
