import React, { useState, useEffect } from "react";
import menuLogo from './../../resources/assets/images/logo.png'

import { Link } from "react-router-dom";
import Menu from "./menu";


export default function Taskbar(props) {
    const [dateState, setDateState] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);

    const currentTime = dateState.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const currentDate = dateState.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

    


    const [showMenu, setShowMenu] = useState(false);


    function toggleMenu(){
        if(showMenu){
            setShowMenu(false);
        }else{
            setShowMenu(true);
        }
       
    }

    return (
        <div className="c-taskbar">
            <div className="c-taskbar__menu">
                <img className="c-taskbar__menu_logo" src={menuLogo} onClick={toggleMenu}/>
                {showMenu ? (
                    <Menu userImg={props.userImg} setIsAuth={props.setIsAuth}/>
                ):null}
            </div>
            <div className="c-taskbar__date">
                <p> {currentTime} </p>
                <p> {currentDate} </p>
            </div>
        </div>
    );
}