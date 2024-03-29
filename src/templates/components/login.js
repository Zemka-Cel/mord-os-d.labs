import userImg from "./../../resources/assets/images/user.png";
import React, { useContext, useState } from "react";
import { isAuthorisedContext } from "./../../App";

export default function Login(props) {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const { state, actions } = useContext(isAuthorisedContext);

   
    // User Login info
    const database = [
        {
            email: "borgoth@mordos.com",
            password: "12bindthem"
        },
        {
            email: "user",
            password: "pass"
        }
    ];

    const errors = {
        email: "invalid email!",
        pass: "invalid password!"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { email, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.email === email.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                actions.setIsAuth(true);
            }
        } else {
            // Email not found
            setErrorMessages({ name: "email", message: errors.email });
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="c-login__form_error">{errorMessages.message}</div>
        );


    return (
        <>
        <div className="c-login">
            <div className="c-login__wrapper">
                <img className="c-login__userImg" src={userImg} alt="user"/>
                <form className="c-login__form" onSubmit={handleSubmit}>
                    <input type="text" id="email" name="email" placeholder="email"/>
                    {renderErrorMessage("email")}

                    <input type="password" id="pass" name="pass" placeholder="password"/>
                    {renderErrorMessage("pass")}

                    <input className="c-login__form_submitBtn" type="submit" value="Login"/>
                </form>
            </div>
        </div>
        </>
    );
}