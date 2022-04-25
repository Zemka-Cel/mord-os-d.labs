import React, { useContext } from "react";
import { isAuthorisedContext } from "./../../App";
import { windowContext } from "./../views/UserPage";


export default function Menu(props) {

    const { state, actions } = useContext(isAuthorisedContext);
    const { windowState, windowActions } = useContext(windowContext);

    const handleExplorerClick = (event) => {
        windowActions.setIsWindowShown(prev => { return { ...prev, state: true, type: event.currentTarget.type, name: event.currentTarget.textContent } });
        props.setShowMenu(false);
    }

    const handleLogout = () => {
        actions.setIsAuth(false);
    }

    // menu list info
    const menuList = [
        {

            key: '1',
            type: 'other',
            text: "Programs"
        },
        {

            key: '2',
            type: 'other',
            text: "Settings"
        },
        {

            key: '3',
            type: 'documents',
            text: "Documents"
        },
        {

            key: '4',
            type: 'text',
            text: "New Text File"
        },
        {

            key: '5',
            type: 'other',
            text: "Help"
        }
    ];


    return (
        <>
            <div className="c-menu">
                <ul className="c-menu__list">
                    {menuList.map(item => 
                        <>
                            <li onClick={handleExplorerClick} type={item.type} key={item.key}>{item.text}</li>
                        </>
                    )}
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