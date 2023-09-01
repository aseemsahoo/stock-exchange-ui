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
      <div class="container w-75 mx-auto">
        <div class="container w-50 mt-4 mb-4 mx-auto">
          <FormButton text="Login" />
          <FormButton text="Signup" />
        </div>
        <div class="w-50 mb-5 mx-auto">
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
