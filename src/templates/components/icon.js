import React, {useContext} from "react";
import { windowContext } from "./../views/UserPage";

export default function Icon(props) {
    const { windowState, windowActions } = useContext(windowContext);

    const handleIconClick = () => {
        windowActions.setIsWindowShown(prev => {return {...prev, state: true, type: props.type, name: props.text}});
    }

    return (
        <>
            <div className="c-icon" onClick={handleIconClick}>
                <img className="c-icon__img" src={props.icon} alt={props.alt}/>
                <p className="c-icon__text">{props.text}</p>
            </div>
        </>
    );

}