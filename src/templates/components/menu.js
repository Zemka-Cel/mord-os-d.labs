import React, { useState } from "react";

export default function Menu(props) {

    const handleLogout = () => {
        props.setIsAuth(false);
    }

    return (
        <>
            <div className="c-menu">
                <ul className="c-menu__list">
                    <li>Programs</li>
                    <li>Documents</li>
                    <li>Settings</li>
                    <li>Help</li>
                </ul>
                <ul className="c-menu__list">
                    <li onClick={handleLogout}>Log out</li>
                    <li onClick={handleLogout}>Lock screen</li>
                    <li onClick={handleLogout}>Shut down</li>
                </ul>
                <div className="c-menu__user">
                    <img className="c-menu__user_img" src={props.userImg}/>
                    <p className="c-menu__user_name">User Name</p>
                </div>
            </div>
        </>
    );

}