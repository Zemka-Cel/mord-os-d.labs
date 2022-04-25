import React, { useContext } from "react";
import { windowContext } from "./../views/UserPage";
import { fileContext } from "../../App";
import txtFile from "./../../resources/assets/images/txt-file.png";

import Icon from "./icon";


export default function Folder(props) {
    const { windowState, windowActions } = useContext(windowContext);
    const { files, setFiles } = useContext(fileContext);

    var localStorageFiles = JSON.parse(localStorage.getItem("files"));

    if(localStorageFiles.length === 1){return;}

    return (
        <>
            <div className="c-folder">
                
                {localStorageFiles.map(item => 
                    <>
                    {/* check needed due to usage of localstorage in browser to skip first empty object */}
                    {item.id ? (
                        <Icon icon={txtFile} text={item.name} type='text' alt='alt-text' object={item}/>
                        ):null}
                    </>
                )}
            </div>
        </>
    );

}