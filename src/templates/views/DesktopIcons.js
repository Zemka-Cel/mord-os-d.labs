import React, {useContext} from "react";
import bin from "./../../resources/assets/images/bin.png";
import myComputer from "./../../resources/assets/images/desktop-computer.png";
import folder from "./../../resources/assets/images/empty-folder.png";
import newTxtFile from "./../../resources/assets/images/addition.png";
import Icon from "../components/icon";
import { windowContext } from "./UserPage";


export default function DesktopIcons(props) {

    const { state, actions } = useContext(windowContext);


    // Icons info
    const database = [
        {
            type: 'other',
            img: bin,
            alt: "alt-text",
            text: "Recycle bin"
        },
        {
            
            type: 'other',
            img: myComputer,
            alt: "alt-text",
            text: "This PC"
        },
        {
            
            type: 'documents',
            img: folder,
            alt: "alt-text",
            text: "My Docs"
        },
        {
            
            type: 'text',
            img: newTxtFile,
            alt: "alt-text",
            text: "Create New Text File"
        },
       
    ];


    return (
        <>
            <div className="v-desktopIcons">

                {database.map(item => {
                    return (
                        <>
                            <Icon type={item.type} icon={item.img} alt={item.alt} text={item.text} />
                        </>
                    );
                })}

            </div>
        </>
    );
}