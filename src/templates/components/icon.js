import React, { useState } from "react";

export default function Icon(props) {
    return (
        <>
            <div className="c-icon">
                <img className="c-icon__img" src={props.icon} />
                <p className="c-icon__text">{props.text}</p>
            </div>
        </>
    );

}