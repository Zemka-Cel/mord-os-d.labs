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
            type: 'folder',
            img: bin,
            text: "Recycle bin"
        },
        {
            type: 'folder',
            img: myComputer,
            text: "This PC"
        },
        {
            type: 'folder',
            img: folder,
            text: "My Docs"
        },
        {
            type: 'text',
            img: txtFile,
            text: "txt-file.txt"
        },
       
    ];

    


    return (
        <>
            <div className="v-desktopIcons">

                {database.map(item => {
                    return (
                        <>
                            <Icon type={item.type} icon={item.img} text={item.text} />
                        </>
                    );
                })}

            </div>
        </>
    );
}