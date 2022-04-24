import React, { useContext } from "react";
import { isAuthorisedContext } from "./../../App";
import { windowContext } from "./../views/UserPage";


export default function Menu(props) {

    const { state, actions } = useContext(isAuthorisedContext);
    const { windowState, windowActions } = useContext(windowContext);

    const handleExplorerClick = (event) => {
        windowActions.setIsWindowShown(prev => { return { ...prev, state: true, type: 'folder', name: event.currentTarget.textContent } });
        props.setShowMenu(false);
    }

    const handleLogout = () => {
        actions.setIsAuth(false);
    }

    return (
        <>
            <div className="c-menu">
                <ul className="c-menu__list">
                    <li onClick={handleExplorerClick}>Programs</li>
                    <li onClick={handleExplorerClick}>Documents</li>
                    <li onClick={handleExplorerClick}>Settings</li>
                    <li onClick={handleExplorerClick}>Help</li>
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