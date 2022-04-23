import React from "react";

export default function Icon(props) {
    const handleIconClick = () => {

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