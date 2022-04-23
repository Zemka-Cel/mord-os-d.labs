import React from "react";
import bin from "./../../resources/assets/images/bin.png";
import myComputer from "./../../resources/assets/images/desktop-computer.png";
import folder from "./../../resources/assets/images/empty-folder.png";
import txtFile from "./../../resources/assets/images/txt-file.png";
import Icon from "../components/icon";


export default function DesktopIcons(props) {

    // Icons info
    const database = [
        {
            img: bin,
            text: "Recycle bin"
        },
        {
            img: myComputer,
            text: "This PC"
        },
        {
            img: folder,
            text: "My Docs"
        },
        {
            img: txtFile,
            text: "txt-file.txt"
        },
       
    ];

    const handleIconClick = () => {
        
    }


    return (
        <>
            <div className="v-desktopIcons">

                {database.map(item => {
                    return (
                        <>
                            <Icon icon={item.img} text={item.text} onClick={handleIconClick}/>
                        </>
                    );
                })}

            </div>
        </>
    );
}