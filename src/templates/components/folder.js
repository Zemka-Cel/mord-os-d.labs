import React, { useContext } from "react";
import { fileContext } from "../../App";
import txtFile from "./../../resources/assets/images/file.png";
import editTxtFile from "./../../resources/assets/images/edit-file.png";

import Icon from "./icon";


export default function Folder(props) {

    var localStorageFiles = JSON.parse(localStorage.getItem("files"));

    const { files, setFiles } = useContext(fileContext);


    const sortAscending = () =>{
        const newArray = [...localStorageFiles];
        newArray.sort( (a, b) => { return a.id - b.id });
        setFiles.setFiles(newArray);
    }

    const sortByName = () =>{
        const newArray = [...localStorageFiles];
        newArray.sort((a, b) => { return a.name === b.name ? 0 : a.name < b.name ? -1 : 1});
        setFiles.setFiles(newArray);
    }

    const sortBySize = () =>{
        const newArray = [...localStorageFiles];
        newArray.sort((a, b) => { return a.content === b.content ? 0 : a.content < b.content ? -1 : 1});
        setFiles.setFiles(newArray);
    }

    const sortDescending = () =>{
        //since state is not changing if we reverse current files array, 
        //new array is created so the state will be changed and therefore trigger component to rerender

        const newArray = [...localStorageFiles];
        newArray.sort((a, b) => { return b.id - a.id });
        setFiles.setFiles(newArray);
    }

    // function sortFiles(erej) {
    //     const newArray = [...localStorageFiles];

    //     switch(erej){
    //         case 'ascending':
    //             newArray.sort((a, b) => { return a.id - b.id });
    //             setFiles.setFiles(newArray);
    //             break;

    //         case 'descending':
    //             newArray.reverse();
    //             setFiles.setFiles(newArray);
    //             break;

    //         case 'byName':
    //             newArray.sort((a, b) => { return a.name - b.name });
    //             setFiles.setFiles(newArray);
    //             break;
    //         default:
    //             break;
    //     }

    // }

    return (
        <>
            <div className="c-folder">
                {/* simple check so other windows on open do not display files */}
                {props.folderType === 'documents' ? (
                    <>
                        {localStorageFiles.length > 1 ? (
                            <>                                    
                                    <p>Double click on buttons to sort files</p>
                                    <button className="c-folder__btn" onClick={sortAscending}>Sort ascending (id)</button>
                                    <button className="c-folder__btn" onClick={sortDescending}>Sort descending (id)</button>
                                    <button className="c-folder__btn" onClick={sortByName}>Sort by name</button>
                                    <button className="c-folder__btn" onClick={sortBySize}>Sort by size</button>
                            </>
                        ) : <h1>You don't have any files created!</h1>}
                        <div className="c-folder__iconsWrapper">
                            {localStorageFiles.map(item =>
                                <>
                                    {/* check needed due to usage of localstorage in browser to skip first empty object */}
                                    {item.id ? (
                                        <Icon icon={txtFile} hoverIcon={editTxtFile} text={item.name} type='text' alt='alt-text' object={item} />
                                    ) : null}
                                </>
                            )}
                        </div>
                    </>
                ) : <h1>This is placeholder for other folders</h1>}
            </div>
        </>
    );

}