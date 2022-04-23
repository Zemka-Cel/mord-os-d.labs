import React from "react";
import closeIcon from "./../../resources/assets/images/close.png";
import minimiseIcon from "./../../resources/assets/images/minus.png";
import maximiseIcon from "./../../resources/assets/images/maximise.png";


export default function Window(props) {
    return (
        <>
            <div className="v-window">
                <div className="v-window__banner">
                    <div className="v-window__banner_icons">
                        <img className="v-window__banner_closeIcon" src={minimiseIcon} />
                        <img className="v-window__banner_closeIcon" src={maximiseIcon} />
                        <img className="v-window__banner_closeIcon" src={closeIcon} />
                    </div>
                    
                </div>
                <div className="v-window__content">
                    
                </div>
            </div>
        </>
    );

}