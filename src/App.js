import "./App.css";
import Form from "./components/Forms/form/Form";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home/home/Home";
import LoginForm from "./components/Forms/login-form/LoginForm";
import SignupForm from "./components/Forms/signup-form/SignupForm";

function App() {
  return (
    // define all the routes here
    <Routes>
      <Route path="/" element={<Form />}>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Route>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
