import React, { useState } from "react";
import closeIcon from "./../../resources/assets/images/close.png";
import minimiseIcon from "./../../resources/assets/images/minus.png";
import maximiseIcon from "./../../resources/assets/images/maximise.png";
import InputText from "../components/inputText";


export default function Window() {
    const[isShown, setIsShown] = useState(true);

    return (
        <>
        {isShown ? (
            <div className="v-window">
                <div className="v-window__banner">
                    <div className="v-window__banner_type">
                        <h3>Text editor</h3>
                        {/* <h3>Directory/Folder/This PC/ File Name or something </h3> */}
                    </div>
                    <div className="v-window__banner_icons">
                        <img className="v-window__banner_closeIcon" src={minimiseIcon} alt="alt-icon"/>
                        <img className="v-window__banner_closeIcon" src={maximiseIcon} alt="alt-icon"/>
                        <img className="v-window__banner_closeIcon" src={closeIcon} alt="alt-icon"/>
                    </div>
                    
                </div>
                <div className="v-window__content">
                    {/* display content based on icon type folder/text */}
                    <InputText />
                </div>
            </div>
            ): null}
        </>
    );

}