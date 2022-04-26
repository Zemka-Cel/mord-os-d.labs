import React, { useState, useContext } from "react";
import closeIcon from "./../../resources/assets/images/close.png";
import minimiseIcon from "./../../resources/assets/images/minus.png";
import maximiseIcon from "./../../resources/assets/images/maximise.png";
import InputText from "../components/inputText";
import { windowContext } from "./UserPage";
import Folder from "../components/folder";
import Gallery from "../components/gallery";


export default function Window() {

    const { windowState, windowActions } = useContext(windowContext);
    const handleClose = () => {
        windowActions.setIsWindowShown(prev => { return { ...prev, state: false } })
    }

    return (
        <>
        
         {windowState.windowShown.state ? (
            <div className="v-window">
                <div className="v-window__banner">
                    <div className="v-window__banner_type">
                        <h3>{windowState.windowShown.name}</h3>
                    </div>
                    <div className="v-window__banner_icons">
                        <img className="v-window__banner_closeIcon" src={minimiseIcon} alt="alt-icon"/>
                        <img className="v-window__banner_closeIcon" src={maximiseIcon} alt="alt-icon"/>
                            <img className="v-window__banner_closeIcon" src={closeIcon} alt="alt-icon" onClick={handleClose}/>
                    </div>
                    
                </div>
                <div className="v-window__content">
                    {/* display content based on icon type folder/text */}
                    {windowState.windowShown.type === "text" ? (
                            <InputText object={windowState.windowShown.object}/>
                        ) 
                        : windowState.windowShown.type === "gallery" ?
                         (<Gallery folderType={windowState.windowShown.type}/>) 
                        : (<Folder folderType={windowState.windowShown.type} />)
                    }

                </div>
            </div>
            ): null}
        </>
    );

}