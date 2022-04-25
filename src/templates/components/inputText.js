import React, {useState, useEffect, useContext} from "react";
import { fileContext } from "../../App";
import { windowContext } from "./../views/UserPage";


export default function InputText(props) {

    const { windowState, windowActions } = useContext(windowContext);
    const { files, setFiles } = useContext(fileContext);
    
    const [content, setContent] = useState('');
    const [fileName, setFileName] = useState('');
   


    useEffect(() => {
        if(props.object)  {
            setContent(props.object.content);
            setFileName(props.object.name);
        };
    },[]);

    const handleSave = (event) => {
        event.preventDefault();

        if(props.object){
            let currentFile = files.files.find((element) => element.id === props.object.id);
            let index = files.files.findIndex((element) => element.id === props.object.id);

            files.files.splice(index,1);
            setFiles.setFiles([...files.files, { id: currentFile.id, name: fileName, type: 'text', content: content }]);
            //note: edge case, solve name-duplicates

        } else{
            setFiles.setFiles([...files.files, { id: files.files.length, name: fileName, type: 'text', content: content }]);
        }

        windowActions.setIsWindowShown(false);
    }
   
    return (
        <>
            <form className="c-inputText" onSubmit={handleSave}> 
                <textarea className="c-inputText__textarea" id="textarea" name="content" value={content} onInput={e => setContent(e.target.value)}></textarea>
                <div className="c-inputText__save">
                    <input className="c-inputText__fileName" type="text" id="fileName" name="fileName" placeholder="Insert file name" value={fileName} onInput={e => setFileName(e.target.value)} required/>

                    <input className="c-inputText__saveBtn" value="Save" type="submit" />

                </div>
                
            </form>
        </>
    );

}