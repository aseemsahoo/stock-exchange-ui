import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import './FormButton.css';


const FormButton = ({ text }) => {
let isSelected = false;
    const navigate = useNavigate();
    const onClick = () => {
        isSelected = !isSelected;
        // console.log(isSelected);
        // console.log(text);

        if (text === 'Login') {
            navigate('/login');
        }
        if (text === 'Signup') {
            navigate('/signup');
        }
    }
    return (
        <button onClick={onClick}
        className="btn btn-warning btn-lg btn-block" > {text}</button>
    )
}

export default FormButton
